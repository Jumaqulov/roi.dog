"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, CalendarDays, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Copy */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                <CalendarDays className="mr-2 h-4 w-4" />
                Strategy Session
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s fix your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Google Ads.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free 30-minute strategy call. We&apos;ll walk through your audit report, show you exactly where you&apos;re losing money, and give you a roadmap to scale.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Full 24-page technical audit report",
                  "Exact negative keyword lists to implement",
                  "Conversion tracking fix instructions",
                  "No high-pressure sales pitch. Just data."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20" />
              <div className="relative rounded-2xl border border-white/10 bg-card p-6 md:p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-4">Request Received</h3>
                    <p className="text-muted-foreground mb-8">
                      We&apos;re preparing your full audit report. Our team will reach out shortly to schedule your strategy call.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-white/10 text-white hover:bg-white/5">
                      Submit another request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-heading text-2xl font-bold text-white mb-6">Request Full Report</h3>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" required className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Anything specific we should look at?</Label>
                      <Textarea 
                        id="message" 
                        placeholder="E.g., Our CPA spiked last month and we don't know why..." 
                        className="min-h-[100px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none" 
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                      Request Report & Book Call <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
