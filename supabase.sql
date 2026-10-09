-- Run this whole file in Supabase: SQL Editor -> New query -> Run.
-- Then run seed.sql to load the questions.

create table if not exists public.questions (
  id           int primary key,
  topic        text not null,
  difficulty   text not null check (difficulty in ('easy','medium','hard')),
  question     text not null,
  choices      jsonb not null,
  answer_index int  not null check (answer_index between 0 and 3),
  solution     text not null,
  points       int  not null default 10
);

create table if not exists public.attempts (
  id           bigint generated always as identity primary key,
  user_name    text not null,
  score        int  not null,
  total_points int  not null,
  correct      int  not null default 0,
  wrong        int  not null default 0,
  unanswered   int  not null default 0,
  created_at   timestamptz not null default now()
);

create table if not exists public.attempt_answers (
  id             bigint generated always as identity primary key,
  attempt_id     bigint not null references public.attempts(id) on delete cascade,
  question_id    int    not null references public.questions(id),
  selected_index int,                 -- NULL = left unanswered
  is_correct     boolean not null default false,
  points_earned  int not null default 0
);

-- One row per (user, question): latest status. This powers "Review unanswered" and "Retry wrong".
create table if not exists public.user_progress (
  user_name   text not null,
  question_id int  not null references public.questions(id),
  status      text not null check (status in ('correct','wrong','unanswered')),
  updated_at  timestamptz not null default now(),
  primary key (user_name, question_id)
);

-- Points = sum of points of questions the user has answered correctly (no farming by repeating).
create or replace view public.leaderboard as
select p.user_name,
       coalesce(sum(q.points) filter (where p.status = 'correct'), 0)::int as points,
       count(*) filter (where p.status = 'correct')::int as correct
from public.user_progress p
join public.questions q on q.id = p.question_id
group by p.user_name;

-- Row Level Security
alter table public.questions       enable row level security;
alter table public.attempts        enable row level security;
alter table public.attempt_answers enable row level security;
alter table public.user_progress   enable row level security;

drop policy if exists "read questions"   on public.questions;
drop policy if exists "read attempts"    on public.attempts;
drop policy if exists "add attempts"     on public.attempts;
drop policy if exists "read answers"     on public.attempt_answers;
drop policy if exists "add answers"      on public.attempt_answers;
drop policy if exists "read progress"    on public.user_progress;
drop policy if exists "add progress"     on public.user_progress;
drop policy if exists "update progress"  on public.user_progress;

create policy "read questions"  on public.questions       for select to anon, authenticated using (true);
create policy "read attempts"   on public.attempts        for select to anon, authenticated using (true);
create policy "add attempts"    on public.attempts        for insert to anon, authenticated with check (true);
create policy "read answers"    on public.attempt_answers for select to anon, authenticated using (true);
create policy "add answers"     on public.attempt_answers for insert to anon, authenticated with check (true);
create policy "read progress"   on public.user_progress   for select to anon, authenticated using (true);
create policy "add progress"    on public.user_progress   for insert to anon, authenticated with check (true);
create policy "update progress" on public.user_progress   for update to anon, authenticated using (true) with check (true);

grant select on public.leaderboard to anon, authenticated;

-- NOTE: players are identified by a nickname only (no login), so any visitor can read/write any nickname's progress.
-- That is fine for a class or friends quiz. For real accounts, switch to Supabase Auth and
-- change the policies to use auth.uid().
