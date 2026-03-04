import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

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
   {title: "Previdência/Seguro em U$",slug:"previdencia-seguro-dollar"}
];

const SERVICOS_EMPRESAS = [
  { title: "Seguro Empresarial", slug: "seguro-empresarial" },
  { title: "Seguro de Caminhões", slug: "seguro-caminhoes" },
  { title: "Seguro de Cargas", slug: "seguro-cargas" },
  { title: "Seguro Ambiental", slug: "seguro-ambiental" },
  { title: "Seguro Condominial", slug: "seguro-condominial" },
  { title: "Seguro de Equipamentos", slug: "seguro-equipamentos" },
  { title: "Seguro Agrícola", slug: "seguro-agricola" },
  { title: "Responsabilidade Civil", slug: "seguro-responsabilidade-civil" },
  { title: "Home Equity e Financiamentos", slug: "home-equity-e-financiamentos" },
];

const LANGUAGES = [
  { code: "PT", fullName: "PT-BR" },
  { code: "EN", fullName: "EN-US" },
];

const topLineVariants = {
  open: { rotate: 45, translateY: 6 },
  closed: { rotate: 0, translateY: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, translateY: -6 },
  closed: { rotate: 0, translateY: 0 },
};

const HeaderComponent = () => {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const [servicosTab, setServicosTab] = useState<"pessoal" | "empresas">("pessoal");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Desktop mega-menu state
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [megaTab, setMegaTab] = useState<"pessoal" | "empresas">("pessoal");
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState(
    i18n.language.toUpperCase().includes("PT")
      ? "PT"
      : i18n.language.toUpperCase().includes("JP")
      ? "JP"
      : "EN"
  );

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    if (megaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [megaMenuOpen]);

  return (
    <>
      <motion.header
        className={clsx(
          "w-full z-[99] sticky top-0 transition-all duration-300",
          scrolled ? "bg-[#f5f5f5] shadow-md" : "bg-black"
        )}
      >
        <nav className="w-full mx-auto px-4 sm:px-18 py-4 bg-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* ── DESKTOP LAYOUT ── */}
            <div className="hidden md:flex md:items-center md:justify-between w-full" ref={megaMenuRef}>

              {/* Logo */}
              <a href="/" className="text-left">
                <img
                  className="max-w-[80px] transition-all duration-300"
                  src={scrolled ? "/logo/maia-logo-color.png" : "/logo/maia-logo-white.png"}
                  alt="Maia"
                />
              </a>

              {/* Nav Items */}
              <div className="flex items-center gap-10 relative font-[NotoSansBold] tracking-tight">
                {MENU_ITEMS.map((item) => {
                  if (item.key === "servicos") {
                    return (
                      <div key={item.key} className="relative">
                        <button
                          onClick={() => setMegaMenuOpen((prev) => !prev)}
                          className={clsx(
                            "uppercase text-sm tracking-wide transition flex items-center gap-1",
                            scrolled ? "text-black hover:text-[#e84620]" : "text-white hover:text-[#e84620]",
                            megaMenuOpen && "text-[#e84620]"
                          )}
                        >
                          Serviços
                          <motion.span
                            animate={{ rotate: megaMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs leading-none"
                          >
                            ▾
                          </motion.span>
                        </button>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.key}
                      href={item.path}
                      className={clsx(
                        "uppercase text-sm tracking-wide transition",
                        scrolled ? "text-black hover:text-[#e84620]" : "text-white hover:text-[#e84620]"
                      )}
                    >
                      {t(`menu.${item.key}`)}
                    </a>
                  );
                })}

              
              </div>

              {/* ── DESKTOP MEGA MENU OVERLAY ── */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute left-0 right-0 top-full w-full bg-[#111] text-white z-[150] shadow-2xl -translate-y-2"
                    style={{ position: "fixed", top: scrolled ? "70px" : "72px" }}
                  >
                    <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-0">

                      {/* Col 1 — Release / Descrição */}
                      <div className="pr-10">
                        <p className="text-xs uppercase tracking-widest text-[#e84620] mb-3 font-semibold">
                          Soluções completas
                        </p>
                        <h2 className="text-2xl font-bold leading-snug mb-4">
                          Proteção para você<br />e para o seu negócio
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Oferecemos seguros, previdência e consórcios pensados para cada fase da sua vida — e soluções robustas para proteger empresas de todos os portes e segmentos.
                        </p>
                       
                      </div>

                      {/* Divider */}
                      <div className="bg-white/10 mx-8" />

                      {/* Col 2 — Para Você */}
                      <div className="px-8">
                        {/* Tab Header */}
                        <div className="flex items-center gap-2 mb-5">
                          <span
                            onClick={() => setMegaTab("pessoal")}
                            className={clsx(
                              "text-xs uppercase tracking-widest cursor-pointer pb-1 transition border-b-2",
                              megaTab === "pessoal"
                                ? "border-[#e84620] text-white"
                                : "border-transparent text-gray-500 hover:text-gray-300"
                            )}
                          >
                            Para Você
                          </span>
                          <span className="text-gray-600">|</span>
                          <span
                            onClick={() => setMegaTab("empresas")}
                            className={clsx(
                              "text-xs uppercase tracking-widest cursor-pointer pb-1 transition border-b-2",
                              megaTab === "empresas"
                                ? "border-[#e84620] text-white"
                                : "border-transparent text-gray-500 hover:text-gray-300"
                            )}
                          >
                            Para Empresas
                          </span>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={megaTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.15 }}
                            className="flex flex-col gap-1"
                          >
                            {(megaTab === "pessoal" ? SERVICOS_PESSOAL : SERVICOS_EMPRESAS).map((s, i) => (
                              <a
                                key={i}
                                href={`/servicos/${s.slug}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-2 group"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#e84620] opacity-0 group-hover:opacity-100 transition-opacity" />
                                {s.title}
                              </a>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Divider */}
                      <div className="bg-white/10 mx-8" />

                      {/* Col 3 — Destaque / CTA */}
                      <div className="pl-8 flex flex-col justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Destaque</p>
                          <div className="bg-[#e84620]/10 border border-[#e84620]/30 rounded p-5">
                            <p className="text-sm font-semibold text-white mb-2">Previdência Privada</p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              Planeje seu futuro com VGBL e PGBL. Conte com nossa assessoria especializada para escolher o melhor plano para o seu perfil.
                            </p>
                            <a
                              href="/servicos/previdencia-privada"
                              onClick={() => setMegaMenuOpen(false)}
                              className="inline-block mt-4 text-xs text-[#e84620] hover:underline"
                            >
                              Saiba mais →
                            </a>
                          </div>
                        </div>

                        <a
                          href="/contato"
                          onClick={() => setMegaMenuOpen(false)}
                          className="mt-6 text-center text-xs uppercase tracking-widest bg-[#e84620] text-white px-4 py-3 hover:bg-white hover:text-[#e84620] transition"
                        >
                          Fale com um consultor
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── MOBILE LAYOUT ── */}
            <div className="flex md:hidden justify-between items-center w-full gap-2">
              <a href="/" className="text-left -translate-y-1 sm:hidden block">
                <img
                  className="flex relative max-w-[64px] h-auto transition-all duration-300"
                  src={scrolled ? "/logo/maia-logo-color.png" : "/logo/maia-logo-white.png"}
                  alt="Maia"
                />
              </a>

              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none justify-center items-center flex flex-col relative"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  animate={menuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-6 flex gap-1 flex-col justify-center items-center"
                >
                  <motion.span
                    className={clsx("w-full h-0.5 rounded-full transition-colors duration-300", scrolled ? "bg-black" : "bg-white")}
                    variants={topLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className={clsx("w-full h-0.5 rounded-full transition-colors duration-300", scrolled ? "bg-black" : "bg-white")}
                    variants={middleLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className={clsx("w-full h-0.5 rounded-full transition-colors duration-300", scrolled ? "bg-black" : "bg-white")}
                    variants={bottomLineVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ── MOBILE MENU SIDEBAR ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed left-0 top-0 bottom-0 w-full bg-white z-[101] md:hidden"
            >
              <div className="flex flex-col">
                <div className="flex flex-col border-gray-200 font-[NotoSansBlack] border border-b-1 py-4 gap-4 px-4 bg-[#f5f5f5]">
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <button onClick={() => setMenuOpen(false)}>
                      <span className="text-[#0c3141] text-base font-[NotoSansBlack] flex items-center gap-2">
                        <ArrowLeft size={16} /> Menu
                      </span>
                    </button>
                    <img src="/logo/favicon-maia.png" className="w-4 h-4" />
                  </div>
                  <div className="flex flex-row gap-2">
                    <a href="/blog" className="px-4 py-2 justify-center items-center text-sm tracking-tight bg-[#e84620] text-white transition max-w-max rounded-md font-[NotoSansBold] hover:bg-[#0A1F7A]">
                      Blog
                    </a>
                    <a href="/contato" className="px-4 py-2 justify-center items-center text-sm tracking-tight bg-[#e84620] text-white transition max-w-max rounded-md font-[NotoSansBold] hover:bg-[#0A1F7A]">
                      Contato
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setServicosOpen(true)}
                  className="w-full px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]"
                >
                  <span className="text-black">Serviços</span>
                  <span className="text-gray-400">›</span>
                </button>

                <a href="/investimentos" className="px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]" onClick={() => setMenuOpen(false)}>
                  <span className="text-black">Investimentos</span>
                  <span className="text-gray-400">›</span>
                </a>

                <a href="/missao" className="px-4 py-4 border-b border-gray-200 flex items-center justify-between hover:bg-gray-100 transition font-[NotoSansBold]" onClick={() => setMenuOpen(false)}>
                  <span className="text-black">Missão</span>
                  <span className="text-gray-400">›</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── MOBILE SUBMENU SERVIÇOS ── */}
      <AnimatePresence>
        {servicosOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[102] md:hidden"
              onClick={() => setServicosOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed left-0 top-0 bottom-0 w-full bg-white z-[104] md:hidden overflow-y-auto font-[NotoSansBold]"
            >
              <div className="flex flex-col border-gray-200 font-[NotoSansBlack] border border-b-1 py-4 gap-4 px-4 bg-[#f5f5f5]">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <button onClick={() => setServicosOpen(false)}>
                    <span className="text-[#0c3141] text-base font-[NotoSansBlack] flex items-center gap-2">
                      <ArrowLeft size={16} /> Voltar
                    </span>
                  </button>
                  <img src="/logo/favicon-maia.png" className="w-4 h-4" />
                </div>
                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => setServicosTab("pessoal")}
                    className={clsx(
                      "flex-1 px-4 py-3 text-xs uppercase transition border max-w-max rounded-full",
                      servicosTab === "pessoal" ? "border-[#e84620] text-[#e84620]" : "border-[#c2c0c0] text-gray-500 hover:text-gray-700"
                    )}
                  >
                    Para Você
                  </button>
                  <button
                    onClick={() => setServicosTab("empresas")}
                    className={clsx(
                      "flex-1 px-4 py-3 text-xs uppercase transition border max-w-max rounded-full",
                      servicosTab === "empresas" ? "border-[#e84620] text-[#e84620]" : "border-[#c2c0c0] text-gray-500 hover:text-gray-700"
                    )}
                  >
                    Para Empresas
                  </button>
                </div>
              </div>

              <div className="p-2 flex flex-col gap-2">
                {(servicosTab === "pessoal" ? SERVICOS_PESSOAL : SERVICOS_EMPRESAS).map((servico, idx) => (
                  <a
                    key={idx}
                    href={`/servicos/${servico.slug}`}
                    className="px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded transition"
                    onClick={() => { setServicosOpen(false); setMenuOpen(false); }}
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