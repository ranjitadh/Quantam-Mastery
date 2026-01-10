"use client";

import { usePathname } from "next/navigation";
import { logout } from "@/app/dashboard/actions";

export function TopNav() {
  const pathname = usePathname();

  const title =
    pathname === "/dashboard"
      ? "Overview"
      : pathname.startsWith("/dashboard/leads")
      ? "Leads"
      : pathname.startsWith("/dashboard/settings")
      ? "Settings"
      : "Dashboard";

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-900/80 bg-slate-950/80 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
          Dashboard
        </span>
        <span className="text-xs font-medium text-slate-100">{title}</span>
      </div>
      <form action={logout} className="flex items-center gap-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-[11px] font-medium text-slate-100 shadow-sm transition hover:bg-slate-800"
        >
          Sign out
        </button>
      </form>
    </header>
  );
}

