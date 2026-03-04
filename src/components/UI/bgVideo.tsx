"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type BackgroundVideoProps = {
  desktopSrc: string;
  mobileSrc: string;
};

export default function BackgroundVideo({
  desktopSrc,
  mobileSrc,
}: BackgroundVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const {t} = useTranslation();
  // Detecta mobile
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

  // vídeo
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  // release animation
  const releaseOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const releaseX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 0 : 120] // desktop sai para a direita
  );

  const releaseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 120 : 0] // mobile sai para baixo
  );

  return (
    <div
      ref={ref}
      className="relative w-full flex justify-center items-center flex-row"
    >
      <div className="relative max-h-[580px] overflow-hidden flex justify-center w-full">
        {/* VIDEO */}
        <motion.video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          muted
          loop
          playsInline
          src={isMobile ? mobileSrc : desktopSrc}
          style={{scale, borderRadius }}
          className="absolute inset-0 w-full h-full object-contain sm:object-cover z-0 origin-center"
        />

        {/* OVERLAY */}
        <div className="relative w-full sm:h-[580px] h-[235px] flex z-1">
          <motion.div
            style={{
              opacity: releaseOpacity,
              x: releaseX,
              y: releaseY,
            }}
            className='absolute bottom-2 text-white  justify-center items-center flex flex-col w-full '>                
      

          </motion.div>

        
        </div>

      </div>

      
    </div>
  );
}
