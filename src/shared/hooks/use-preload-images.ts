"use client"

import { useEffect } from "react"
import { useProjects } from "@/modules/home/hooks/use-projects"

export function usePreloadImages() {
  const { projects } = useProjects()

  useEffect(() => {
    // Precargar imágenes de proyectos
    projects.forEach((project) => {
      const img = new Image()
      img.src = project.imgPath
    })

    // Precargar imagen de perfil
    const profileImg = new Image()
    profileImg.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jesus.jpg-kEK7BFKmsc7FkjYhJPPleYGlIcScXN.jpeg"
  }, [projects])
}
