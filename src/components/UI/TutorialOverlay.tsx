import { motion, MotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";

type TutorialOverlayProps = {
  releaseOpacity: MotionValue<number>;
  releaseX: MotionValue<number>;
  releaseY: MotionValue<number>;
  isMobile: boolean;
};

const TutorialOverlay = ({
  releaseOpacity,
  releaseX,
  releaseY,
  isMobile,
}: TutorialOverlayProps) => {
  const { t } = useTranslation();

  return (
    <div className="absolute sm:inset-0 bottom-0 -translate-y-30 w-full pointer-events-none z-10">
      <motion.div
        style={{
          opacity: releaseOpacity,
          x: releaseX,
          y: releaseY,
        }}
        className={`
          absolute max-w-sm text-white
          ${
            isMobile
              ? "bottom-0 left-6 right-6"
              : "right-12 top-1/2 -translate-y-1/2"
          }
        `}
      >
        <p className="bg-black/80 p-4 text-xs md:text-sm font-[AppliedMedium] tracking-tight leading-snug">
          {t("tutorials.text")}
        </p>
      </motion.div>
    </div>
  );
};

export default TutorialOverlay;
