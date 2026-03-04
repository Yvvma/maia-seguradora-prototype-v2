import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

type ResumeBlockProps = {
  text: string;
  backgroundColor?: string;
};

const ResumeBlock = ({
  text,
  backgroundColor = "#0c0c0c",
}: ResumeBlockProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full py-16"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col  gap-12 items-center justify-between">
        {/* TEXTOS */}
        <div className="w-full  max-w-md flex flex-col justify-center items-center gap-8 px-8">
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-white font-[HaasRegular] tracking-normal text-sm leading-5 z-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              {text}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Linha de separação */}
      <div className="w-full flex justify-end mt-12">
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "40%" }}
          viewport={{ once: false }}
          className="border-t border-white"
        />
      </div>
    </section>
  );
};

export default ResumeBlock;