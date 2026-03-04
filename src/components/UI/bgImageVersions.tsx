"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type BackgroundImageProps = {
  desktopSrc: string;
  mobileSrc: string;
  position?: string; // opcional, padrão "center"
};

export default function BackgroundImage({
  desktopSrc,
  mobileSrc,
  position = "center",
}: BackgroundImageProps) {
  const ref = useRef(null);
  const [src, setSrc] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

  // Detect mobile vs desktop on mount and resize
  useEffect(() => {
    const updateSrc = () => {
      setSrc(window.innerWidth < 768 ? mobileSrc : desktopSrc);
    };
    updateSrc();
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, [desktopSrc, mobileSrc]);

  // Don't render until we know which image to show
  if (src === null) {
    return (
      <div ref={ref} className="relative w-full flex justify-center items-center bg-black">
        <div className="relative w-full max-h-[720px] overflow-hidden flex justify-center">
          <div className="relative w-full h-[640px] sm:h-[640px]" />
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative w-full flex justify-center items-center bg-black">
      <motion.div
        style={{ scale, borderRadius }}
        className="relative w-full max-h-[720px] overflow-hidden flex justify-center"
      >
        {/* Imagem cortada, mantendo proporção */}
        <div
          className="absolute inset-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: position,
          }}
        />
        <div className="relative w-full h-[640px] sm:h-[640px] flex flex-col justify-start items-end z-10">
          {/* Conteúdo acima da imagem */}
        </div>
      </motion.div>
    </div>
  );
}