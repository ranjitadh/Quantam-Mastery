import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { createSupabaseServerClient } from "@/lib/supabaseClient";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Dashboard | Quantum Mastery",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <DashboardShell>{children}</DashboardShell>;
}

