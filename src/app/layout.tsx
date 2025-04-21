import type React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/providers/language-provider";
import { LoadingProvider } from "@/lib/providers/loading-provider";
import { MainLayout } from "@/shared/layouts/main-layout";
import { Toaster } from "@/shared/components/ui/toaster";
import JsonLd from "./json-ld";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="canonical"
          href="https://portfolio-jesus-valencia.vercel.app"
        />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <LanguageProvider>
            <LoadingProvider>
              <MainLayout>{children}</MainLayout>
              <Toaster />
            </LoadingProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
