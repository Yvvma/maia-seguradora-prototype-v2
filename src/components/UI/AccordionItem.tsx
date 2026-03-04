import { useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Mapeamento de caminhos para as chaves de tradução
const MENU_ITEMS = [
  { key: "menu.home", path: "/" },
  { key: "menu.producao_cultural", path: "/producao-cultural" },
  { key: "menu.dj", path: "/dj" },
  { key: "menu.moda", path: "/moda" },
  { key: "menu.campanhas", path: "/campanhas" },
  { key: "menu.contato", path: "/contato" },
  { key: "terms.title", path: "/terms-and-privacy" },
];

type AccordionProps = {
  children?: ReactNode;
  title?: string;
};

const AccordionItem = ({ children }: AccordionProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const menuItem = MENU_ITEMS.find((item) => item.path === path);
  const isHome = path === "/";
  const title = isHome ? "" : t(menuItem?.key || "menu.home");

  return (
    <div className="border-b border-white/20  w-full items-start justify-center sm:justify-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center items-center p-4"
      >
        <AnimatePresence mode="wait">
          <motion.h3
            key={title}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-white font-[HaasLight] uppercase text-md tracking-normal border-white  ${
              isOpen ? 'border-white' : 'border border-transparent  hover:border-white'
            }`}
          >
            {title}
          </motion.h3>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 'auto' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
