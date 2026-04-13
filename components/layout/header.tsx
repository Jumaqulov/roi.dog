"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#scope", label: "Scope" },
  { href: "/#process", label: "Process" },
  { href: "/results", label: "Audit snapshot" },
  { href: "/contact", label: "Walkthrough" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
            <Radar className="h-4 w-4" />
          </div>
          <div>
            <span className="font-heading text-lg font-semibold tracking-tight text-white">roi.dog</span>
            <p className="hidden text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Google Ads audit review
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => {
            const isHomeAnchor = item.href.startsWith("/#");
            const isActive = item.href === pathname || (isHomeAnchor && pathname === "/");

            return (
              <Link key={item.href} href={item.href} className={cn("hover:text-white", isActive && "text-white")}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/audit"
          className={cn(
            buttonVariants(),
            "h-10 rounded-full border border-primary/20 bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90",
          )}
        >
          Request audit
        </Link>
      </div>
    </header>
  );
}
