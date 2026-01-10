export function EcosystemSection() {
  const features = [
    "Education modules",
    "Journaling and performance analytics",
    "Trading competitions",
    "Mentorship pathways",
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-black sm:text-4xl">
          More Than a Community - An Ecosystem
        </h2>
        <p className="mb-12 text-center text-lg text-slate-600">
          Your community access connects seamlessly with:
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-black p-8 text-white">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-amber-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-300">
              Everything works together to support clarity, consistency, and
              confidence.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-8">
            <div className="text-center text-slate-400">
              <p className="mb-2 text-sm font-medium">Dashboard Image</p>
              <p className="text-xs">Community feature visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
