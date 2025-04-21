import { Hero } from "@/modules/home/components/hero"
import { AboutSection } from "@/modules/about/components/about-section"
import { SkillsSection } from "@/modules/skills/components/skills-section"
import { ProjectsSection } from "@/modules/projects/components/projects-section"
import { ExperienceSection } from "@/modules/experience/components/experience-section"
import { ContactSection } from "@/modules/contact/components/contact-section"

export function HomeModule() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
