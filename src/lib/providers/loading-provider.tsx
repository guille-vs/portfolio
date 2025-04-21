"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { Loader } from "@/shared/components/loader"
import { usePreloadImages } from "@/shared/hooks/use-preload-images"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  // Precargar imágenes
  usePreloadImages()

  useEffect(() => {
    // Simular tiempo de carga o esperar a que los recursos se carguen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Mostrar el loader por 2 segundos para dar tiempo a precargar

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loader />}
      <div
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        aria-hidden={isLoading}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
