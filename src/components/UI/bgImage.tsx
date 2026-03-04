import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type BackgroundImageProps = {
  src: string;
  position?: string; // opcional, padrão "center"
};

export default function BackgroundImage({ src, position = "center" }: BackgroundImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Efeitos de scroll (aplicando apenas no container, sem distorcer a imagem)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);

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
