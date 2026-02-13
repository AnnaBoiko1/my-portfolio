import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HireMe from '@/components/HireMe'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import BackgroundCanva from '@/components/BackgroundCanva';
import Footer from '@/components/Footer';

config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Boiko | Portfolio",
  description: "Full-stack web developer from Ukraine based in Toronto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <BackgroundCanva>
            {children}
            <Footer />
          </BackgroundCanva>
          <HireMe />
        </body>
      </html>
    </ClerkProvider>
  );
}
