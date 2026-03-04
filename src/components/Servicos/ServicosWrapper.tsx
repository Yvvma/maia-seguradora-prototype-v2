"use client";

import React from "react";
import { Shield, PiggyBank, Landmark, Car, Vault, Heart } from "lucide-react";
import CardsSection from "./ServicosCard";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SegurosRelease from "./Seguros";
import SolutionsLinesSelection from "./Solutions.tsx";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#consultoria-seguros", label: "nav.consultoria" },
  { href: "#planejamento-financeiro", label: "nav.produtos" },
  { href: "#blindagem-patrimonial", label: "nav.blindagem" },
  { href: "#consorcios", label: "nav.consorcio" },
  { href: "#previdencia", label: "nav.previdencia" },
  { href: "#contato", label: "nav.contato" },
];

/* ===== ANIMATION VARIANTS ===== */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const ServicesWrapper: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===== SCROLL SPY ===== */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5, // metade da seção visível
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);


  // ✅ Serviços separados por categoria
  const seguros: CardItem[] = [
    {
      id: "consultoria-seguros",
      title: t("services.consultoria-seguros.title"),
      description: t("services.consultoria-seguros.description-02"),
      icon: <Shield size={24} />,
      imgSrc: "/photos/seguros/internacionais/seguro-internacional.png",
      bgColor: "bg-blue-400",
    },
  
  ];

  const financeiro: CardItem[] = [
    {
      id: "planejamento-financeiro",
      title: t("services.planejamento-financeiro.title"),
      description: t("services.planejamento-financeiro.description-02"),
      icon: <PiggyBank size={24} />,
      imgSrc: "/photos/seguros/planejamento/planejamento-financeiro.png",
      bgColor: "bg-green-400",
    },
  ];

  const blindagem: CardItem[] = [
    {
      id: "blindagem-patrimonial",
      title: t("services.blindagem-patrimonial.title"),
      description: t("services.blindagem-patrimonial.description-02"),
      icon: <Vault size={24} />,
      imgSrc: "/photos/seguros/blindagem/blindagem-patrimonial.png",
      bgColor: "bg-purple-400",
    },
  ];

  const consorcios: CardItem[] = [
    {
      id: "consorcios",
      title: t("services.consorcios.title"),
      description: t("services.consorcios.description-02"),
      icon: <Car size={24} />,
      imgSrc: "/photos/seguros/consorcio/consorcio.png",
      bgColor: "bg-red-400",
    },
  ];
  
  return (
    <>

      {/* NAVIGATION */}
      <nav
        className="
        hide-scrollbar
        bg-black/40
          fixed z-40 w-full sm:backdrop-blur-md
          border-white/80

          /* MOBILE */
          top-14 border-b border-t

          /* DESKTOP */
          md:top-auto md:bottom-0 md:border-t md:border-b-0

          flex gap-4 py-3 px-4
          overflow-x-auto whitespace-nowrap scrollbar-hide
          justify-start md:justify-center
        "
      >
        {navLinks.map((link, i) => {
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={link.href}
              custom={i}
              initial="hidden"
              animate="show"
              variants={fadeUpVariants}
              transition={{
                delay: i * 0.12,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="flex-shrink-0 "
            >
              <a
                href={link.href}
                className={`
                  text-sm font-[MMC] uppercase tracking-wide 
                  underline-offset-13 transition-all duration-300

                  ${
                    isActive
                      ? "underline decoration-2 text-white opacity-100"
                      : "text-white/60 hover:text-white hover:underline hover:decoration-2"
                  }
                `}
              >
                {t(link.label)}
              </a>
            </motion.div>
          );
        })}
      </nav>

    <div  className="relative w-full flex justify-center items-center bg-white">
        <SegurosRelease
        titleKey="seguros.title"
        textKey="seguros.description"
        imgSrc="/photos/seguros/seguro-main/seguro-main.png"
        
        />

    </div>
    <div className="flex flex-col ">
        
      <CardsSection  cards={seguros} fullWidth />
      <CardsSection  cards={financeiro} fullWidth />
      <CardsSection  cards={blindagem} fullWidth />
      <CardsSection cards={consorcios} fullWidth />
      <SolutionsLinesSelection/>

    </div>
    </>
  );
};

export default ServicesWrapper;
