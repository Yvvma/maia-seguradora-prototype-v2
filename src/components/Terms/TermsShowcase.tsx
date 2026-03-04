import TermsContainer from "./TermsContainer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TermsShowcase = () => {
  const { t } = useTranslation();

  const terms = t('terms', { returnObjects: true });

  // Cria um array dos termos para iterar, mantendo ordem:
  const termsList = [
    { title: terms.copyright.title, text: terms.copyright.text },
    { title: terms.usage.title, text: `${terms.usage.text} ${terms.usage.not_allowed}` },
    { title: terms.privacy.title, text: terms.privacy.text },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0c0c0c] py-8 px-4 sm:px-0">
      
      {termsList.map(({ title, text }, index) => (
        <TermsContainer
          key={index}
          title={title}
          text={text}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default TermsShowcase;
