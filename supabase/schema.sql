-- Core auth-linked profile table with roles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'user',
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles
  for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles
  for update
  using (auth.uid() = id);

-- Leads / waitlist table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  metadata jsonb,
  created_at timestamptz default now()
);

alter table public.leads enable row level security;

create policy "Only admins can see all leads"
  on public.leads
  for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Anyone can insert themselves as a lead"
  on public.leads
  for insert
  with check (true);

-- Dashboard metrics placeholder table (extend as needed)
create table if not exists public.dashboard_metrics (
  id uuid primary key default gen_random_uuid(),
  metric_key text not null,
  metric_value numeric,
  labels jsonb,
  recorded_at timestamptz default now()
);

alter table public.dashboard_metrics enable row level security;

create policy "Admins can read dashboard metrics"
  on public.dashboard_metrics
  for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

