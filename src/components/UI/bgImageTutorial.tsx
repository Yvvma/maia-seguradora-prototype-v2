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
  const { t } = useTranslation();

  // Start with null to prevent any initial render
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Set the correct value on mount (client-side only)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    
    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  const releaseOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const releaseX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 120]);
  const releaseY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 120 : 0]);

  // Don't render until we know the screen size
  if (isMobile === null) {
    return (
      <div ref={ref} className="relative w-full flex justify-center">
        <div className="relative w-full max-h-[720px] overflow-hidden flex justify-center">
          <div className="w-full h-[640px]" />
        </div>
      </div>
    );
  }

  const src = isMobile ? mobileSrc : desktopSrc;

  return (
    <div ref={ref} className="relative w-full flex justify-center flex-row">
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
        <div className="relative w-full sm:h-[720px] h-[640px] flex z-1">
           <motion.div
            style={{
              opacity: releaseOpacity,
              x: releaseX,
              y: releaseY,
            }}
            className="absolute bottom-2 text-black justify-center items-center flex flex-col w-full"
          >                
            <div className=" relative justify-center items-center flex flex-col w-full p-4 gap-2">
                 <p className="opacity-80 text-white font-[AppliedRegular] tracking-tight max-w-2xl p-2 text-left  text-sm  sm:text-lg leading-5 sm:leading-6 z-20 whitespace-pre-line">
                {t('tutorials.text')}
                </p>
            </div>   
          </motion.div>
        </div>

      </div>
     
    </div>
  );
}