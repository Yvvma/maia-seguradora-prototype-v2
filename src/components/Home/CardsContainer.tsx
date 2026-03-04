import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Shield, PiggyBank, Landmark, Car, Vault } from "lucide-react";
import { t } from "i18next";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imgSrc?: string;
  bgColor: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "consultoria-seguros",
    title: "Consultoria Seguros Nacionais e Internacionais",
    description: "Proteção abrangente para você e sua família em qualquer lugar do mundo.",
    imgSrc:"/photos/seguros/internacionais/seguro-internacional.png",
    icon: <Shield size={24} />,
    bgColor: "bg-blue-400"
  },
  {
    id: "planejamento-financeiro",
    title: "Planejamento Financeiro",
    description: "Estratégias personalizadas para alcançar seus objetivos financeiros.",
    imgSrc:"/photos/seguros/planejamento/planejamento-financeiro.png",
    icon: <PiggyBank size={24} />,
    bgColor: "bg-green-400"
  },
  {
    id: "blindagem-patrimonial",
    title: "Blindagem Patrimonial",
    description: "Proteja seu patrimônio contra riscos e incertezas com soluções especializadas.",
    imgSrc:"/photos/seguros/blindagem/blindagem-patrimonial.png",
    icon: <Vault size={24} />,
    bgColor: "bg-purple-400"
  },
  {
    id: "previdencia-privada",
    title: "Previdência Privada",
    description: "Garanta seu futuro com planos de aposentadoria personalizados.",
    imgSrc:"/photos/seguros/previdencia/previdencia-complementar.png",
    icon: <Landmark size={24} />,
    bgColor: "bg-yellow-400"
  },
  {
    id: "consorcios",
    title: "Consórcios",
    description: "Acesso facilitado a bens e serviços através de grupos organizados.",
    imgSrc:"/photos/seguros/consorcio/consorcio.png",
    icon: <Car size={24} />,
    bgColor: "bg-red-400"
  }
];

const CardsContainer: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Atualiza progresso de scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl text-start mb-6 font-[MMC] text-[#e84620]/80">
          {t('home.services')}
        </h2>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-300 rounded mb-4 overflow-hidden">
          <motion.div
            className="h-1 bg-[#e84620] rounded"
            style={{ scaleX: scrollProgress }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          className="flex flex-row gap-6 overflow-x-auto no-scrollbar py-4"
        >
          {SERVICE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              className={`relative rounded-xl min-w-[280px] h-96 w-full max-w-xs  flex flex-col overflow-hidden items-start text-left ${card.bgColor} shadow-md flex-shrink-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-row justify-between items-start w-full">
                  <h3 className="text-lg font-[MMC] font-bold tracking-tight text-white mb-2">{card.title}</h3>

                  {card.icon && (
                    <div className="text-white flex justify-start items-center mb-4">
                      {card.icon}
                    </div>
                  )}
                </div>
                {card.imgSrc && (
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full object-contain  drop-shadow-lg absolute bottom-0"
                  />
                )}

                <p className="text-white text-xs tracking-tight font-[MotoyaCedarW4] z-20 mb-4">
                  {card.description}
                </p>

                <a
                  href={`/servicos/#${card.id}`}
                  className="border border-white max-w-max text-white py-1 px-2 z-20 font-medium hover:opacity-90 font-[MMC] transition-opacity inline-block rounded"
                >
                  {t('home.see-more')}
                </a>
              </div>
              

              <div className="absolute bottom-0 w-full h-32 z-10
                bg-gradient-to-t from-black to-transparent opacity-60"/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
