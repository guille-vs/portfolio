"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LogoLoader } from "./logo-loader"

export function Loader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Prevenir el scroll mientras se muestra el loader
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center" role="status" aria-live="polite">
        <LogoLoader />
        <motion.p
          className="text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Cargando experiencia...
        </motion.p>
      </div>
    </div>
  )
}
