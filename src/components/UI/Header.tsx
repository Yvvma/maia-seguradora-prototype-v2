import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Youtube, Instagram, Menu, X } from "lucide-react";

const MENU_ITEMS = [
  { key: "home", path: "/" },
  { key: "servicos", path: "/servicos" },
  
  { key: "contato", path: "/contato" },
];

const LANGUAGES = [
  { code: "PT", fullName: "PT-BR" },
  { code: "EN", fullName: "EN-US" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Smooth hamburger animation variants
const hamburgerContainerVariants = {
  open: { rotate: 0 },
  closed: { rotate: 0 },
};

const topLineVariants = {
  open: {
    rotate: 45,
    translateY: 6,
  },
  closed: {
    rotate: 0,
    translateY: 0,
  },
};

const middleLineVariants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
};

const bottomLineVariants = {
  open: {
    rotate: -45,
    translateY: -6,
  },
  closed: {
    rotate: 0,
    translateY: 0,
  },
};

const HeaderComponent = () => {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [language, setLanguage] = useState(
    i18n.language.toUpperCase().includes("PT") 
      ? "PT" 
      : i18n.language.toUpperCase().includes("JP") 
        ? "JP" 
        : "EN"
  );

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const isChanging = false;

  const toggleMenu = () => {
    setIsLanguageMenuOpen(false);
    setMenuOpen((prev) => !prev);
  };

  const toggleLanguageMenu = () => {
    setMenuOpen(false);
    setIsLanguageMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode.toLowerCase());
    setLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  const onLanguageMenuClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsLanguageMenuOpen(false);
    }
  };

  const onMenuClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header className="w-full z-[99] relative bg-[#f5f5f5]">
     
        
        <nav className="w-full mx-auto px-4 sm:px-18  py-2 sm:py-4 bg-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          

            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-row md:items-center md:justify-between w-full">
              <a href="/" className="text-left">
                <img className='flex relative max-w-[40px]' src='/logo/maia-seguros-logo.png'/>
              </a>

              {/* Desktop Menu */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="
                    w-full
                    overflow-x-auto
                    whitespace-nowrap
                    no-scrollbar
                    py-2
                  "
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex gap-8 min-w-max justify-start text-black">
                    {MENU_ITEMS.map((item, index) => (
                      <motion.a
                        key={item.key}
                        href={item.path}
                        custom={index}
                        className={clsx(
                          "uppercase tracking-tight transition text-[12px] sm:text-sm",
                          currentPath === item.path
                            ? "font-[MotoyaCedarW8]"
                            : "font-[MotoyaCedarW4]"
                        )}
                        variants={itemVariants}
                      >
                        {t(`menu.${item.key}`)}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Language Selector - Desktop */}
              <button
                onClick={toggleLanguageMenu}
                className="text-white uppercase text-[8px] border font-[MotoyaCedarW8] border-white px-1 py-0.5 hover:bg-white hover:text-black transition-colors"
              >
                {language}
              </button>
            </div>

            {/* Mobile Layout - Top Bar */}
            <div className="flex md:hidden justify-between items-center w-full gap-2">

      <a href="/" className="text-left -translate-y-1">
                  <img className='flex relative max-w-[32px]' src='/logo/maia-seguros-logo.png'/>
                </a>
              {/* Hamburger Menu - Left */}
              <button 
                onClick={toggleMenu}
                className="text-white focus:outline-none justify-center items-center flex flex-col relative"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  variants={hamburgerContainerVariants}
                  animate={menuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="w-full h-0.5 bg-black rounded-full"
                    variants={topLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-black rounded-full my-1"
                    variants={middleLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-black rounded-full"
                    variants={bottomLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
                <span className="font-[MotoyaCedarW1] text-xs tracking-tight text-black/60">{t('menu.title')}</span>
              </button>

          

          
            </div>
          </div>

          {/* Mobile Socials */}
          
        </nav>
      </motion.header>

      {/* Mobile Menu */}
    {/* Mobile Menu - Dropdown style like Capcom */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#f5f5f5] relative"
          >
           

            <div className="relative z-10">
              {/* Menu Title Bar - Yellow/Green */}
             

              {/* Menu Items */}
              <div className="flex flex-col bg-[#f5f5f5]">
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={item.key}
                    href={item.path}
                    className={clsx(
                      "px-4 py-2 border-b border-[#e84620]/100 flex items-center justify-between group hover:bg-[#e84620]/10 transition",
                      currentPath === item.path && "bg-[#e84620]/20"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={clsx(
                      "text-black text-base uppercase tracking-tight transition",
                      currentPath === item.path
                        ? "font-[MotoyaCedarW8]"
                        : "font-[MotoyaCedarW4]"
                    )}>
                      {t(`menu.${item.key}`)}
                    </span>
                    <span className="text-black text-xl transform group-hover:translate-x-1 transition">›</span>
                  </a>
                ))}
              </div>

              {/* Language Section - White background like Capcom */}
              <div className="bg-white  ">
                <div className="bg-black h-1"/>
              
                <div className="flex gap-1  flex-wrap flex-col">
                  {LANGUAGES.map((lang) => (
                  <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguageChange(lang.code);
                              setMenuOpen(false);
                            }}
                            disabled={isChanging}
                            className={clsx(
                              "uppercase font-[MotoyaCedarW1] tracking-tight px-4 py-2 transition text-sm text-left ",
                              language === lang.code
                                ? "bg-[#e84620]/80 "  // Green background with white text when selected
                                : "border-[white]/30 bg-[#f5f5f5] text-[#0a1929] hover:border-[#e84620] hover:text-[#e84620]",  // Default state
                              isChanging && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            {lang.fullName}
                          </button>
                  ))}
                </div>
                <div className="bg-black h-1"/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Modal */}
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#131313]/90 backdrop-blur-sm flex items-center justify-center z-60"
            onClick={onLanguageMenuClick}
          >
          
            
            <div className="flex flex-col gap-8 text-center">
              <p className="text-white text-xs uppercase font-[MotoyaCedarW8] tracking-widest">
                {t("language.select", "Selecionar idioma")}
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    disabled={isChanging}
                    className={clsx(
                      "text-white uppercase font-[MotoyaCedarW4] border px-4 py-2 transition",
                      language === lang.code
                        ? "border-white"
                        : "border-transparent hover:border-white",
                      isChanging && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {lang.fullName}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderComponent;
