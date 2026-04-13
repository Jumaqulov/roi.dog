"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AuditFormPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      router.push("/analysis");
    }, 800);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container max-w-xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s analyze your account
            </h1>
            <p className="text-muted-foreground">
              Fill out the details below to generate your custom audit report.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" type="url" placeholder="https://yourwebsite.com" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Google Ads Budget</Label>
                <select 
                  id="budget" 
                  required
                  defaultValue=""
                  className="flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled className="text-muted-foreground">Select budget range</option>
                  <option value="1k-5k" className="bg-card text-white">$1,000 - $5,000</option>
                  <option value="5k-20k" className="bg-card text-white">$5,000 - $20,000</option>
                  <option value="20k-50k" className="bg-card text-white">$20,000 - $50,000</option>
                  <option value="50k+" className="bg-card text-white">$50,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Main Goal</Label>
                <select 
                  id="goal" 
                  required
                  defaultValue=""
                  className="flex h-10 w-full items-center justify-between rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled className="text-muted-foreground">Select your primary goal</option>
                  <option value="reduce-cpa" className="bg-card text-white">Reduce CPA / Wasted Spend</option>
                  <option value="scale-volume" className="bg-card text-white">Scale Volume Profitably</option>
                  <option value="fix-tracking" className="bg-card text-white">Fix Tracking & Attribution</option>
                  <option value="general-audit" className="bg-card text-white">General Account Health Check</option>
                </select>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Connecting..." : "Connect Google Ads Account"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>We use secure read-only OAuth access. No changes will be made.</span>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
