"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Progress } from "@/components/ui/progress";
import { getGoalOption, readAuditRequest } from "@/lib/audit-flow";

const defaultSteps = [
  "Reviewing campaign structure",
  "Checking conversion coverage",
  "Evaluating search query efficiency",
  "Assessing landing-page alignment",
  "Prioritizing next-step recommendations",
];

export default function AnalysisPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(8);
  const [firstName, setFirstName] = useState("there");
  const [goalLine, setGoalLine] = useState("We are organizing the first findings for your review.");
  const [steps, setSteps] = useState(defaultSteps);

  useEffect(() => {
    const request = readAuditRequest();
    const goal = getGoalOption(request.goal);

    setFirstName(request.firstName || "there");
    setGoalLine(goal.headline);

    if (goal.value === "improve-tracking") {
      setSteps([
        "Reviewing campaign structure",
        "Checking conversion coverage",
        "Reviewing attribution handoff",
        "Assessing landing-page alignment",
        "Prioritizing next-step recommendations",
      ]);
    }

    if (goal.value === "scale-profitably") {
      setSteps([
        "Reviewing campaign structure",
        "Checking segmentation depth",
        "Evaluating search query efficiency",
        "Assessing landing-page alignment",
        "Prioritizing next-step recommendations",
      ]);
    }
  }, []);

  useEffect(() => {
    const totalTime = 6200;
    const stepTime = totalTime / defaultSteps.length;

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 3;
        return next >= 100 ? 100 : next;
      });
    }, 180);

    const stepTimer = window.setInterval(() => {
      setCurrentStep((current) => {
        if (current >= steps.length - 1) {
          window.clearInterval(stepTimer);
          return current;
        }

        return current + 1;
      });
    }, stepTime);

    const redirectTimer = window.setTimeout(() => {
      router.push("/results");
    }, totalTime + 450);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(stepTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [router, steps.length]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center py-12">
        <div className="shell max-w-3xl">
          <div className="surface overflow-hidden p-6 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
              <span className="eyebrow mb-5">Preparing findings</span>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {firstName}, we are preparing your initial findings.
              </h1>
                <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{goalLine}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Preparing your audit summary now.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-primary">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-white">Review progress</span>
                <span className="text-muted-foreground">{Math.min(progress, 100)}%</span>
              </div>
              <Progress value={Math.min(progress, 100)} className="h-2" />
            </div>

            <div className="mt-8 grid gap-3">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : isActive ? (
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-white/20" />
                    )}

                    <span className={isActive || isCompleted ? "text-white" : "text-muted-foreground"}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
