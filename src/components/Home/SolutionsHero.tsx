import React from "react";
import { useTranslation } from "react-i18next";

const SolutionsHero: React.FC = () => {
  const {t} = useTranslation()
  return (
    <section
      className="relative w-full min-h-[520px] flex items-center"
      style={{
        backgroundImage: "url('/photos/03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c3141]/90 via-[#0c3141]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="text-white space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[MMC] leading-tight">
           {t('solutions.solutions-home-text-02')}
          </h1>

          <p className="text-white/80 max-w-xl font-[MotoyaCedarW4]">
            {t('solutions.solutions-home-text-01')}
          </p>

          {/* Logos */}
          <div className="flex items-center gap-6 pt-4">
            <img
              src="/logo/private.png"
              alt="Toda Vida"
              className="h-10 object-contain invert"
            />
            <div className="w-px h-8 bg-white/30" />
            <img
              src="/logo/private-solutions.png"
              alt="Private Solutions"
              className="h-10 object-contain invert"
            />
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button className="inline-flex items-center font-[MMC] tracking-tight gap-2 px-6 py-3 rounded-full bg-white text-[#0c3141] font-medium hover:bg-gray-100 transition">
              {t('solutions.know')}
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Espaço visual (lado direito fica só imagem) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default SolutionsHero;
