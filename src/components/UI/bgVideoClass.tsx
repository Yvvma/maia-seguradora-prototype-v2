"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type BackgroundVideoProps = {
  src: string;
};

export default function BackgroundVideo({ src }: BackgroundVideoProps) {
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

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /**
   * VIDEO — cinematic crop (NO stretch)
   * scale = zoom → overflow-hidden faz o corte
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1.08, 1.18] : [1.02, 1.1]
  );

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  /**
   * RELEASE animation
   */
  const releaseOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const releaseX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 0 : 120] // desktop → direita
  );

  const releaseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 120 : 0] // mobile → baixo
  );

  return (
    <div ref={ref} className="relative w-full flex justify-center items-center">
      <div className="relative w-full max-h-[720px] overflow-hidden">
        {/* VIDEO */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          src={src}
          style={{
            scale, // ✅ crop real
            borderRadius,
            objectPosition: isMobile ? "50% 65%" : "50% 50%",
          }}
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            origin-center 
            z-0
          "
        />

        {/* OVERLAY */}
        <div className="relative w-full h-[640px] flex z-10">
         
        </div>
      </div>
    </div>
  );
}
