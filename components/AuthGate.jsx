"use client";

import { useState } from "react";

const StarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" fill="#B388FF" />
  </svg>
);

export default function AuthGate({ onAuth, sessionChecking = false }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const reset = () => { setError(""); setSuccess(""); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset();
    setLoading(true);

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
      } else if (mode === "signup") {
        // Auto-login after signup so user goes straight to the app
        const loginRes = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const loginData = await loginRes.json();
        if (loginRes.ok) {
          onAuth(loginData.user);
        } else {
          // Login failed for some reason — show success and let them sign in manually
          setSuccess("Account created! Check your email to verify, then sign in.");
          setEmail("");
          setPassword("");
        }
      } else {
        // Login success — bubble up to parent
        onAuth(data.user);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <StarIcon />
          <h1 className="text-white font-bold text-2xl font-inter tracking-tight">
            Sticky Notes Online
          </h1>
          <p className="text-[#707070] text-sm font-inter">
            {mode === "login" ? "Sign in to your account" : "Create a new account"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#161616] border border-[#2a2a2a] rounded-sm p-8 space-y-5">
          {/* Tab toggle */}
          <div className="flex rounded-sm overflow-hidden border border-[#2a2a2a]">
            <button
              type="button"
              onClick={() => { setMode("login"); reset(); }}
              className={`flex-1 py-2 text-sm font-medium font-inter transition-colors ${
                mode === "login" ? "bg-[#2a2a2a] text-white" : "text-[#707070] hover:text-[#CFCFCF]"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setMode("signup"); reset(); }}
              className={`flex-1 py-2 text-sm font-medium font-inter transition-colors ${
                mode === "signup" ? "bg-[#2a2a2a] text-white" : "text-[#707070] hover:text-[#CFCFCF]"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-2 font-inter">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="w-full bg-transparent border border-[#2a2a2a] focus:border-[#CFCFCF] text-[#CFCFCF] placeholder-[#3a3a3a] rounded-sm px-3 py-2.5 outline-none transition-colors text-sm font-inter"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-2 font-inter">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
                required
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                className="w-full bg-transparent border border-[#2a2a2a] focus:border-[#CFCFCF] text-[#CFCFCF] placeholder-[#3a3a3a] rounded-sm px-3 py-2.5 outline-none transition-colors text-sm font-inter"
              />
            </div>

            {/* Error / Success */}
            {error && (
              <p className="text-[#FF8A80] text-xs font-inter bg-[#FF8A80]/10 border border-[#FF8A80]/20 rounded-sm px-3 py-2">
                {error}
              </p>
            )}
            {success && (
              <p className="text-[#CCFF90] text-xs font-inter bg-[#CCFF90]/10 border border-[#CCFF90]/20 rounded-sm px-3 py-2">
                {success}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B388FF] hover:bg-[#9c6fe8] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-2.5 rounded-sm transition-colors font-inter text-sm"
            >
              {loading
                ? mode === "login" ? "Signing in…" : "Creating account…"
                : mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Guest note */}
          <p className="text-[#3a3a3a] text-xs font-inter text-center pt-1">
            {mode === "signup"
              ? "Unverified accounts use local storage only."
              : "Don't have an account? Switch to Sign Up above."}
          </p>
        </div>

        {/* Continue as guest */}
        <button
          onClick={() => onAuth(null)}
          disabled={sessionChecking}
          className="w-full mt-4 text-[#707070] hover:text-[#CFCFCF] disabled:opacity-40 text-xs font-inter transition-colors py-2"
        >
          {sessionChecking ? "Checking session…" : "Continue without an account →"}
        </button>
      </div>
    </div>
  );
}
