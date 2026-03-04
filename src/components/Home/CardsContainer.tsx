import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import {  Landmark, HeartHandshake, Home, Plane, Car, Building2, Truck, Shield} from "lucide-react";
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
    id: "seguro-vida",
    title: "Seguro de Vida",
    description: "Proteção financeira para você e sua família em todas as fases da vida.",
    imgSrc: "/photos/seguros/seguro-main/seguro-main.png",
    icon: <HeartHandshake size={24} />,
    bgColor: "bg-blue-400"
  },
  {
    id: "seguro-patrimonial",
    title: "Seguros Patrimoniais",
    description: "Proteção para automóveis, residências, condomínios e bens pessoais.",
    imgSrc: "/photos/seguros/blindagem/blindagem-patrimonial.png",
    icon: <Home size={24} />,
    bgColor: "bg-green-400"
  },
  {
    id: "seguro-viagem",
    title: "Seguro Viagem",
    description: "Assistência completa para viagens nacionais e internacionais.",
    imgSrc: "/photos/seguros/internacionais/seguro-internacional.png",
    icon: <Plane size={24} />,
    bgColor: "bg-sky-400"
  },
  {
    id: "previdencia-planejamento",
    title: "Previdência e Planejamento",
    description: "Planejamento financeiro e previdenciário em reais ou dólar.",
    imgSrc: "/photos/seguros/previdencia/previdencia-complementar.png",
    icon: <Landmark size={24} />,
    bgColor: "bg-yellow-400"
  },
 {
  id: "seguro-automovel",
  title: "Seguro Automóvel",
  description: "Proteção completa para seu veículo, com coberturas sob medida e assistência confiável.",
  imgSrc: "/photos/seguros/consorcio/consorcio.png",
  icon: <Car size={24} />,
  bgColor: "bg-red-400"
}
];

const BUSINESS_SOLUTIONS = [
  {
    id: "seguro-empresarial",
    title: "Seguro Empresarial",
    description: "Proteção completa para seu negócio com coberturas personalizadas.",
    imgSrc: "/photos/seguros/blindagem/blindagem-patrimonial.png",
    icon: <Building2 size={24} />,
    bgColor: "bg-slate-600"
  },
  {
    id: "seguro-frotas",
    title: "Seguro de Frotas",
    description: "Segurança para caminhões e veículos comerciais da sua empresa.",
    imgSrc: "/photos/seguros/consorcio/consorcio.png",
    icon: <Truck size={24} />,
    bgColor: "bg-gray-600"
  },
  {
    id: "seguro-cargas",
    title: "Seguro de Cargas",
    description: "Proteção para suas mercadorias em trânsito nacional e internacional.",
    imgSrc: "/photos/seguros/internacionais/seguro-internacional.png",
    icon: <Shield size={24} />,
    bgColor: "bg-zinc-600"
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
    <section className="w-full px-2 bg-white  flex flex-col">
    <div className="w-full -translate-y-12  flex flex-col justify-center items-center py-6 bg-white border-gray-200 border-1 rounded-xl ">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-lg text-start  font-[MMC] text-[#e84620]/80">
          Serviços para você e sua família
        </h2>

     
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
            >              <div className="flex flex-col p-6 sm:p-8">
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

                <p className="text-white text-xs tracking-tight font-[NotoSansLight] z-20 mb-4">
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

      </div>
    </div>

    {/* Soluções para Empresas */}
    <div className="w-full flex flex-col justify-center -translate-y-12  items-center py-8 bg-white border-gray-200 border-1 rounded-xl rounded-xl mt-8">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-lg text-start mb-6 font-[MMC] text-[#0c3141]/80">
          Soluções para Empresas
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          {BUSINESS_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`relative rounded-xl w-full h-64 flex flex-col overflow-hidden items-start text-left ${solution.bgColor} shadow-md`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col p-6 sm:p-8 w-full">
                <div className="flex flex-row justify-between items-start w-full">
                  <h3 className="text-xl font-[MMC] font-bold tracking-tight text-white mb-2">{solution.title}</h3>
                  {solution.icon && (
                    <div className="text-white flex justify-start items-center">
                      {solution.icon}
                    </div>
                  )}
                </div>
                
                <p className="text-white text-sm tracking-tight font-[NotoSansLight] z-20 mb-4 max-w-md">
                  {solution.description}
                </p>

                <a
                  href={`/servicos/#${solution.id}`}
                  className="border border-white max-w-max text-white py-1 px-3 z-20 font-medium hover:opacity-90 font-[MMC] transition-opacity inline-block rounded"
                >
                  {t('home.see-more')}
                </a>
              </div>

              {solution.imgSrc && (
                <img
                  src={solution.imgSrc}
                  alt={solution.title}
                  className="w-48 object-contain drop-shadow-lg absolute bottom-0 right-4 z-10"
                />
              )}

              <div className="absolute bottom-0 w-full h-32 z-[5] bg-gradient-to-t from-black to-transparent opacity-60"/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

          <a href='/missao'>
      <div className="w-full py-8 flex-row bg-[#0A1F7A] rounded-2xl flex items-center justify-between px-10 shadow-lg">
        {/* Texto */}
        <div className="flex flex-col gap-2 w-[66%]">
          <h3 className="text-white text-xl font-[NotoSansBold] tracking-tight">
            Nossa missão
          </h3>
          <button className="text-yellow-400 text-left text-sm tracking-tight font-medium hover:underline font-[NotoSansRegular]">
            Conheça mais sobre a Maia
          </button>
        </div>

        {/* Cartões */}
            <div className="relative w-[33%]">
            <img src='/logo/favicon-maia.png' className="w-24"/>
          </div>
      </div>
      </a>

    </section>
  );
};

export default CardsContainer;
