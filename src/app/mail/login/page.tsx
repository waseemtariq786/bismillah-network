"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function MailLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setNotice("");

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() } },
        });

        if (error) throw error;

        if (data.session && data.user) {
          const { error: profileError } = await supabase.from("profiles").upsert({
            id: data.user.id,
            full_name: name.trim(),
          });
          if (profileError) throw profileError;
          router.replace("/mail");
        } else {
          setNotice("Account created. Please check your email if confirmation is required, then log in.");
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        if (data.user) {
          const { error: profileError } = await supabase.from("profiles").upsert({
            id: data.user.id,
            full_name: data.user.user_metadata?.full_name || "",
          });
          if (profileError) throw profileError;
          router.replace("/mail");
        }
      }
    } catch (err: any) {
      setNotice(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mail-shell">
      <div className="mail-container mail-login-container">
        <section className="mail-panel mail-login-panel">
          <span className="mail-kicker">ONE NETWORK • ONE VISION</span>
          <h1>BISMILLAH <span>MAIL</span></h1>
          <div className="mail-tabs">
            <button className={mode === "login" ? "mail-tab active" : "mail-tab"} onClick={() => { setMode("login"); setNotice(""); }}>Login</button>
            <button className={mode === "signup" ? "mail-tab active" : "mail-tab"} onClick={() => { setMode("signup"); setNotice(""); }}>Create Account</button>
          </div>
          <h2>{mode === "login" ? "Welcome Back" : "Join BISMILLAH NETWORK"}</h2>
          <form className="mail-form" onSubmit={submit}>
            {mode === "signup" && (
              <>
                <label>Full name</label>
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
              </>
            )}
            <label>Account email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" />
            <label>Password</label>
            <input required minLength={6} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 6 characters" />
            <button className="mail-button" disabled={loading}>
              {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>
          {notice && <p className="mail-notice" role="status">{notice}</p>}
          <p className="mail-login-back"><Link href="/mail">← Back to BISMILLAH MAIL</Link></p>
        </section>
      </div>
    </main>
  );
}
