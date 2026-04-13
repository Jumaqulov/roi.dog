import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, BarChart3, Target, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container relative mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Stop bleeding ad budget
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
              Find out exactly why your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Google Ads aren&apos;t scaling.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get a deep-dive technical audit of your account in 60 seconds. We uncover wasted spend, tracking errors, and scale opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/audit" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.4)]")}>
                Start Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-sm text-muted-foreground sm:ml-4">
                No credit card required. <br className="sm:hidden" />Takes 2 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Logos / Trust */}
        <section className="border-y border-white/5 bg-white/[0.02] py-10">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by performance marketers at
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Mock logos using text for prototype */}
              <div className="font-heading font-bold text-xl">AcmeCorp</div>
              <div className="font-heading font-bold text-xl">GlobalScale</div>
              <div className="font-heading font-bold text-xl">TechGrowth</div>
              <div className="font-heading font-bold text-xl">Nexus</div>
              <div className="font-heading font-bold text-xl">Elevate</div>
            </div>
          </div>
        </section>

        {/* Problem / Benefits */}
        <section id="benefits" className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Most accounts waste 30% of their budget.
              </h2>
              <p className="text-lg text-muted-foreground">
                Google&apos;s default settings are designed to maximize their revenue, not yours. We find the leaks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-white/10 bg-card p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Wasted Spend Detection</h3>
                <p className="text-muted-foreground">
                  We analyze search terms, network settings, and location targeting to find exactly where your budget is bleeding.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-card p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Structure Analysis</h3>
                <p className="text-muted-foreground">
                  Is your account structured for scale? We check campaign types, ad groups, and keyword hygiene.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-card p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conversion Tracking</h3>
                <p className="text-muted-foreground">
                  Broken tracking means broken optimization. We verify your conversion actions and attribution models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="how-it-works" className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                  How the audit works
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No sales calls required to get your data. Just connect your account and get actionable insights instantly.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Connect your account", desc: "Secure read-only access via Google OAuth." },
                    { title: "We analyze 50+ data points", desc: "Our algorithm checks structure, spend, and tracking." },
                    { title: "Get your custom report", desc: "See exactly what to fix to improve your ROI today." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{step.title}</h4>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20" />
                <div className="relative rounded-2xl border border-white/10 bg-card p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span className="font-medium text-white">Audit Progress</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Analyzing...</span>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">Checking Search Terms</span>
                        <span className="text-primary">100%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-primary w-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">Analyzing Conversions</span>
                        <span className="text-primary">100%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-primary w-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">Calculating Wasted Spend</span>
                        <span className="text-primary animate-pulse">65%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-primary w-[65%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container relative mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to stop wasting money?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get your free, no-obligation audit report in minutes.
            </p>
            <Link href="/audit" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.4)]")}>
              Start My Free Audit
            </Link>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Read-only access</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No credit card</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
