"use client"

import { useMemo } from "react"
import type { Project } from "@/modules/home/interfaces/project.interface"

export function useProjects() {
  const projects = useMemo<Project[]>(
    () => [
      {
        title: "Notas Markdown App",
        imgPath:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app-markdown.jpg-1TvHFZn7PLNGctBSTvdedfgeMMAbVn.jpeg",
        description: {
          es: "Aplicación diseñada para la toma de apuntes con formato Markdown, tomando inspiración de la versatilidad de Notion.",
          en: "Application designed for taking notes with Markdown format, inspired by the versatility of Notion.",
        },
        techs: ["React JS", "Material UI", "Node JS", "Express JS", "Typescript"],
        urlDemo: "https://notas-markdown.vercel.app/",
        urlRepository: "https://github.com/g-susvs/notas-markdown",
      },
      {
        title: "Chatbot Web",
        imgPath:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatbot.jpg-0dQqQYwzSFW13LWNQ0s7lto5fVvsuk.jpeg",
        description: {
          es: "Proyecto académico, funcionalidad de un chatbot. Conexión a servidor con toda la lógica para manejar el input del usuario.",
          en: "Academic project, chatbot functionality. Connection to server with all the logic to handle user input.",
        },
        techs: ["React JS", "CSS", "Python"],
        urlDemo: "https://chatbot-ui-g-susvs.vercel.app/",
        urlRepository: "https://github.com/g-susvs/chatbot-ui",
      },
      {
        title: "Gestor de Tareas",
        imgPath:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task-manager-mo78Za3DaFHTdQ2p9yjKQDYIIQt903.png",
        description: {
          es: 'Lista de tareas que incorpora la funcionalidad de "Drag & Drop" para gestionar el estado de cada tarea.',
          en: 'Task list that incorporates the "Drag & Drop" functionality to manage the status of each task.',
        },
        techs: ["React JS", "Tailwind"],
        urlDemo: "https://task-manager-g-susvs.vercel.app/",
        urlRepository: "https://github.com/g-susvs/task-manager",
      },
    ],
    [],
  )

  return { projects }
}
