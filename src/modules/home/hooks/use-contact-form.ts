"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { z } from "zod"
import { useLanguage } from "@/lib/providers/language-provider"
import { useToast } from "@/shared/hooks/use-toast"

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export function useContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))

      // Limpiar error cuando el usuario comienza a escribir
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }))
      }
    },
    [errors],
  )

  const validateForm = useCallback(() => {
    try {
      formSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }, [formData])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Validar formulario
      if (!validateForm()) {
        toast({
          title: "Error de validación",
          description: t("home.contact.validation"),
          variant: "destructive",
        })
        return
      }

      setIsSubmitting(true)

      try {
        // Método alternativo: usar un formulario HTML tradicional con un iframe oculto
        // Crear un formulario temporal
        const tempForm = document.createElement("form")
        tempForm.method = "POST"
        tempForm.action = `https://formsubmit.co/${t("home.contact.email")}`
        tempForm.target = "hidden-iframe"
        tempForm.style.display = "none"

        // Añadir campos
        const nameField = document.createElement("input")
        nameField.name = "name"
        nameField.value = formData.name
        tempForm.appendChild(nameField)

        const emailField = document.createElement("input")
        emailField.name = "email"
        emailField.value = formData.email
        tempForm.appendChild(emailField)

        const messageField = document.createElement("textarea")
        messageField.name = "message"
        messageField.value = formData.message
        tempForm.appendChild(messageField)

        // Añadir campos de configuración de FormSubmit
        const subjectField = document.createElement("input")
        subjectField.name = "_subject"
        subjectField.value = `Nuevo mensaje de ${formData.name}`
        tempForm.appendChild(subjectField)

        const captchaField = document.createElement("input")
        captchaField.name = "_captcha"
        captchaField.value = "false"
        tempForm.appendChild(captchaField)

        const templateField = document.createElement("input")
        templateField.name = "_template"
        templateField.value = "table"
        tempForm.appendChild(templateField)

        // Campo para evitar redirección
        const nextField = document.createElement("input")
        nextField.name = "_next"
        nextField.value = window.location.href
        tempForm.appendChild(nextField)

        // Campo para formato de respuesta
        const formatField = document.createElement("input")
        formatField.name = "_format"
        formatField.value = "plain"
        tempForm.appendChild(formatField)

        // Crear iframe oculto
        let iframe = document.getElementById("hidden-iframe") as HTMLIFrameElement
        if (!iframe) {
          iframe = document.createElement("iframe")
          iframe.name = "hidden-iframe"
          iframe.id = "hidden-iframe"
          iframe.style.display = "none"
          document.body.appendChild(iframe)
        }

        // Añadir evento para detectar cuando se complete el envío
        iframe.onload = () => {
          // Mostrar toast de éxito
          toast({
            title: "¡Mensaje enviado!",
            description: t("home.contact.success"),
          })

          // Resetear formulario
          setFormData({ name: "", email: "", message: "" })
          setIsSubmitting(false)

          // Eliminar el formulario temporal
          document.body.removeChild(tempForm)
        }

        // Añadir formulario al DOM y enviarlo
        document.body.appendChild(tempForm)
        tempForm.submit()
      } catch (error) {
        console.error("Error al enviar el formulario:", error)

        // Mostrar toast de error
        toast({
          title: "Error",
          description: t("home.contact.error"),
          variant: "destructive",
        })

        setIsSubmitting(false)
      }
    },
    [formData, t, toast, validateForm],
  )

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}
