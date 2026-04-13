import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Activity className="h-5 w-5" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            AuditPro
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#how-it-works" className="hover:text-white transition-colors">Process</Link>
          <Link href="#benefits" className="hover:text-white transition-colors">Benefits</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-white">
            Log in
          </Button>
          <Link href="/audit" className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--primary),0.5)]")}>
            Get Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
