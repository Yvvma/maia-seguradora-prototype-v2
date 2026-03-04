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
              className="font-[NotoSansRegular]  tracking-tight text-sm text-gray-100 underline underline-offset-2"
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
          <img className='flex relative max-w-[80px] h-auto' src='/logo/maia-logo-white.png'/>
           
          </a>
          <p className="font-[NotoSansRegular] text-xs tracking-tighter text-white">
            Produced by Industrie Brasil
          </p>
        </div>
      </footer>

    </>
  );
};

export default FooterComponent;
