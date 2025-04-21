"use client"

import { Button } from "@/shared/components/ui/button"
import { useLanguage } from "@/lib/providers/language-provider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="w-12 font-medium"
      aria-label={language === "ES" ? "Cambiar a inglés" : "Cambiar a español"}
      aria-pressed={language === "EN"}
    >
      {language}
    </Button>
  )
}
