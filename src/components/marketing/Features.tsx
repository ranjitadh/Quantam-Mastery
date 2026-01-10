export function Features() {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from seasoned traders with proven track records",
    },
    {
      title: "Real-Time Discussions",
      description: "Engage in live market analysis and strategy sessions",
    },
    {
      title: "Exclusive Resources",
      description: "Access premium tools, courses, and trading insights",
    },
    {
      title: "Community Support",
      description: "Connect with like-minded traders on your journey",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl">
          What Makes This Community Different
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-amber-100 text-2xl font-bold text-amber-600">
                {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
