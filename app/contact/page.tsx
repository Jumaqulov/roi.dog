"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { defaultAuditRequest, readAuditRequest } from "@/lib/audit-flow";

type WalkthroughForm = {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  message: string;
};

const defaultForm: WalkthroughForm = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  message: "",
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<WalkthroughForm>(defaultForm);

  useEffect(() => {
    const request = readAuditRequest();

    setForm({
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      website: request.website,
      message: request.concern,
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const previewName = form.firstName || defaultAuditRequest.firstName || "your team";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <span className="eyebrow mb-5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Walkthrough request
                </span>
                <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                  Schedule the audit walkthrough.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                  This is the final step in the flow: confirm contact details, add any context that
                  matters, and receive the next-step recommendations in a structured review conversation.
                </p>
              </div>

              <div className="surface p-6">
                <h2 className="font-heading text-xl text-white">What the walkthrough is for</h2>
                <div className="mt-5 space-y-4">
                  {[
                    "Review the priority areas surfaced in the audit snapshot.",
                    "Clarify which issues are likely structural, tracking-related, or efficiency-driven.",
                    "Leave with a cleaner order of operations for the account.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm leading-7 text-white/88">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Expectation setting</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  We do not promise instant fixes or implied platform access. This step simply moves the
                  audit from intake into a real conversation about priorities and next actions.
                </p>
              </div>
            </div>

            <div className="surface p-6 md:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center md:py-14">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mt-6 font-heading text-3xl text-white">Walkthrough request received</h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                    We will reply within one business day to confirm the best next window for {previewName}
                    {" "}and share how the audit review will be structured.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 rounded-full border-white/10 bg-white/[0.02] px-5 text-white hover:bg-white/[0.05]"
                  >
                    Edit request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/8 pb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Final step</p>
                    <h2 className="mt-2 font-heading text-2xl text-white md:text-3xl">Request full audit walkthrough</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
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
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.03]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Anything we should prepare before the walkthrough?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share the context behind the review request, the decision pressure, or the issue you want covered first."
                      className="min-h-28 rounded-2xl border-white/10 bg-white/[0.03] resize-none"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-[#0d1218] px-4 py-3 text-sm text-muted-foreground">
                    Expect a reply within one business day with next steps for the audit review.
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Request walkthrough
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
