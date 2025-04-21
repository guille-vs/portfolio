"use client"

import { motion } from "framer-motion"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Mail, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/providers/language-provider"
import { useToast } from "@/shared/hooks/use-toast"
import { useContactForm } from "@/modules/home/hooks/use-contact-form"

export function ContactSection() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="section-container" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="contact-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("home.contact.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("home.contact.subtitle")}</CardTitle>
              <CardDescription>
                {t("home.contact.description")}{" "}
                <a
                  href={`mailto:${t("home.contact.email")}`}
                  className="text-primary hover:underline"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {t("home.contact.email")}
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("home.contact.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("home.contact.namePlaceholder")}
                      required
                      className={errors.name ? "border-red-500" : ""}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1" id="name-error" aria-live="polite">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("home.contact.emailPlaceholder")}
                      required
                      className={errors.email ? "border-red-500" : ""}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1" id="email-error" aria-live="polite">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("home.contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("home.contact.messagePlaceholder")}
                      rows={5}
                      required
                      className={errors.message ? "border-red-500" : ""}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1" id="message-error" aria-live="polite">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2 flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>{t("home.contact.sending") || "Enviando..."}</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{t("home.contact.send")}</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
