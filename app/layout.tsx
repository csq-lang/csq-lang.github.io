import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import logo from "../assets/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C² Language",
  description:
    "C² is a pragmatic compiled programming language focused on performance, clarity, and control.",
  metadataBase: new URL("https://csq-lang.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-900 focus:ring-2 focus:ring-blue-700"
        >
          Skip to content
        </a>

        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="C² logo" priority className="h-8 w-8" />
              <div className="leading-tight">
                <div className="text-base font-semibold">C² Language</div>
                <div className="text-xs text-slate-600">
                  Pragmatic, fast, and readable
                </div>
              </div>
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link
                href="/"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                Docs
              </Link>
              <a
                href="https://github.com/csq-lang/csquared"
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-600">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} C² Language. Community-driven.
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a
                  className="hover:text-slate-900"
                  href="https://csq-lang.github.io/spec"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spec
                </a>
                <a
                  className="hover:text-slate-900"
                  href="https://github.com/csq-lang/csquared"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
