# Google Ads Audit Prototype

A polished, multi-page prototype for a Google Ads audit service, built as a test task submission.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Charts:** recharts

## Routes & User Flow

1. **`/` (Landing Page)**: The main entry point. Features a strong hero section, trust logos, problem/solution blocks, and a clear explanation of the audit process.
2. **`/audit` (Audit Form)**: A mock intake form where users "connect" their Google Ads account and provide basic details (budget, goals).
3. **`/analysis` (Analysis/Loading)**: A simulated progress page that creates anticipation. It automatically redirects to the results page after ~6 seconds.
4. **`/results` (Results Preview)**: A dashboard-style page showing a teaser of the audit results, including estimated wasted spend, health score, and a chart comparing productive vs. wasted spend.
5. **`/contact` (Final CTA)**: The final conversion page where users can request the full 24-page report and book a strategy call.

## Design Decisions

- **Aesthetic**: Dark, modern, and premium. Uses a deep zinc/black background with electric blue/cyan neon accents to feel like a high-end SaaS or performance marketing tool.
- **Typography**: `Space Grotesk` for headings (technical, modern) and `Inter` for body copy (highly legible).
- **Simulated Flow**: The prototype does not require a backend. State and routing are handled entirely on the client side to provide a seamless, believable user experience.
- **Conversion-Focused**: Clear CTAs, trust signals (logos, read-only access badges), and progressive disclosure of information.

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
