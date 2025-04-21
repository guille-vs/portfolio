export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jesús Valencia",
    jobTitle: "Software Engineer",
    url: "https://portfolio-jesus-valencia.vercel.app",
    sameAs: ["https://github.com/g-susvs", "https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/"],
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    worksFor: {
      "@type": "Organization",
      name: "Global S1",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Instituto CERTUS",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
