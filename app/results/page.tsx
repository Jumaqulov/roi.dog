"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  LineChart,
  ShieldAlert,
  Target,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildAuditSnapshot, defaultAuditRequest, formatCurrency, readAuditRequest } from "@/lib/audit-flow";

const SpendBreakdownChart = dynamic(
  () => import("@/components/results/spend-breakdown-chart").then((module) => module.SpendBreakdownChart),
  {
    ssr: false,
    loading: () => <div className="mt-8 h-[320px] animate-pulse rounded-2xl border border-white/8 bg-white/[0.03]" />,
  },
);

export default function ResultsPage() {
  const [request, setRequest] = useState(defaultAuditRequest);
  const [snapshot, setSnapshot] = useState(() => buildAuditSnapshot(defaultAuditRequest));

  useEffect(() => {
    const nextRequest = readAuditRequest();
    setRequest(nextRequest);
    setSnapshot(buildAuditSnapshot(nextRequest));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-14">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow mb-5">Initial audit snapshot</span>
              <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                Priority map for {snapshot.websiteDisplay}
              </h1>
              <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                Built from the intake for {snapshot.budgetLabel.toLowerCase()} focused on {snapshot.goalLabel.toLowerCase()}.
                The full walkthrough validates these areas inside the account and turns them into an order of operations.
              </p>
            </div>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90",
              )}
            >
              Schedule audit walkthrough
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="surface p-6">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="h-5 w-5 text-primary" />
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Potential leakage</p>
              </div>
              <p className="mt-5 font-heading text-4xl text-white">{formatCurrency(snapshot.estimatedWaste)}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Estimated monthly spend worth validating first based on the intake profile and the review focus.
              </p>
            </div>

            <div className="surface p-6">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Audit health score</p>
              </div>
              <p className="mt-5 font-heading text-4xl text-white">{snapshot.healthScore}/100</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                A directional read on how much structural and tracking cleanup is likely to be required before confident optimization.
              </p>
            </div>

            <div className="surface p-6">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Recoverable focus</p>
              </div>
              <p className="mt-5 font-heading text-4xl text-white">{formatCurrency(snapshot.recoverableSpend)}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Estimated spend that could likely be redirected once the first-priority issues are confirmed and cleaned up.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Focused spend vs leakage</p>
                  <h2 className="mt-2 font-heading text-2xl text-white">How the review frames the account</h2>
                </div>
                <LineChart className="h-5 w-5 text-primary" />
              </div>

              <SpendBreakdownChart data={snapshot.chartData} />
            </div>

            <div className="surface p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Priority order</p>
              <h2 className="mt-2 font-heading text-2xl text-white">Where the walkthrough starts</h2>

              <div className="mt-8 space-y-4">
                {snapshot.priorities.map((priority) => (
                  <div key={priority.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading text-lg text-white">{priority.title}</h3>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-primary">
                        {priority.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{priority.note}</p>
                    <div className="mt-4 h-2 rounded-full bg-white/6">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${priority.score * 2.1}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-2xl text-white">Intake notes</h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-muted-foreground">Website</p>
                  <p className="text-white">{snapshot.websiteDisplay}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-muted-foreground">Budget band</p>
                  <p className="text-white">{snapshot.budgetLabel}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-muted-foreground">Primary goal</p>
                  <p className="text-white">{snapshot.goalLabel}</p>
                </div>
                {request.concern ? (
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-muted-foreground">Requested focus</p>
                    <p className="text-white">{request.concern}</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="surface p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Walkthrough outcome</p>
              <h2 className="mt-2 font-heading text-2xl text-white">What the full review adds</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Validation inside the live account so the priority list is confirmed against real campaign and conversion setup.",
                  "A tighter read on which changes should happen first, which issues can wait, and where not to overreact.",
                  `A reply from our side ${snapshot.responseWindow} so the next-step recommendations move quickly.`,
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <p className="text-sm leading-7 text-white/88">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-primary/20 bg-primary/8 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Next step</p>
                <h3 className="mt-2 font-heading text-xl text-white">
                  Schedule the walkthrough for {snapshot.firstName === "there" ? "your team" : snapshot.firstName}.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Move from a directional snapshot into a guided review of waste, tracking integrity, and the fixes worth prioritizing first.
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-5 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  Continue to walkthrough request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
