"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Loader2 } from "lucide-react";

const steps = [
  "Connecting to Google Ads API...",
  "Downloading campaign structures...",
  "Analyzing search term reports...",
  "Checking conversion tracking setup...",
  "Calculating wasted spend...",
  "Generating recommendations...",
  "Finalizing report..."
];

export default function AnalysisPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = 6000; // 6 seconds total
    const stepTime = totalTime / steps.length;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 / (totalTime / 100)); // Update every 100ms
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, stepTime);

    const redirectTimer = setTimeout(() => {
      router.push("/results");
    }, totalTime + 500);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-lg mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <Loader2 className="h-10 w-10 text-primary animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
            Analyzing your account
          </h1>
          <p className="text-muted-foreground mb-10">
            Please don&apos;t close this window. This usually takes about 60 seconds.
          </p>

          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-4 bg-card border border-white/5 rounded-xl p-6">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                const isPending = index > currentStep;

                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                      isCompleted ? "text-white" : 
                      isActive ? "text-primary font-medium" : 
                      "text-muted-foreground opacity-50"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : isActive ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-current opacity-50" />
                    )}
                    <span>{step}</span>
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
