"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/providers/language-provider"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="about-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("home.about.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg p-6 shadow-sm border flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jesus.jpg-kEK7BFKmsc7FkjYhJPPleYGlIcScXN.jpeg"
                alt="Fotografía de Jesús Valencia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed text-card-foreground/90">{t("home.about.description")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
