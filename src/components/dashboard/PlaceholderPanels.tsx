export function PlaceholderPanels() {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4 lg:col-span-2">
        <p className="text-xs font-medium text-slate-300">
          Chart-ready area (traffic, conversions, revenue)
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          Wire this panel to a Supabase table or view for time-series data.
        </p>
        <div className="mt-4 h-40 rounded-md border border-dashed border-slate-800/80 bg-slate-900/60" />
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
          <p className="text-xs font-medium text-slate-300">Latest leads</p>
          <p className="mt-1 text-[11px] text-slate-500">
            Map this to your `leads` / waitlist table in Supabase.
          </p>
          <div className="mt-3 h-20 rounded-md border border-dashed border-slate-800/80 bg-slate-900/60" />
        </div>
        <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4">
          <p className="text-xs font-medium text-slate-300">System health</p>
          <p className="mt-1 text-[11px] text-slate-500">
            Placeholder for jobs, webhooks, or error monitoring.
          </p>
        </div>
      </div>
    </section>
  );
}

