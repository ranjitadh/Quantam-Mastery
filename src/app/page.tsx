export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12 text-slate-50">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
          Production-ready stack · Next.js · Supabase · Tailwind
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Quantum-grade starter for your next SaaS dashboard.
        </h1>
        <p className="text-balance text-sm text-slate-300 sm:text-base">
          Auth, roles, responsive dashboard layout, and Supabase integration ready out
          of the box. Focus on features, not boilerplate.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="/auth/signup"
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            Get started – create account
          </a>
          <a
            href="/auth/login"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800/80"
          >
            Sign in to dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
