import { motion } from "framer-motion";
import React from "react";

const PARTNERS = [
  { name: "AIG", logo: "/logos-maia/AIG_new_logo.png" },
  { name: "Allianz", logo: "/logos-maia/Allianz.png" },
  { name: "Bradesco Seguros", logo: "/logos-maia/bradesco_seguros.png" },
  { name: "MAG Seguros", logo: "/logos-maia/Logo_MAG_Seguros.png" },
  { name: "Capemisa", logo: "/logos-maia/logo-capemisa-seguradora.png" },
  { name: "Mapfre", logo: "/logos-maia/logo-mapfre.png" },
  { name: "SulAmérica", logo: "/logos-maia/logo-sulamerica.png" },
  { name: "Porto", logo: "/logos-maia/porto-logo.png" },
  { name: "Tokio Marine", logo: "/logos-maia/tokio-marine-seguradora.png" },
  { name: "Youse", logo: "/logos-maia/Youse.png" },
  { name: "Pier", logo: "/logos-maia/pier-logo.png" },
  { name: "Suhai", logo: "/logos-maia/suhai-seguradora.png" },
  { name: "Azos", logo: "/logos-maia/Azos-Seguros.png" },
  { name: "American Fidelity", logo: "/logos-maia/american-fidelity.png" },
  { name: "Trinity Life", logo: "/logos-maia/trinity-life.webp" },
  { name: "Social", logo: "/logos-maia/Social.webp" }
];

const PartnersContainer: React.FC = () => {
  return (
    <div className="w-full  py-12 bg-[#f5f5f5]">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-2xl  text-[#e84620] font-[NotoSansBold] text-start">
          Parceiros de negócio
        </h2>

        <p className="mt-2 mb-8 max-w-2xl text-sm text-[#e84620] leading-relaxed font-[NotoSansLight] tracking-tight">
          Trabalhamos ao lado de seguradoras e empresas consolidadas para oferecer
          soluções confiáveis, com solidez técnica e alinhamento às melhores
          práticas do mercado.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              className="border-2 border-white rounded-lg p-4 h-28 flex flex-col justify-between"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.35,
                ease: "easeOut"
              }}
            >
              {/* Logo */}
              <div className="h-10 flex items-start">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[90px] object-contain"
                />
              </div>

              {/* Nome */}
              <span className="text-xs font-[NotoSansRegular] text-gray-700 leading-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersContainer;