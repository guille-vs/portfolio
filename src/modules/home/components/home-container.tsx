import { Hero } from "@/modules/home/components/hero"
import { AboutSection } from "@/modules/home/components/about-section"
import { SkillsSection } from "@/modules/home/components/skills-section"
import { ProjectsSection } from "@/modules/home/components/projects-section"
import { ExperienceSection } from "@/modules/home/components/experience-section"
import { ContactSection } from "@/modules/home/components/contact-section"

export function HomeContainer() {
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
