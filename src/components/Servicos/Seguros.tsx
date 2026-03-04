"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SegurosReleaseProps {
  titleKey: string;
  textKey: string;
  imgSrc: string;
}

const SegurosRelease: React.FC<SegurosReleaseProps> = ({ titleKey, textKey, imgSrc }) => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-8  bg-[#e84620] text-white rounded-2xl m-8 relative overflow-hidden">
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Texto */}
        <div className="flex-1 flex flex-col gap-6 min-h-96">
          <h2 className="text-2xl md:text-4xl font-[MMC] text-white">
            {t(titleKey)}
          </h2>
          <p className="text-white/90 text-xs md:text-xl leading-relaxed font-[MotoyaCedarW4]">
            {t(textKey)}
          </p>
        

        {/* Imagem */}
        
          <img
            src={imgSrc}
            alt={t(titleKey)}
            className="absolute w-full -bottom-8 object-contain -right-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SegurosRelease;
