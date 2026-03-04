'use client';

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ImageContainer = () => {
    const { t } = useTranslation();
  return (
    <section className="hidden md:flex flex-row w-full bg-[#0c0c0c]   items-end gap-8 justify-center p-8 pt-32  bg-[length:auto_900px] [background-position:-80px_0px]  bg-[url('https://res.cloudinary.com/dmgypxge0/image/upload/v1749505622/wide-nicolas-cabaneco_eqmas2.jpg')]"
    >
        <div className="flex h-160">
            {/* Fading edges */}

<div className="pointer-events-none absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-[#0c0c0c] to-transparent" />
<div className="pointer-events-none absolute top-0 left-0 h-full w-50 z-10 bg-gradient-to-r from-[#0c0c0c] to-transparent " />
    
     <motion.div

    className="w-full flex justify-end items-start -translate-x-66 -translate-y-35 flex-col h-screen bg-[#0c0c0c] p-21 mr-24"
     style={{background: 'linear-gradient(to right, rgba(0,0,0,0.9) 95%, transparent 100%)'
  }}
    >
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-[#0c0c0c] to-transparent " />

        
        <div className="  z-0 -translate-y-64 ">
            <div className="flex flex-col sm:justify-start items-start">
                <motion.p
                className="text-white font-[HaasMedium] uppercase tracking-tight text-6xl leading-16 z-20  text-left scale-85 max-w-xl -translate-y-16 -translate-x-4 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                >
                {t('terms.title')}
                </motion.p>
            
        </div>
        
            <motion.p
                className="text-white font-[HaasRegular] tracking-base text-md leading-5 z-20 max-w-96 text-start scale-85 sm:max-w-xl -translate-y-20 -translate-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                >
                {t('terms.intro')}
                </motion.p>

      </div>
       
      </motion.div> 

      <motion.div
    initial={{opacity:0, x:32}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.5}}
    
    className="w-full flex items-end">
      </motion.div>
      </div>
    </section>
    
  );
};

export default ImageContainer;