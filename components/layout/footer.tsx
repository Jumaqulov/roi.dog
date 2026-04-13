import Link from "next/link";
import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Activity className="h-5 w-5" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                AuditPro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Stop wasting ad spend. We analyze your Google Ads account to find hidden leaks and scale your ROI.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Free Audit</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Account Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Conversion Tracking</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AuditPro. All rights reserved.</p>
          <p>Not affiliated with Google LLC.</p>
        </div>
      </div>
    </footer>
  );
}
