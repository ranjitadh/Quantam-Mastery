import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { PlaceholderPanels } from "@/components/dashboard/PlaceholderPanels";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-50">
          Overview
        </h1>
        <p className="mt-1 text-xs text-slate-400">
          High-level snapshot of your product performance. Wire real data into
          these widgets from Supabase as you grow.
        </p>
      </div>
      <StatsGrid />
      <PlaceholderPanels />
    </div>
  );
}

