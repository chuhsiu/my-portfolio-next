import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education"
import Footer from "@/app/components/Footer"
import Skills from "@/app/components/Skills"
import Projects from "@/app/components/Projects";
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoey Chebg",
  description: "my portfolio with next.js",
  icons: "./public/favicion.svg"
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${josefinSans.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
          <Navbar />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
