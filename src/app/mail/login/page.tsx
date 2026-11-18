"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function MailLoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const strengthChecks = [
    password.length >= 8,
    (password.match(/[A-Z]/g) || []).length >= 3,
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const strengthScore = strengthChecks.filter(Boolean).length;
  const passwordStrength =
    strengthScore <= 1 ? "Weak" :
    strengthScore <= 3 ? "Medium" : "Strong";

  async function sendPasswordReset() {
    if (!email.trim()) {
      setNotice("Please enter your account email first.");
      return;
    }

    setLoading(true);
    setNotice("");
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        { redirectTo: `${window.location.origin}/mail/reset-password` }
      );
      if (error) throw error;
      setNotice("Password reset link sent. Please check your email.");
    } catch (err: any) {
      setNotice(err.message || "Could not send reset email.");
    } finally {
      setLoading(false);
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setNotice("");

    try {
      if (mode === "signup") {
        const dob = new Date(dateOfBirth + "T00:00:00");
        const adultLimit = new Date();
        adultLimit.setFullYear(adultLimit.getFullYear() - 18);

        if (
          !dateOfBirth ||
          Number.isNaN(dob.getTime()) ||
          dob > adultLimit
        ) {
          throw new Error("You must be at least 18 years old to register.");
        }

        if (!["Male", "Female"].includes(gender)) {
          throw new Error("Please select Male or Female.");
        }

        if (
          password.length < 8 ||
          (password.match(/[A-Z]/g) || []).length < 3 ||
          !/[0-9]/.test(password) ||
          !/[^A-Za-z0-9]/.test(password)
        ) {
          throw new Error(
            "Password needs 8 characters, 3 capital letters, 1 number and 1 special character."
          );
        }

        const cleanUsername = username.trim().toLowerCase();

        if (!/^[a-z0-9_]{3,20}$/.test(cleanUsername)) {
          throw new Error(
            "Username must be 3-20 characters using lowercase letters, numbers or underscore."
          );
        }

        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: name.trim(),
              username: cleanUsername,
              gender,
              date_of_birth: dateOfBirth,
            },
          },
        });

        if (error) throw error;

        if (data.session && data.user) {
          const { error: profileError } = await supabase
            .from("profiles")
            .upsert({
              id: data.user.id,
              full_name: name.trim(),
              username: cleanUsername,
              gender,
              date_of_birth: dateOfBirth,
            });

          if (profileError) throw profileError;
          router.replace("/mail");
        } else {
          setNotice(
            "Account created. Please verify your email, then log in."
          );
        }
      } else {
        const { data, error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) throw error;

        if (data.user) {
          const { error: profileError } = await supabase
            .from("profiles")
            .update({
              full_name: data.user.user_metadata?.full_name || "",
            })
            .eq("id", data.user.id);

          if (profileError) throw profileError;
          router.replace("/mail");
        }
      }
    } catch (err: any) {
      const message = err.message || "";
      if (
        message.includes("profiles_username_key") ||
        message.toLowerCase().includes("duplicate key") ||
        message.toLowerCase().includes("unique constraint")
      ) {
        setNotice("This username is already taken. Please choose another.");
      } else {
        setNotice(message || "Something went wrong.");
      }
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
            <button
              type="button"
              className={mode === "login" ? "mail-tab active" : "mail-tab"}
              onClick={() => {
                setMode("login");
                setNotice("");
              }}
            >
              Login
            </button>

            <button
              type="button"
              className={mode === "signup" ? "mail-tab active" : "mail-tab"}
              onClick={() => {
                setMode("signup");
                setNotice("");
              }}
            >
              Create Account
            </button>
          </div>

          <h2>
            {mode === "login" ? "Welcome Back" : "Join BISMILLAH NETWORK"}
          </h2>

          <form className="mail-form" onSubmit={submit}>
            {mode === "signup" && (
              <>
                <label>Full name</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your full name"
                />

                <label>Username</label>
                <small>Examples: waseem786, ali_khan, user2026</small>
                <input
                  required
                  minLength={3}
                  maxLength={20}
                  pattern="[a-zA-Z0-9_]{3,20}"
                  value={username}
                  onChange={e =>
                    setUsername(e.target.value.toLowerCase())
                  }
                  placeholder="e.g. waseemtariq"
                />
                <small>3-20 characters: letters, numbers and underscore.</small>

                <label>Gender</label>
                <select
                  required
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <label>Date of Birth</label>
                <input
                  required
                  type="date"
                  value={dateOfBirth}
                  onChange={e => setDateOfBirth(e.target.value)}
                />
                <small>You must be 18 or older. Age is self-declared.</small>
              </>
            )}

            <label>Account email</label>
            <input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
            />

            <label>Password</label>
            <small>Signup: 8+ characters, 3 capital letters, 1 number and 1 special character.</small>
            <div className="mail-password-wrap">
              <input
                required
                minLength={mode === "signup" ? 8 : 1}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="mail-password-toggle"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {mode === "signup" && password.length > 0 && (
              <div className="mail-password-strength">
                <span>Password strength: <strong>{passwordStrength}</strong></span>
                <div className="mail-strength-track">
                  <div
                    className={`mail-strength-fill strength-${passwordStrength.toLowerCase()}`}
                    style={{ width: `${strengthScore * 25}%` }}
                  />
                </div>
              </div>
            )}

            <button type="submit" className="mail-button" disabled={loading}>
              {loading
                ? "Please wait..."
                : mode === "login"
                  ? "Login"
                  : "Create Account"}
            </button>
          </form>

          {mode === "login" && (
            <button
              type="button"
              className="mail-forgot-button"
              onClick={sendPasswordReset}
              disabled={loading}
            >
              Forgot Password?
            </button>
          )}

          {notice && (
            <p className="mail-notice" role="status">{notice}</p>
          )}

          <p className="mail-login-back">
            <Link href="/mail">← Back to BISMILLAH MAIL</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
