import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/leads", label: "Leads" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-slate-900/80 bg-slate-950/90 px-4 py-4 sm:flex sm:flex-col">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-sky-500/90 shadow-lg shadow-sky-500/40" />
        <div>
          <p className="text-xs font-semibold text-slate-100">
            Quantum Mastery
          </p>
          <p className="text-[10px] text-slate-500">Admin dashboard</p>
        </div>
      </div>
      <nav className="space-y-1 text-sm">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-md px-2 py-1.5 text-xs font-medium transition ${
                active
                  ? "bg-slate-800 text-sky-200"
                  : "text-slate-300 hover:bg-slate-900 hover:text-slate-50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-6 text-[10px] text-slate-500">
        <p>Ready for multi-tenant & role-based expansion.</p>
      </div>
    </aside>
  );
}

