import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MENU_ITEMS = [
  { key: "menu.home", path: "/" },
  { key: "menu.producao_cultural", path: "/producao-cultural" },
  { key: "menu.dj", path: "/dj" },
  { key: "menu.moda", path: "/moda" },
  { key: "menu.campanhas", path: "/campanhas" },
  { key: "menu.contato", path: "/contato" },
];

const TitleComponent = () => {
  const { t } = useTranslation();

  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  
  // Encontrar o item correspondente ao path atual
  const menuItem = MENU_ITEMS.find((item) => item.path === path);
  
  // Se não encontrar, use uma string vazia ou fallback
  const titleKey = menuItem?.key || "menu.home";

  return (
    <motion.h1
      className="text-white font-[HaasThin] tracking-normal uppercase text-xl leading-5 z-20 max-w-sm sm:max-w-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUp}
    >
      {t(titleKey)}
    </motion.h1>
  );
};

export default TitleComponent;
