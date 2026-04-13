import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paidscope.app"),
  title: {
    default: "PaidScope | Google Ads Audit Review",
    template: "%s | PaidScope",
  },
  description:
    "Premium Google Ads audit service focused on search waste, tracking integrity, and account structure.",
  applicationName: "PaidScope",
  openGraph: {
    title: "PaidScope | Google Ads Audit Review",
    description:
      "Request a premium Google Ads audit review focused on search waste, tracking integrity, and priority fixes.",
    url: "https://paidscope.app",
    siteName: "PaidScope",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-primary/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
