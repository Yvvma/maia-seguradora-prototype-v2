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

  // 🔑 Shrink uniformly (all sides)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 0.88] : [1, 0.9]
  );

  // Rounded corners while scrolling
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  // Overlay release animation
  const releaseOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const releaseX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 120]);
  const releaseY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 120 : 0]);

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
            scale,              // ✅ shrink uniformly
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
       {/* OVERLAY */}
        <div className="relative w-full h-[640px] flex z-1">
          <motion.div
            style={{
              opacity: releaseOpacity,
              x: releaseX,
              y: releaseY,
            }}
            className='absolute bottom-0 text-white  justify-center items-center flex flex-col w-full'>                
         

          </motion.div>
        </div>
      </div>
    </div>
  );
}
