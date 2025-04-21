"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/providers/language-provider"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="border-t py-8 mt-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jesús Valencia. {t("common.footer.rights")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex space-x-6" aria-label="Enlaces de pie de página">
              <Link href="#top" className="text-muted-foreground hover:text-primary transition-colors">
                {t("common.nav.home")}
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                {t("common.nav.projects")}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                {t("common.nav.contact")}
              </Link>
            </nav>

            <div className="flex space-x-4" aria-label="Redes sociales">
              <a
                href="https://github.com/g-susvs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Perfil de GitHub de Jesús Valencia"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Perfil de LinkedIn de Jesús Valencia"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
