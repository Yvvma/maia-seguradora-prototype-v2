import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { t } from "i18next";

const SELECTED_SOLUTIONS = [
 {
    id: "previdencia-privada",
    title: "Previdência Privada",
    description: "Análise completa das suas necessidades para encontrar as melhores soluções em seguros e investimentos.",
    imgSrc: "/photos/para-pessoas/previdencia.png",
  },
  {
    id: "blindagem-patrimonial",
    title: "Blindagem Patrimonial",
    description: "Estratégias avançadas para proteger seu patrimônio contra riscos jurídicos e financeiros.",
    imgSrc: "/photos/home-selecionada/02.jpg",
  },

];

const SelectedSolutions: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / SELECTED_SOLUTIONS.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / SELECTED_SOLUTIONS.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-8 bg-white rounded-xl mt-8">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-start mb-6 font-[MMC] text-[#0A1F7A]">
          Destaques para você:
        </h2>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8"
        >
          {SELECTED_SOLUTIONS.map((solution, index) => (
            <motion.div
  key={solution.id}
  className={`snap-center flex-shrink-0 w-full md:w-[48%] bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ${
    activeIndex === index ? "border-2 border-[#0A1F7A]" : "border-2 border-gray-200"
  }`}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.1,
    duration: 0.6,
    ease: "easeOut"
  }}
>
              <div className="flex justify-end mb-4">
                <img
                  src={solution.imgSrc}
                  alt={solution.title}
                  className="w-full object-cover rounded-xl aspect-video"
                />
              </div>
              
              <h3 className="text-2xl font-[MMC] font-bold tracking-tight text-[#0A1F7A] mb-3">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 text-base font-[NotoSansLight] mb-6">
                {solution.description}
              </p>
              
              <a
                href={`/servicos/${solution.id}`}
                className="text-[#0A1F7A] text-sm font-[MMC] font-medium hover:underline inline-flex items-center gap-1"
              >
                Saiba mais →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {SELECTED_SOLUTIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#0A1F7A] w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedSolutions;
