import type React from "react"
import { Header } from "@/shared/components/header"
import { Footer } from "@/shared/components/footer"
import { AnimatedBackground } from "@/shared/components/animated-background"
import { SkipLink } from "@/shared/components/skip-link"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SkipLink />
      <AnimatedBackground />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
