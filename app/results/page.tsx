"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, ArrowRight, CheckCircle2, TrendingDown, TrendingUp, XCircle } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const mockData = [
  { name: "Brand", spend: 1200, wasted: 50 },
  { name: "Non-Brand", spend: 4500, wasted: 1800 },
  { name: "Competitor", spend: 800, wasted: 600 },
  { name: "Display", spend: 1500, wasted: 1200 },
  { name: "PMax", spend: 3000, wasted: 800 },
];

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary mb-4">
                Audit Complete
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                Your Account Analysis
              </h1>
              <p className="text-muted-foreground">
                Analyzed last 30 days of data for 14 campaigns.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact" className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--primary),0.3)]")}>
                Get Full Report & Fixes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-card border-white/5">
              <CardHeader className="pb-2">
                <CardDescription>Estimated Wasted Spend</CardDescription>
                <CardTitle className="text-4xl font-heading text-destructive flex items-center gap-2">
                  $4,450 <TrendingDown className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ~32% of your total monthly budget is bleeding into irrelevant search terms and poor placements.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/5">
              <CardHeader className="pb-2">
                <CardDescription>Account Health Score</CardDescription>
                <CardTitle className="text-4xl font-heading text-yellow-500">
                  48/100
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Critical issues found in conversion tracking and campaign structure. Immediate action recommended.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/5">
              <CardHeader className="pb-2">
                <CardDescription>Potential ROI Uplift</CardDescription>
                <CardTitle className="text-4xl font-heading text-primary flex items-center gap-2">
                  +45% <TrendingUp className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  By reallocating wasted spend to top-performing exact match keywords and fixing attribution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Chart */}
            <Card className="bg-card border-white/5 lg:col-span-2">
              <CardHeader>
                <CardTitle>Spend Efficiency by Campaign Type</CardTitle>
                <CardDescription>Comparing productive spend vs. wasted spend</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#161616', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      />
                      <Bar dataKey="spend" name="Productive Spend" stackId="a" fill="rgba(var(--primary), 0.8)" radius={[0, 0, 4, 4]} />
                      <Bar dataKey="wasted" name="Wasted Spend" stackId="a" fill="var(--destructive)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Critical Issues */}
            <Card className="bg-card border-white/5 border-t-4 border-t-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Critical Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Broad Match Bleed</h4>
                      <p className="text-xs text-muted-foreground mt-1">74% of non-brand spend is going to irrelevant broad match queries.</p>
                    </div>
                  </div>
                </div>
                <Separator className="bg-white/5" />
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Double Counting Conversions</h4>
                      <p className="text-xs text-muted-foreground mt-1">Both GA4 and Google Ads tags are firing, inflating ROAS by ~2x.</p>
                    </div>
                  </div>
                </div>
                <Separator className="bg-white/5" />
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Display Network Expansion</h4>
                      <p className="text-xs text-muted-foreground mt-1">Search campaigns have Display Network enabled, wasting $1,200/mo.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Teaser for full report */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <Badge variant="outline" className="border-primary/50 text-primary mb-6">Unlock Full Access</Badge>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">
                This is just the summary.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The full 24-page report includes exact search terms to negative, step-by-step tracking fixes, and a custom restructuring plan.
              </p>
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.4)]")}>
                Book Strategy Call to Review
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
