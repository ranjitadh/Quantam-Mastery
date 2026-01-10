export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8 text-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/60">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold tracking-tight">
            Quantum Mastery
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Secure access to your analytics dashboard.
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}

