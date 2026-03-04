import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface TermsProps {
  title: string;
  img: string;
  text: string;
  reverse?: boolean;
}

const TermsContainer = ({
  title,
  img,
  text,
  reverse = false,
}: TermsProps) => {
  return (
    <section className="flex flex-col bg-[#0c0c0c] items-center justify-center w-full sm:py-8 sm:px-0  sm:max-h-124">
      <div
        className={`flex flex-col ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } gap-4 max-w-6xl items-center w-full`}
      >
        
        {/* Content on the right */}
        <div className="w-full sm:w-1/2 max-w-xs flex flex-col text-center items-center justify-center sm:text-left scale-80">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{
              backgroundColor: "white",
              color: "#0c0c0c",
              borderColor: "white",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="relative flex flex-col justify-center items-center text-center w-full mt-2 text-white text-xs sm:text-md font-[HaasBold] px-2 py-1 border cursor-pointer uppercase"
          >
            {title}
          </motion.div>

          {/* Description text */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="mt-6 text-white text-sm sm:text-base max-w-80 sm:max-w-md text-left"
          >
            {text}
          </motion.p>
        </div>
      </div>

      {/* Separator line */}
      <div
        className={`w-full flex mt-12 ${
          reverse ? "justify-end" : "justify-start"
        }`}
      >
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          viewport={{ once: false }}
          className="border-t border-white"
        />
      </div>
    </section>
  );
};

export default TermsContainer;
