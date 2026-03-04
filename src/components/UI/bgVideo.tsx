"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CirclePlus } from "lucide-react";

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
  const { t } = useTranslation();

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

  // movimento extremamente sutil
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "24px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] overflow-hidden bg-[#e84620] z-0"
    >
      {/* VIDEO DE FUNDO */}
      <motion.video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        muted
        loop
        playsInline
        src={isMobile ? mobileSrc : desktopSrc}
        style={{ scale, borderRadius }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY GRADIENTE (igual Porto) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent "
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex items-start  px-4 py-6 justify-start">
        <div className="max-w-6xl w-full justify-start">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl flex flex-col gap-4  justify-start"
          >
            <img className='flex relative max-w-[80px]' src='/logo/maia-logo-white.png'/>
             <h1 className="text-3xl md:text-5xl font-[MMC] tracking-tight text-white leading-tight">
              {t("home.title")}
            </h1>

            <p className="text-sm  text-white/80 font-[NotoSansLight] tracking-tight">
              {t("home.release")}
            </p>

           
          
            <div className="">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-sm font-[NotoSansBold] tracking-tight bg-[#e84620] px-3 py-2 text-white text-sm hover:bg-white hover:text-black transition"
              >
                {t("home.see-more")}
                <CirclePlus size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}