const cards = [
  { label: "New leads", value: "128", hint: "+24% vs last week" },
  { label: "Activation rate", value: "63%", hint: "Goal: 70%" },
  { label: "MRR (placeholder)", value: "$8.4k", hint: "+12% MoM" },
  { label: "Churn (placeholder)", value: "3.2%", hint: "Healthy range" },
];

export function StatsGrid() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.label}
          className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-3 shadow-sm shadow-slate-950/40"
        >
          <p className="text-[11px] font-medium text-slate-400">
            {card.label}
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-50">
            {card.value}
          </p>
          <p className="mt-1 text-[10px] text-slate-500">{card.hint}</p>
        </article>
      ))}
    </section>
  );
}

