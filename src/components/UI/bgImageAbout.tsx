"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type BackgroundImageProps = {
  desktopSrc: string;
  mobileSrc: string;
};

export default function BackgroundImage({ desktopSrc, mobileSrc }: BackgroundImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Detect mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🔑 UNIFORM SHRINK (ALL SIDES)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  const releaseOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const releaseX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 120]);
  const releaseY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 120 : 0]);

  const src = isMobile ? mobileSrc : desktopSrc;

  return (
    <div ref={ref} className="relative w-full flex justify-center">
      <div className="relative w-full max-h-[720px] overflow-hidden flex justify-center">
        
        {/* IMAGE — SHRINKS FROM ALL SIDES */}
        <motion.img
          src={src}
          alt=""
          style={{ scale, borderRadius }}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            origin-center
          "
        />

        {/* OVERLAY */}
        <div className="relative w-full h-[640px] flex z-1">
     
        </div>

      </div>
    </div>
  );
}
