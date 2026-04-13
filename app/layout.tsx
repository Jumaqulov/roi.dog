import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'AuditPro | Google Ads Audit Service',
  description: 'Professional Google Ads audit service to uncover wasted spend and scale ROI.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable, spaceGrotesk.variable)}>
      <body className="antialiased bg-background text-foreground selection:bg-primary/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
