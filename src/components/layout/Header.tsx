"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Features" },
  { href: "/program", label: "Program" },
  { href: "/community", label: "Community" },
  { href: "/pricing", label: "Plans" },
  { href: "/affiliates", label: "Affiliates" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/40" />
          <span className="text-lg font-bold text-white">QUANTUM MASTERY</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
