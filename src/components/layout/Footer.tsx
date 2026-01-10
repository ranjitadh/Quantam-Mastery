"use client";

import { useState } from "react";
import { apiClient } from "@/lib/api";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const response = await apiClient.post("/api/newsletter", { email, source: "footer" });

    if (response.error) {
      setMessage({ type: "error", text: response.error });
    } else {
      setMessage({ type: "success", text: "Successfully subscribed!" });
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Sign Up for Our Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <p
                className={`mt-2 text-xs ${
                  message.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message.text}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <a
              href="https://t.me/quantummastery"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Join Telegram
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Quantum Mastery. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-400">
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy Act
              </a>
              <a href="/disclaimer" className="hover:text-white">
                Disclaimer Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
