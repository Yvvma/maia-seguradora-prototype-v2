import { motion } from "framer-motion";
import { t } from "i18next";
import React from "react";
import {CirclePlus} from 'lucide-react'

interface Release {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

interface ReleaseContainerProps {
  release?: Release;
}

const ReleaseContainer: React.FC<ReleaseContainerProps> = ({}) => {


  
  return (
    <div className="w-full flex flex-col justify-center items-center  bg-[#0c3141]">
        <div className="bg-[#e84620] h-1 w-full"/>
        <div className="flex px-8 py-4">
      <motion.div 
        className="max-w-4xl w-full    rounded-lg p-4  justify-center items-center gap-4 flex-col flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex flex-col items-center text-left justify-center "
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.5, 
            ease: "easeOut" 
          }}
        >
         
          <p className="text-xl text-white   font-[MMC] tracking-tight">
            {t('home.release')}
          </p>

        </motion.div>

        <div className="w-full flex justify-end items-end">
          <a 
          href='#'
          className="text-white p-2 flex justify-end items-end gap-2 border max-w-max">
            <p className="text-sm text-white   font-[MMC] tracking-tight">{t('home.see-more')}</p>
          <CirclePlus size={20}/>
          </a>
        </div>
      </motion.div>
      </div>
      <div className="bg-[#e84620] h-1 w-full"/>
    </div>
  );
};

export default ReleaseContainer;
