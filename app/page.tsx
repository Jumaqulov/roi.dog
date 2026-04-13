import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Crosshair,
  LineChart,
  Search,
  ShieldCheck,
  Split,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const auditModules = [
  {
    icon: Search,
    title: "Search waste",
    copy: "Query intent, match-type sprawl, negative keyword gaps, and network leakage.",
  },
  {
    icon: ShieldCheck,
    title: "Tracking integrity",
    copy: "Conversion action coverage, attribution reliability, and reporting trust.",
  },
  {
    icon: Split,
    title: "Campaign segmentation",
    copy: "Structure, budget partitioning, and whether the account is built to make clean decisions.",
  },
  {
    icon: Crosshair,
    title: "Landing-page alignment",
    copy: "Offer continuity, intent match, and friction between click and conversion.",
  },
];

const clientProfiles = [
  "B2B SaaS | $8k-$25k / month",
  "Lead gen teams | multi-campaign accounts",
  "Ecommerce brands | efficiency reviews before scale",
  "In-house marketers | second-opinion account audits",
];

const deliverables = [
  "Priority areas ranked before the walkthrough",
  "Clear read on waste, tracking, and structure",
  "Next-step recommendations grounded in account context",
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-18 md:py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow mb-6">Read-only Google Ads audit review</span>
              <h1 className="font-heading text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[0.98]">
                Find the budget leaks before you scale the account.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
                PaidScope is a premium Google Ads audit service for teams that need a sharper read on
                search waste, tracking integrity, and structural drag before the next spend decision.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/audit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  Request audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#scope"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-white/10 bg-white/[0.02] px-6 text-sm text-white hover:bg-white/[0.05]",
                  )}
                >
                  Review scope
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {[
                  "Read-only request",
                  "Tailored summary before the call",
                  "Reply within one business day",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-primary/12 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Audit brief</p>
                    <h2 className="mt-2 font-heading text-2xl text-white">What the review covers</h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-primary">
                    Guided walkthrough
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {auditModules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <div key={module.title} className="grid gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] text-primary">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-heading text-base text-white">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">{module.copy}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-3 rounded-2xl border border-white/8 bg-[#0d1218] p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Review format</span>
                    <span className="text-white">Initial summary + walkthrough</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Platform access</span>
                    <span className="text-white">Requested as read-only</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primary output</span>
                    <span className="text-white">Priority map and next steps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02] py-6">
          <div className="shell flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Best fit</p>
            <div className="flex flex-wrap gap-3">
              {clientProfiles.map((profile) => (
                <span
                  key={profile}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-white/80"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="py-20 md:py-28">
          <div className="shell">
            <div className="max-w-2xl">
              <span className="eyebrow">Audit scope</span>
              <h2 className="section-title mt-5">A tighter audit scope than a generic account health check.</h2>
              <p className="section-copy mt-5">
                The audit stays focused on the decisions that usually matter most: where spend is being
                diluted, whether tracking can be trusted, and whether the account structure supports better
                control over intent and budget.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {auditModules.map((module) => {
                const Icon = module.icon;

                return (
                  <div key={module.title} className="surface p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading text-2xl text-white">{module.title}</h3>
                        <p className="text-sm leading-7 text-muted-foreground">{module.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="border-y border-white/5 bg-white/[0.02] py-20 md:py-28">
          <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <span className="eyebrow">Process</span>
              <h2 className="section-title mt-5">A straightforward review process.</h2>
              <p className="section-copy mt-5">
                Share the account context, receive an initial audit summary, and continue into a focused
                walkthrough built around the highest-priority review areas.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  step: "01",
                  title: "Request the audit",
                  copy: "Share the account context, website, budget band, and primary goal so the review starts in the right place.",
                },
                {
                  step: "02",
                  title: "We prepare the initial summary",
                  copy: "We organize the first findings around waste, tracking coverage, structural control, and landing-page alignment.",
                },
                {
                  step: "03",
                  title: "Walk through next-step recommendations",
                  copy: "Use the summary as the starting point for a guided discussion of findings, risks, and the order of fixes worth making first.",
                },
              ].map((item) => (
                <div key={item.step} className="surface flex gap-5 p-6">
                  <div className="font-heading text-2xl text-primary">{item.step}</div>
                  <div>
                    <h3 className="font-heading text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">What you leave with</span>
              <h2 className="section-title mt-5">A more credible starting point for account decisions.</h2>
              <p className="section-copy mt-5">
                The output is not a noisy dashboard. It is a tighter view of where to look first, what to
                validate in the account, and which fixes are worth prioritizing before the next budget move.
              </p>
            </div>

            <div className="surface p-6 md:p-8">
              <div className="space-y-5">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <LineChart className="mt-0.5 h-4 w-4 text-primary" />
                    <p className="text-sm leading-7 text-white/88">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="shell">
            <div className="surface overflow-hidden px-6 py-8 md:px-10 md:py-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <span className="eyebrow">Next step</span>
                  <h2 className="section-title mt-5">Request the audit review and we will prepare the summary.</h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                    Start with a focused intake, receive an initial audit snapshot, and move into a
                    walkthrough built around the account context you shared.
                  </p>
                </div>

                <Link
                  href="/audit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  Start audit request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
