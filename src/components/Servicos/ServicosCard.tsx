"use client";

import React from "react";
import { motion } from "framer-motion";
import { t } from "i18next";

export interface CardItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imgSrc?: string;
  bgColor?: string;
}

interface CardsSectionProps {
  title: string;
  cards: CardItem[];
  fullWidth?: boolean;
}

const CardsSectionFull: React.FC<CardsSectionProps> = ({ title, cards, fullWidth = true }) => {
  return (
    <section className={`w-full flex flex-col justify-center items-center`}>
      <div className="w-full ">
     
        <div className="flex flex-col gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              id={card.id}
              className={`relative w-full  overflow-hidden flex flex-col md:flex-row items-start bg-gray-800 shadow-lg ${card.bgColor || "bg-gray-700"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {/* Conteúdo do card */}
              <div className="relative z-20 md:flex-1 p-6 sm:p-8 gap-4 h-80 justify-between flex flex-col">
                <div className="flex justify-between items-start w-full">
                  <h3 className="text-lg font-[MMC] font-bold text-white">{card.title}</h3>
                  
                </div>

                <p className="text-white/80 text-xs tracking-tight font-[MotoyaCedarW4] flex-1 translate-y-32">
                  {card.description}
                </p>
              </div>

              {/* Imagem do card */}
              {card.imgSrc && (
                <div className=" absolute bottom-0 md:flex-1 w-full  md:h-auto  overflow-hidden ">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-full object-cover drop-shadow-lg rounded-2xl "
                  />
                  {/* Overlay gradient */}
                  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSectionFull;
