import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TitleComponent from "../UI/TitleComponent";
import AccordionItem from "../UI/AccordionItem";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ResumeContainer = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col bg-[#000000] items-center justify-center sm:justify-start w-full h-48 sm:hidden">
      <div className="flex flex-col gap-12 sm:justify-start items-center p-2">
        <AccordionItem>
          <motion.div
            className="relative scale-98 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <motion.p
              className="text-white font-[HaasRegular] tracking-wide text-xs leading-5 z-20 max-w-96 text-left scale-85 sm:max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              {t('terms.intro')}
            </motion.p>
          </motion.div>
        </AccordionItem>
      </div>

      {/* Linha de separação */}
      <div className="w-full flex justify-start mt-8">
        <motion.hr 
          initial={{width: 0}}
          animate={{width: '40%'}}
          viewport={{ once: false }}
          className="border-t border-white" 
        />
      </div>
    </section>
  );
};

export default ResumeContainer;