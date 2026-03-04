"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-4">
    <div className="min-w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-sm font-bold text-white">
      +
    </div>
    <p className="text-white/85 font-[MotoyaCedarW4] text-sm md:text-base leading-relaxed">
      {text}
    </p>
  </div>
);

const LineSection: React.FC<{
  bg: string;
  title: string;
  description: string;
  bullets: string[];
}> = ({ bg, title, description, bullets }) => (
  <section
  id='previdencia'
    className="relative w-full min-h-[640px] flex items-center"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0c3141]/95 via-[#0c3141]/85 to-[#0c3141]/60" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-2xl space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[MMC] text-white">
          {title}
        </h2>

        <p className="text-white/80 font-[MotoyaCedarW4] text-base md:text-lg">
          {description}
        </p>

        <div className="space-y-5 pt-6">
          {bullets.map((b, i) => (
            <Bullet key={i} text={b} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SolutionsLinesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LineSection
        bg="/photos/seguros-page/02.webp"
        title={t("solutions.lines.life.title")}
        description={t("solutions.lines.life.description")}
        bullets={[
          t("solutions.lines.life.b1"),
          t("solutions.lines.life.b2"),
          t("solutions.lines.life.b3"),
          t("solutions.lines.life.b4")
        ]}
      />

      <LineSection
        bg="/photos/02.webp"
        title={t("solutions.lines.private.title")}
        description={t("solutions.lines.private.description")}
        bullets={[
          t("solutions.lines.private.b1"),
          t("solutions.lines.private.b2"),
          t("solutions.lines.private.b3"),
          t("solutions.lines.private.b4")
        ]}
      />
    </>
  );
};

export default SolutionsLinesSection;
