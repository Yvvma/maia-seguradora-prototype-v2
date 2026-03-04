import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/Contato/FormContact";
import { Instagram, Youtube, X, Mail } from "lucide-react";

const FooterComponent = () => {
  const { t } = useTranslation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <footer className="relative flex flex-col w-full justify-center items-center bg-black pt-1 gap-1 overflow-y-hidden">
        {/* Links + Socials */}
        <div className="flex flex-row w-full items-center justify-between px-8 py-2">
          {/* Left links */}
          <div className="flex flex-row gap-6 items-center">
        
            <a
              href="/terms-and-privacy"
              className="font-[MotoyaCedarW6] tracking-tight text-sm text-gray-100 underline underline-offset-2"
            >
              {t("menu.termos-privacidade")}
            </a>
          </div>
          <div className=" flex justify-center py-2">
                      <div className="flex flex-row gap-4 items-center text-white">
                        <a
                          href="https://www.instagram.com/maia_corretora_seguros/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          <Instagram size={24} />
                        </a>
                        <a
                          href="https://wa.me/62983303000"
                          target="_blank"
                          rel="noopener noreferrer "
                          className="invert hover:text-gray-400"
                        >
                          <img src='/socials/whatsapp.png' alt="X Icon" className="max-w-[24px] " />
                        </a>
                         <a
                          href="mailto:contato@maiacorretoraseguros.com.br"
                          target="_blank"
                          rel="noopener noreferrer "
                          className=" hover:text-gray-400"
                        >
                          <Mail size={24}/>
                        </a>
                      
                      </div>
                    </div>


        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-2 items-center justify-between w-full px-8 py-2 border-t border-white/20">
          <a href="/" className="flex flex-row gap-1 items-center">
          <img className='flex relative max-w-[40px]' src='/logo/maia-seguros-logo-white.png'/>
           
          </a>
          <p className="font-[MotoyaCedarW1] text-xs tracking-tighter text-white">
            Produced by Industrie Brasil
          </p>
        </div>
      </footer>

      {/* AnimatePresence Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
            />

            {/* Modal Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-black border border-white rounded-t-2xl shadow-lg z-50 p-6 max-h-[90vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Handle */}
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />

              <div className="relative flex flex-col items-center text-center">
                <button
                  className="absolute top-4 right-4 text-gray-500 text-xl"
                  onClick={() => setIsContactOpen(false)}
                >
                  ✕
                </button>

                {/* Título */}
                <h2 className="text-2xl font-bold mb-6 text-white">{t("menu.contato")}</h2>

                {/* Form */}
                <div className="text-left w-full">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterComponent;
