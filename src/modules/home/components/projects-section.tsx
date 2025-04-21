"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/providers/language-provider"
import { useProjects } from "@/modules/home/hooks/use-projects"

export function ProjectsSection() {
  const { t, language } = useLanguage()
  const { projects } = useProjects()

  return (
    <section id="projects" className="section-container" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="projects-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("home.projects.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imgPath || "/placeholder.svg"}
                    alt={`Captura de pantalla del proyecto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {language === "ES" ? project.description.es : project.description.en}
                  </p>
                  <div className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                    {project.techs.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.urlRepository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2 flex items-center"
                      aria-label={`Ver código fuente de ${project.title} en GitHub`}
                    >
                      <Github size={16} aria-hidden="true" />
                      <span>{t("home.projects.code")}</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.urlDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2 flex items-center"
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      <span>{t("home.projects.demo")}</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
