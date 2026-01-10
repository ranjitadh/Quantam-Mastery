"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Join 500+ Trading Legends
        </h1>
        <p className="mb-8 text-lg text-slate-300 sm:text-xl">
          Connect with experienced professionals, engage in real-time market
          discussions, and be part of an exclusive private community.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/community"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-slate-900"
          >
            Explore Community
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          <span className="text-amber-400">★★★★★</span> 200+ traders joined this program
        </p>
      </div>
    </section>
  );
}
