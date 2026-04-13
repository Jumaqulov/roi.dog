"use client";

import { ChangeEvent, FormEvent, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AuditRequest,
  budgetOptions,
  defaultAuditRequest,
  goalOptions,
  readAuditRequest,
  saveAuditRequest,
} from "@/lib/audit-flow";

export default function AuditFormPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState<AuditRequest>(defaultAuditRequest);

  useEffect(() => {
    setForm(readAuditRequest());
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    saveAuditRequest(payload);

    startTransition(() => {
      router.push("/analysis");
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-8">
              <div>
                <span className="eyebrow mb-5">Audit request</span>
                <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                  Start the Google Ads audit review.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                  Share the account context and we will prepare a structured audit summary for the
                  walkthrough. This step is framed as intake, not a platform connection flow.
                </p>
              </div>

              <div className="surface p-6">
                <h2 className="font-heading text-xl text-white">What happens next</h2>
                <div className="mt-5 space-y-4">
                  {[
                    "We use the intake to set the first review priorities.",
                    "The summary is framed around waste, tracking, structure, and landing-page fit.",
                    "You receive a walkthrough-ready snapshot before the next conversation.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm leading-7 text-white/88">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h2 className="font-heading text-xl text-white">Review assurances</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      The intake is positioned as a read-only review request. No account changes are
                      implied, and no platform disruption is suggested anywhere in the flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface p-6 md:p-8">
              <div className="border-b border-white/8 pb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Intake form</p>
                <h2 className="mt-2 font-heading text-2xl text-white md:text-3xl">Request audit summary</h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Alex"
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.03]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Morgan"
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.03]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/[0.03]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    required
                    className="h-11 rounded-xl border-white/10 bg-white/[0.03]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Google Ads budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 text-sm text-white outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-card text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">Primary goal</Label>
                    <select
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 text-sm text-white outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      {goalOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-card text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concern">Anything specific you want the review to focus on?</Label>
                  <Textarea
                    id="concern"
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    placeholder="Example: CPA has drifted upward, branded traffic is masking performance, or tracking confidence is low."
                    className="min-h-28 rounded-2xl border-white/10 bg-white/[0.03] resize-none"
                  />
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#0d1218] px-4 py-3 text-sm text-muted-foreground">
                  Read-only review request. We use these details to prepare the audit summary and
                  walkthrough agenda.
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {isPending ? "Preparing audit summary..." : "Prepare audit summary"}
                  {!isPending && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
