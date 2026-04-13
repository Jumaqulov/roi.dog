import Link from "next/link";
import { Radar } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                <Radar className="h-4 w-4" />
              </div>
              <div>
                <span className="font-heading text-lg font-semibold tracking-tight text-white">roi.dog</span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Google Ads audit review
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Structured Google Ads audit reviews for teams that need a sharper read on search waste,
              tracking integrity, and account structure before making bigger spend decisions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/#scope" className="hover:text-white">Audit scope</Link></li>
              <li><Link href="/#process" className="hover:text-white">How it works</Link></li>
              <li><Link href="/audit" className="hover:text-white">Request audit</Link></li>
              <li><Link href="/contact" className="hover:text-white">Schedule walkthrough</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Assurances
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Read-only review request</li>
              <li>No account changes without approval</li>
              <li>Reply window within one business day</li>
              <li>Not affiliated with Google LLC</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{new Date().getFullYear()} roi.dog. All rights reserved.</p>
          <p>Premium audit intake and walkthrough flow for Google Ads teams.</p>
        </div>
      </div>
    </footer>
  );
}
