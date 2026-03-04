import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WorkshopsCarousel() {
  const { t } = useTranslation();
 
const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      scrollRef.current?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const flyerImages = [
    "/flyers/06.jpeg",
    "/flyers/07.jpeg",
    "/flyers/09.jpeg",
    "/flyers/10.jpeg",
    "/flyers/11.jpeg",
    "/flyers/12.jpeg",
    "/flyers/Flyer_03_Natasha_vs.png",
    "/flyers/Flyer_05_Natasha_vs.png",
    "/flyers/Flyer_10_Natasha_vs.png",
    "/flyers/Flyer_11_Natasha_vs.png",
  ];

  

  return (
    <div className="w-full flex flex-col gap-6 py-8 px-6 sm:px-16 md:px-32 bg-black">
      {/* Title */}
      <h2 className="text-xl font-[AppliedBold] text-white">{t("workshops.title")}</h2>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar  scrollbar-hide"
      >
        <div className="flex gap-6 pb-4 w-max">
          {flyerImages.map((flyer, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative w-40 sm:w-64 flex-shrink-0"
            >
              <motion.img
                src={flyer}
                alt={`Workshop flyer ${i + 1}`}
                className="w-full h-auto object-cover rounded-xl border border-white/20 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

       {/* Progress bar with arrows */}
      <div className="relative justify-center w-full flex items-center gap-3 z-20 ">
        <motion.button
          animate={{ 
            opacity: canScrollLeft ? 1 : 0,
            scale: canScrollLeft ? 1 : 0.8,
            pointerEvents: canScrollLeft ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => scroll('left')}
          className="w-8 h-8 rounded-full border-white border-1  flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
        
        <div className="relative w-32 sm:w-48 h-[6px] bg-white/60 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX }}
            className="h-full bg-white origin-left rounded-full"
          />
        </div>

        <motion.button
          animate={{ 
            opacity: canScrollRight ? 1 : 0,
            scale: canScrollRight ? 1 : 0.8,
            pointerEvents: canScrollRight ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => scroll('right')}
          className="w-8 h-8 rounded-full border-white  border-1 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

    </div>
  );
}
