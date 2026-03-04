import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Landmark, HeartHandshake, Home, Plane, Car, Building2, Truck, Shield } from "lucide-react";
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
  { id: "seguro-vida", title: "Seguro de Vida", description: "Proteção financeira para você e sua família em todas as fases da vida.", imgSrc: "/photos/seguros/seguro-main/seguro-main.png", icon: <HeartHandshake size={24} />, bgColor: "bg-blue-400" },
  
  { id: "seguro-viagem", title: "Seguro Viagem", description: "Assistência completa para viagens nacionais e internacionais.", imgSrc: "/photos/seguros/internacionais/seguro-internacional.png", icon: <Plane size={24} />, bgColor: "bg-sky-400" },
  { id: "previdencia-planejamento", title: "Previdência e Planejamento", description: "Planejamento financeiro e previdenciário em reais ou dólar.", imgSrc: "/photos/seguros/previdencia/previdencia-complementar.png", icon: <Landmark size={24} />, bgColor: "bg-yellow-400" },
  
];

const BUSINESS_SOLUTIONS = [
  { id: "seguro-empresarial", title: "Seguro Empresarial", description: "Proteção completa para seu negócio com coberturas personalizadas.", imgSrc: "/photos/para-empresas/03.png", icon: <Building2 size={24} />, bgColor: "bg-slate-600" },
  { id: "seguro-de-caminhoes", title: "Seguro de Caminhões", description: "Segurança para caminhões e veículos comerciais da sua empresa.", imgSrc: "/photos/para-empresas/01.jpg", icon: <Truck size={24} />, bgColor: "bg-gray-600" },
  { id: "seguro-cargas", title: "Seguro de Cargas", description: "Proteção para suas mercadorias em trânsito nacional e internacional.", imgSrc: "/photos/para-empresas/02.jpg", icon: <Shield size={24} />, bgColor: "bg-zinc-600" }
];

const CardsContainer: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="mais"
      className="relative z-10 w-full bg-transparent flex flex-col px-4 sm:px-12 lg:px-20 -mt-10 sm:-mt-16"
    >
      {/* Serviços para você */}
      <div className="w-full flex flex-col justify-center items-center py-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-lg text-start font-[MMC] text-[#e84620]/80">
            Serviços para você e sua família
          </h2>
          <div ref={scrollRef} className="flex flex-row gap-6 overflow-x-auto no-scrollbar py-4 overflow-y-hidden">
            {SERVICE_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                className={`relative rounded-xl min-w-[280px] h-96 w-full max-w-xs flex flex-col overflow-hidden items-start text-left ${card.bgColor} shadow-md flex-shrink-0`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-row justify-between items-start w-full">
                    <h3 className="text-lg font-[MMC] font-bold tracking-tight text-white mb-2">{card.title}</h3>
                    {card.icon && <div className="text-white flex justify-start items-center mb-4">{card.icon}</div>}
                  </div>
                  {card.imgSrc && <img src={card.imgSrc} alt={card.title} className="w-full object-contain drop-shadow-lg absolute bottom-0" />}
                  <p className="text-white text-xs tracking-tight font-[NotoSansLight] z-20 mb-4">{card.description}</p>
                  <a href={`/servicos/${card.id}`} className="border border-white max-w-max text-white py-1 px-2 z-20 font-medium hover:opacity-90 font-[MMC] transition-opacity inline-block rounded">
                    {t("home.see-more")}
                  </a>
                </div>
                <div className="absolute bottom-0 w-full h-32 z-10 bg-gradient-to-t from-black to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>
          <div className="w-full h-1 bg-gray-300 rounded mb-4 overflow-hidden">
            <motion.div
              className="h-1 bg-[#e84620] rounded origin-left"
              style={{ scaleX: scrollProgress }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: scrollProgress }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </div>
      </div>

      {/* Soluções para Empresas */}
      <div className="w-full flex flex-col justify-center items-center py-8 bg-white border border-gray-200 rounded-xl mt-6">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-lg text-start mb-6 font-[MMC] text-[#0c3141]/80">
            Soluções para Empresas
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {BUSINESS_SOLUTIONS.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="relative rounded-xl w-full h-72 overflow-hidden flex flex-col justify-end"
                style={{ backgroundImage: `url(${solution.imgSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e84620]/45 via-[#e84620]/25 to-[#0A1F7A]/100" />
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  <h3 className="text-xl font-[MMC] font-bold tracking-tight mb-3">{solution.title}</h3>
                  <p className="text-sm tracking-tight font-[NotoSansLight] mb-5 max-w-md text-white/90">{solution.description}</p>
                  <a href={`/servicos/${solution.id}`} className="inline-flex items-center border border-white px-5 py-2 rounded-full text-sm font-[MMC] transition-all duration-300 hover:bg-white hover:text-[#0A1F7A]">
                    {t("home.see-more")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Missão */}
      <div className="justify-center items-center w-full flex">
      <a href="/missao">
        <div className="w-full py-8 bg-[#0A1F7A] rounded-2xl flex flex-row items-center justify-between px-10 shadow-lg mt-6 mb-8 sm:max-w-2xl w-full gap-16">
          <div className="flex flex-col gap-2 w-[66%]">
            <h3 className="text-white text-xl font-[NotoSansBold] tracking-tight">Nossa missão</h3>
            <button className="text-yellow-400 text-left text-sm tracking-tight font-medium hover:underline font-[NotoSansRegular]">
              Conheça mais sobre a Maia
            </button>
          </div>
          <div className="relative w-[33%] justify-end items-end flex">
            <img src="/logo/favicon-maia.png" className="w-24" />
          </div>
        </div>
      </a>
      </div>
    </section>
  );
};

export default CardsContainer;