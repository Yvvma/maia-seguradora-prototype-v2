"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CirclePlus, Play, Pause, ChevronDown } from "lucide-react";

type BackgroundVideoProps = {
  desktopSrc: string;
  mobileSrc: string;
};

export default function BackgroundVideo({
  desktopSrc,
  mobileSrc,
}: BackgroundVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const { t } = useTranslation();

  // Responsividade
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "24px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[80vh] overflow-hidden bg-[#e84620] z-10"
    >
      {/* VIDEO DE FUNDO */}
      <motion.video
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        muted
        loop
        playsInline
        src={isMobile ? mobileSrc : desktopSrc}
        style={{ scale, borderRadius }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY GRADIENTE */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-row justify-end px-4 py-4 sm:px-48 sm:py-16 ">
        <div className="max-w-6xl w-full justify-start h-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl flex flex-col gap-4 justify-end py-16 h-full"
          >
            {/* TÍTULO PRINCIPAL + BOTÃO PLAY/PAUSE */}
            <div className="flex items-center gap-4">
              <h1 className="text-3xl md:text-5xl font-[MMC] tracking-tight text-white leading-tight">
                {t("home.title")}
              </h1>
             
            </div>

            <p className="text-sm text-white/80 font-[NotoSansLight] tracking-tight">
              {t("home.release")}
            </p>

            <a
              href="#"
              className="inline-flex max-w-max items-center gap-2 rounded-full font-[NotoSansBold] tracking-tight bg-[#e84620] px-3 py-2 text-white text-sm hover:bg-white hover:text-black transition"
            >
              {t("home.see-more")}
              <CirclePlus size={18} />
            </a>
            
          </motion.div>
        </div>
        
       <button
                onClick={togglePlay}
                className="bg-white/60 max-h-max  hover:bg-white text-black p-2 rounded-full transition flex items-center justify-center"
              >
                {isPlaying ? <Pause size={20}  /> : <Play size={20} />}
              </button>
      </div>

    </section>
  );
}