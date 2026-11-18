"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword(e: FormEvent) {
    e.preventDefault();
    setNotice("");

    if (password.length < 8) {
      setNotice("Password must contain at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setNotice("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setNotice("Password updated successfully. Please log in.");
      setTimeout(() => router.replace("/mail/login"), 1500);
    } catch (err: any) {
      setNotice(err.message || "Password could not be updated.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mail-shell">
      <div className="mail-container mail-login-container">
        <section className="mail-panel mail-login-panel">
          <span className="mail-kicker">BISMILLAH MAIL</span>
          <h1>Reset <span>Password</span></h1>
          <form className="mail-form" onSubmit={updatePassword}>
            <label>New password</label>
            <input
              required
              minLength={8}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 8 characters"
            />
            <label>Confirm new password</label>
            <input
              required
              minLength={8}
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Enter password again"
            />
            <button type="submit" className="mail-button" disabled={loading}>
              {loading ? "Please wait..." : "Update Password"}
            </button>
          </form>
          {notice && <p className="mail-notice" role="status">{notice}</p>}
        </section>
      </div>
    </main>
  );
}
