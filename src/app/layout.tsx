import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: {
    default: "BISMILLAH NETWORK | One Network • One Vision",
    template: "%s | BISMILLAH NETWORK",
  },
  description: "BISMILLAH NETWORK creates professional websites and mobile applications, building connections through technology and opportunity. One Network • One Vision.",
  applicationName: "BISMILLAH NETWORK",
  keywords: ["BISMILLAH NETWORK", "Website Development", "Mobile App Development", "Digital Platforms", "Technology", "Opportunities"],
  openGraph: {
    title: "BISMILLAH NETWORK | One Network • One Vision",
    description: "Technology, people and opportunities connected through one vision.",
    siteName: "BISMILLAH NETWORK",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
