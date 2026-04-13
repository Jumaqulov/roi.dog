import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://roi.dog"),
  title: {
    default: "roi.dog | Google Ads Audit Review",
    template: "%s | roi.dog",
  },
  description:
    "Premium Google Ads audit intake and review flow focused on search waste, tracking integrity, and account structure.",
  applicationName: "roi.dog",
  openGraph: {
    title: "roi.dog | Google Ads Audit Review",
    description:
      "Request a premium Google Ads audit review and receive a structured walkthrough of search waste, tracking integrity, and priority fixes.",
    url: "https://roi.dog",
    siteName: "roi.dog",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", inter.variable, spaceGrotesk.variable)}>
      <body className="bg-background text-foreground antialiased selection:bg-primary/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
