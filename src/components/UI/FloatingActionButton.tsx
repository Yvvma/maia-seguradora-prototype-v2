"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HelpingHand } from "lucide-react";

const FloatingActionButton = () => {
  const { t } = useTranslation();
  const [showBubble, setShowBubble] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Função para mostrar tooltip por X segundos
  const showTooltip = (duration = 5000) => {
    setShowBubble(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, duration);
  };

  // Inicial: on load
  useEffect(() => {
    // Delay para animar FAB e tooltip
    const initialTimeout = setTimeout(() => {
      showTooltip(5000); // mostra tooltip 5s
    }, 800); // FAB entra da direita primeiro
    return () => clearTimeout(initialTimeout);
  }, []);

  // Reaparece a cada 30s por 10s se não estiver hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        showTooltip(10000); // aparece 10s
      }
    }, 30000); // 30s
    return () => clearInterval(interval);
  }, [hovered]);

  const handleClick = () => {
    window.location.href = "https://wa.me/62983303000";
  };

  return (
    <motion.div
      className="fixed bottom-6 right-2 z-[9999] flex flex-col items-end"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      onMouseEnter={() => {
        setHovered(true);
        showTooltip(10000); // mostra 10s ao hover
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-black  px-3 py-4 rounded-md flex flex-row shadow-lg mb-1 text-sm font-[MMC] tracking-tight leading-5 text-left justify-start items-center"
          >
            <span className="max-w-[90px]">
              {t("home.tip")}
            </span>
            <HelpingHand className="text-[#e84620]" size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão */}
      <motion.a
        href="https://wa.me/62983303000"
        target="_blank"
        
        className="w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] shadow-xl mr-5"
        whileTap={{ scale: 0.88 }}
      >
        <img
          src="/icon/whatsapp.png"
          className="w-16 invert"
          alt="Logo"
        />
      </motion.a>
    </motion.div>
  );
};

export default FloatingActionButton;
