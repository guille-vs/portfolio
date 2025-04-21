import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jesús Valencia | Software Engineer",
  description:
    "Portfolio profesional de Jesús Valencia, Software Engineer especializado en desarrollo web frontend y backend con React, Next.js, TypeScript y Node.js.",
  keywords:
    "Jesús Valencia, Software Engineer, desarrollador web, React, Next.js, TypeScript, Node.js, portfolio",
  authors: [{ name: "Jesús Valencia", url: "https://github.com/g-susvs" }],
  creator: "Jesús Valencia",
  publisher: "Jesús Valencia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-jesus-valencia.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Jesús Valencia | Software Engineer",
    description:
      "Portfolio profesional de Jesús Valencia, Software Engineer especializado en desarrollo web frontend y backend.",
    url: "https://portfolio-jesus-valencia.vercel.app",
    siteName: "Portfolio de Jesús Valencia",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jesus.jpg-kEK7BFKmsc7FkjYhJPPleYGlIcScXN.jpeg",
        width: 800,
        height: 600,
        alt: "Jesús Valencia - Software Engineer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesús Valencia | Software Engineer",
    description:
      "Portfolio profesional de Jesús Valencia, Software Engineer especializado en desarrollo web frontend y backend.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jesus.jpg-kEK7BFKmsc7FkjYhJPPleYGlIcScXN.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
