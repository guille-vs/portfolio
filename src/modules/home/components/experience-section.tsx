"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"
import { Badge } from "@/shared/components/ui/badge"
import { useLanguage } from "@/lib/providers/language-provider"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section-container" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="experience-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("home.experience.title")}
        </motion.h2>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-6 space-y-10">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div
              className="absolute w-8 h-8 bg-primary rounded-full flex items-center justify-center -left-12 border-4 border-background"
              aria-hidden="true"
            >
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{t("home.experience.work.title")}</h3>
                <span className="text-sm text-muted-foreground">{t("home.experience.work.period")}</span>
              </div>

              <a href="#" className="text-primary hover:underline font-medium inline-block mb-4">
                {t("home.experience.work.organization")}
              </a>

              <p className="text-muted-foreground mb-4">{t("home.experience.work.description")}</p>

              <div className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                {Array.isArray(t("home.experience.work.technologies"))
                  ? t("home.experience.work.technologies").map((tech: string) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))
                  : ["React", "Next.js", "TypeScript", "BFF", "Testing"].map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div
              className="absolute w-8 h-8 bg-primary rounded-full flex items-center justify-center -left-12 border-4 border-background"
              aria-hidden="true"
            >
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{t("home.experience.education.title")}</h3>
                <span className="text-sm text-muted-foreground">{t("home.experience.education.period")}</span>
              </div>

              <a href="#" className="text-primary hover:underline font-medium inline-block mb-4">
                {t("home.experience.education.organization")}
              </a>

              <p className="text-muted-foreground">{t("home.experience.education.description")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
