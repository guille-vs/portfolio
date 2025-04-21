"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Import the translation files directly
import enTranslations from "@/locales/en.json"
import esTranslations from "@/locales/es.json"

type Language = "ES" | "EN"

interface LanguageContextType {
  language: Language
  translations: Record<string, any>
  toggleLanguage: () => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ES")
  const [translations, setTranslations] = useState<Record<string, any>>({})

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"))
  }

  // Function to get translations using dot notation
  const t = (key: string): any => {
    try {
      // Split the key by dots and navigate through the object
      const keys = key.split(".")
      let value = translations

      for (const k of keys) {
        value = value[k]
        if (value === undefined) return key
      }

      return value || key
    } catch (error) {
      console.error(`Translation error for ${key}:`, error)
      return key
    }
  }

  useEffect(() => {
    // Load translations based on selected language
    const loadTranslations = () => {
      try {
        const translationsData = language === "ES" ? esTranslations : enTranslations
        setTranslations(translationsData)
      } catch (error) {
        console.error("Error loading translations:", error)
      }
    }

    loadTranslations()
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
