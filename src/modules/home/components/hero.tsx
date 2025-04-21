"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { Download, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/providers/language-provider";
import { useToast } from "@/shared/hooks/use-toast";

export function Hero() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleDownloadCV = () => {
    // Crear un enlace temporal para la descarga
    const link = document.createElement("a");
    link.href = "/cv-jesus-valencia.pdf";
    link.download = "CV-Jesus-Valencia.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Mostrar notificación de éxito
    toast({
      title: t("home.hero.downloadSuccess") || "",
      description: t("home.hero.downloadMessage") || "",
    });
  };

  return (
    <section
      id="top"
      className="flex flex-col items-center justify-center min-h-screen pt-16 pb-8 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {t("home.hero.title")}
        </h1>
        <h2
          className="text-2xl md:text-3xl font-medium text-primary mb-6"
          style={{ color: "hsl(var(--primary))" }}
        >
          {t("home.hero.subtitle")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("home.hero.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="gap-2 flex items-center"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
            onClick={handleDownloadCV}
            aria-label="Descargar currículum en formato PDF"
          >
            <Download size={18} aria-hidden="true" />
            <span>{t("home.hero.downloadCV")}</span>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact" className="gap-2 flex items-center">
              <Mail size={18} aria-hidden="true" />
              <span>{t("home.hero.contact")}</span>
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="#projects" className="gap-2 flex items-center">
              <span>{t("home.hero.viewProjects")}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
