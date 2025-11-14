import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderWrapper } from "@/components/header-wrapper";

export const metadata: Metadata = {
  title: "Queens Press Laundry | Dry Cleaning & Laundry in Dubai",
  description:
    "Professional dry cleaning & laundry service in Dubai with branches in Bur Dubai, Jumeirah 1 and Port Rashid. Free pickup & delivery available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-sky-50">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <HeaderWrapper />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
