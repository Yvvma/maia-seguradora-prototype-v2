import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quais tipos de seguros vocês oferecem?",
    answer:
      "Oferecemos consultoria em seguros nacionais e internacionais, incluindo seguros de vida, saúde, automóvel, residencial e empresarial. Nossa equipe avalia suas necessidades para indicar as melhores opções."
  },
  {
    id: "faq-2",
    question: "Como funciona o planejamento financeiro com vocês?",
    answer:
      "O planejamento é totalmente personalizado, considerando objetivos, renda, despesas e perfil. Criamos estratégias claras para curto, médio e longo prazo."
  },
  {
    id: "faq-3",
    question: "O que é blindagem patrimonial?",
    answer:
      "São estratégias jurídicas e financeiras para proteger seus bens contra riscos como dívidas, credores, separações e imprevistos, sempre dentro da legalidade."
  },
  {
    id: "faq-4",
    question: "Quais são as vantagens da previdência privada?",
    answer:
      "Complementa o INSS, auxilia no planejamento sucessório, pode gerar benefícios fiscais e garante mais liberdade financeira no futuro."
  },
  {
    id: "faq-5",
    question: "Como funcionam os consórcios?",
    answer:
      "Grupos organizados para aquisição de bens ou serviços, com contribuições mensais e contemplação via sorteio ou lance, sem juros."
  }
];

const FaqContainer: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-[MMC] text-gray-800">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: "easeOut"
                }}
              >
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : item.id)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-[MMC] tracking-tight text-gray-800">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="text-gray-500" size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeInOut" },
                        opacity: { duration: 0.25, ease: "easeOut" }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed font-[MotoyaCedarW4] tracking-tight">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
