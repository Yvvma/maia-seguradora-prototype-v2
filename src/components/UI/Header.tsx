import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Youtube, Instagram, Menu, X, ArrowLeft } from "lucide-react";

const MENU_ITEMS = [
  { key: "servicos", path: "/servicos", hasSubmenu: true },
  { key: "investimentos", path: "/investimentos" },
  { key: "missao", path: "/missao" },
  { key: "blog", path: "/blog" },
  { key: "contato", path: "/contato" },
];

const SERVICOS_PESSOAL = [
  { title: "Seguro de Vida", slug: "seguro-vida" },
  { title: "Seguro de Automóveis", slug: "seguro-automoveis" },
  { title: "Seguro Viagem", slug: "seguro-viagem" },
  { title: "Previdência Privada (VGBL e PGBL)", slug: "previdencia-privada" },
  { title: "Consórcios Auto, Imóvel e Serviços", slug: "consorcios" },
];

const SERVICOS_EMPRESAS = [
  { title: "Seguro Empresarial", slug: "seguro-empresarial" },
  { title: "Seguro de Caminhões", slug: "seguro-caminhoes" },
  { title: "Seguro de Cargas", slug: "seguro-cargas" },
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
  const [servicosOpen, setServicosOpen] = useState(false);
  const [servicosTab, setServicosTab] = useState<"pessoal" | "empresas">("pessoal");
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
    setServicosOpen(false);
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
      <motion.header className="w-full z-[99] relative bg-white dropshadow-sm">
     
        
        <nav className="w-full mx-auto px-4 sm:px-18  py-4  bg-transparent ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          

            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-row md:items-center md:justify-between w-full">
              <a href="/" className="text-left">
                <img className='flex relative max-w-[40px]' src='/logo/maia-logo-color.png'/>
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
                            : ""
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
                  <img className='flex relative max-w-[64px] h-auto' src='/logo/maia-logo-color.png'/>
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
                
              </button>

          

          
            </div>
          </div>

          {/* Mobile Socials */}
          
        </nav>
      </motion.header>

      {/* Mobile Menu - Sidebar */}
     <AnimatePresence>
  {menuOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] md:hidden"
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Principal */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed left-0 top-0 bottom-0 w-full bg-white z-[101] md:hidden"
      >
        <div className="flex flex-col">

           {/* Tabs */}
        <div className="flex flex-col  border-gray-200 font-[NotoSansBlack] border border-b-1  py-4 gap-4 px-4 bg-[#f5f5f5]">

        <div className="flex flex-row gap-2 justify-start items-center">

      <button
        onClick={() => setMenuOpen(false)}
        >
          <span className="text-[#0c3141] text-base font-[NotoSansBlack] flex items-center gap-2">
            <ArrowLeft size={16} /> Menu
          </span>
          
        </button>
              <img src="/logo/favicon-maia.png" className="w-4 h-4"/>
                </div>
                  <div className="flex flex-row gap-2">
                  <a
                    href='/blog'
                    className=
                      "flex-1 px-4 py-2 justify-center items-center max-h-max text-sm tracking-tight bg-[#e84620]/70 text-[#f5f5f5] transition   max-w-max rounded-md font-[NotoSansBold]">
                    
                    Blog
                  </a>
                     <a
                    href='/Contato'
                    className=
                      "flex-1 px-4 py-2 justify-center items-center max-h-max text-sm tracking-tight bg-[#e84620]/70 text-[#f5f5f5]  transition   max-w-max rounded-md font-[NotoSansBold]">
                    
                    Contato
                  </a>

    
          </div>
          
        </div>

          {/* SEGUROS (abre submenu) */}
          <button
            onClick={() => setServicosOpen(true)}
            className="w-full px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]"
          >
            <span className="text-black  ">
              Serviços
            </span>
            <span className="text-gray-400 ">›</span>
          </button>

    
          <a
            href="/investimentos"
            className="px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-black  ">
              Investimentos
            </span>
            <span className="text-gray-400 ">›</span>
          </a>

          {/* BANK */}
          <a
            href="/missao"
            className="px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-black  ">
              Missão
            </span>
            <span className="text-gray-400 ">›</span>
          </a>

        

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

{/* SUBMENU SEGUROS */}
<AnimatePresence>
  {servicosOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[102] md:hidden "
        onClick={() => setServicosOpen(false)}
      />

      {/* Submenu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed left-0 top-0 bottom-0 w-full bg-white z-[104] md:hidden overflow-y-auto font-[NotoSansBold]"
      >


        {/* Tabs */}
        <div className="flex flex-col  border-gray-200 font-[NotoSansBlack] border border-b-1  py-4 gap-4 px-4 bg-[#f5f5f5]">

        <div className="flex flex-row gap-2 justify-start items-center">

        <button
        onClick={() => setServicosOpen(false)}
        >
          <span className="text-[#0c3141] text-base font-[NotoSansBlack] flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar
          </span>
          
        </button>
              <img src="/logo/favicon-maia.png" className="w-4 h-4"/>
                </div>
                  <div className="flex flex-row gap-2">
                  <button
                    onClick={() => setServicosTab("pessoal")}
                    className={clsx(
                      "flex-1 px-4 py-3 text-xs uppercase transition border  max-w-max rounded-full",
                      servicosTab === "pessoal"
                        ? "border-[#e84620] text-[#e84620] "
                        : " border-[#c2c0c0] text-gray-500 hover:text-gray-700"
                    )}
                  >
                    Para Você
                  </button>

          <button
            onClick={() => setServicosTab("empresas")}
            className={clsx(
               "flex-1 px-4 py-3 text-xs uppercase transition border max-w-max rounded-full",
              servicosTab === "empresas"
                ? "border-[#e84620] text-[#e84620]"
                : "border-[#c2c0c0] text-gray-500 hover:text-gray-700"
            )}
          >
            Para Empresas
          </button>
          </div>
          
        </div>

        {/* Conteúdo */}
        <div className="p-2 flex flex-col gap-2">
          {(servicosTab === "pessoal"
            ? SERVICOS_PESSOAL
            : SERVICOS_EMPRESAS
          ).map((servico, idx) => (
            <a
              key={idx}
              href={`/seguros/${servico.slug}`}
              className="px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => {
                setServicosOpen(false);
                setMenuOpen(false);
              }}
            >
              {servico.title}
            </a>
          ))}
        </div>

      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
};

export default HeaderComponent;
