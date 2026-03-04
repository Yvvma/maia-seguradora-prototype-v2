"use client";

import { motion, MotionValue } from "framer-motion";

type BioOverlayProps = {
  title: string;
  text: string;
  isMobile: boolean;
  opacity: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export default function BioOverlay({
  title,
  text,
  isMobile,
  opacity,
  x,
  y,
}: BioOverlayProps) {
  return (
    <motion.div
      style={{ opacity, x, y }}
      className={`
        absolute text-white w-full max-w-max p-2
        flex flex-col items-center justify-center
        ${isMobile
          ? "bottom-0 left-0 right-6"
          : "right-12 top-1/2 -translate-y-1/2"}
      `}
    >
      {/* TITLE + LINE */}
      <div className="flex flex-col items-center gap-2 max-w-max">
        <p className="text-white font-[AppliedBold] shadow-sm tracking-normal text-center text-md uppercase sm:text-base leading-5 sm:leading-6 whitespace-pre-line">
          {title}
        </p>

        {/* Animated line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="
            block
            h-[2px]
            w-full
            bg-white
            origin-center
          "
        />
      </div>

      {/* TEXT */}
      <p className="mt-4 shadow-sm text-white font-[AppliedMedium] p-4 tracking-normal text-left text-sm sm:text-base leading-5 sm:leading-6 whitespace-pre-line">
        {text}
      </p>
    </motion.div>
  );
}
