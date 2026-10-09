# EE Quizzer

Multiple-choice quiz site for electrical engineering problems (HTML + CSS + JavaScript, Supabase database).

## Features
- Multiple choice quiz, random order of questions and choices
- Answer + full solution after submitting (or after every question in Practice mode)
- Points: easy 10, medium 15, hard 20. Points count once per question (no farming by repeating)
- Unanswered questions are saved, so you can use "Review unanswered" to go back to them
- "Retry wrong" and per-topic selection, leaderboard, per-player progress

## Setup (Supabase)
1. Create a project at supabase.com.
2. SQL Editor -> run `supabase.sql`, then run `seed.sql`.
3. Project Settings -> API: copy the Project URL and the **anon** public key into `config.js`.
4. Open `index.html` (or host the folder on Netlify, Vercel, GitHub Pages, etc.).

Without step 3 the site still works in Local mode (progress is saved in the browser only).

## Adding questions
Edit `questions.js`, then run `node build-seed.js` and run the new `seed.sql` in Supabase.
Each question has 4 choices, `answer` = index 0-3 of the correct one, plus `solution`, `topic`, `difficulty`, `points`.

## Security note
Players are identified by nickname only (no login), and the policies in `supabase.sql` let anyone read and write progress.
Good enough for a class or friends. For real accounts, use Supabase Auth and restrict the policies to `auth.uid()`.
Never put the `service_role` key in `config.js`.
