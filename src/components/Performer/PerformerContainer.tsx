import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const PerformerContainer = () => {
  const { t } = useTranslation();

  const projects = [
    {
      artist: t("dancer.works.olympikus.title"),
      title: t("dancer.works.olympikus.person"),
      video: '/performer/OLYMPIKUS_ONLINE_CREDITOS_qxoxqd.mp4',
      description: t("dancer.works.olympikus.desc"),
      director: t("dancer.works.olympikus.director"),
      youtube: "https://www.youtube.com/watch?v=VZWZDSR1peQ"
    },
    {
      artist: t("dancer.works.junior.title"),
      title: t("dancer.works.junior.person"),
      video: '/performer/junior-seus-planos.mp4',
      description: t("dancer.works.junior.desc"),
      director: t("dancer.works.junior.director"),
      youtube: "https://www.youtube.com/watch?v=3g_8MH7TCBY"
    },
    {
      artist: t("dancer.works.sonho-bom.title"),
      title: t("dancer.works.sonho-bom.person"),
      video: "/performer/SONHO_BOM_-_MARINA_SENA_DANCE_VIDEO_oqgcms.mp4",
      description: t("dancer.works.sonho-bom.desc"),
      director: t("dancer.works.sonho-bom.director"),
      youtube: "https://www.youtube.com/watch?v=DWHMHSkrBFo"
    },
    {
      artist: t("dancer.works.selena.title"),
      title: t("dancer.works.selena.person"),
      video: "/performer/DJ_Snake_Selena_Gomez_-_Selfish_Love_Official_Video_cpf334.mp4",
      description: t("dancer.works.selena.desc"),
      director: t("dancer.works.selena.director"),
      youtube: "https://www.youtube.com/watch?v=gQG_2O9Bu6c"
    },
    {
      artist: t("dancer.works.tahiti.title"),
      title: t("dancer.works.tahiti.person"),
      video: "/performer/lost-in-the-sound.mp4",
      description: t("dancer.works.tahiti.desc"),
      director: t("dancer.works.tahiti.director"),
      youtube: "https://youtu.be/BNk_pqPRS1E?feature=shared"
    },
    {
      artist: t("coreographer.works.anitta.title"),
      title: t("coreographer.works.anitta.person"),
      video: "/performer/live/funk-generation_kslupb.mp4",
      description: t("coreographer.works.anitta.desc"),
      director: t("coreographer.works.anitta.director"),
      youtube: "https://youtu.be/iaXt5shHFL8?feature=shared"
    },
    {
      artist: t("dancer.works.pedro.title"),
      title: t("dancer.works.pedro.person"),
      video: "/performer/pedro-sampaio-pedrin.mp4",
      description: t("dancer.works.pedro.desc"),
      director: t("dancer.works.pedro.director"),
      youtube: "https://youtu.be/iaXt5shHFL8?feature=shared"
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#111111] py-12">
      <div className="flex flex-col items-center gap-2 max-w-max">
        <p className="text-white font-[AppliedBold] shadow-sm tracking-tight text-center text-2xl uppercase leading-5 sm:leading-6 z-20 whitespace-pre-line">
          {t("dancer.title")}
        </p>

        {/* Animated line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="block h-[2px] w-full bg-white origin-center"
        />
      </div>
                  
      <p className="shadow-sm text-white font-[AppliedRegular] tracking-tight max-w-4xl text-left text-base sm:text-lg leading-6 sm:leading-6 z-20 whitespace-pre-line p-8">
        {t('dancer.text')}
      </p>

      <div className="flex flex-col w-full gap-12">
        {projects.map((p, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 px-4 items-center lg:px-12"
            >
              {/* Texto Principal */}
              <motion.div
                className={`text-white flex flex-col justify-center ${
                  isEven 
                    ? "order-1 text-right items-end" 
                    : "order-3 text-left items-start"
                }`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm sm:text-lg font-[AppliedMedium] tracking-tight">
                  {p.artist}
                </p>
                <h3 className="text-md sm:text-3xl font-[AppliedBold] tracking-tight mt-1">
                  {p.title}
                </h3>
              </motion.div>

              {/* Vídeo sempre no centro */}
              <div className="flex justify-center order-2">
                <video
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] object-cover rounded-xl shadow-xl border border-white/20"
                />
              </div>

              {/* Descrição + Diretor + Botão */}
              <motion.div
                className={`flex flex-col  text-white ${
                  isEven 
                    ? "order-3 text-left items-start" 
                    : "order-1 text-right items-end"
                }`}
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-sm sm:text-lg font-[AppliedRegular] tracking-tight">
                  {p.description}
                </p>
                <p className="text-sm sm:text-md font-[AppliedMedium] tracking-tight mt-2">
                  {p.director}
                </p>
                <motion.a
                  href={p.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg mt-4 inline-flex items-center gap-1 px-2 py-1 rounded-full border border-white/40 hover:bg-white/20 transition font-[AppliedBold]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Youtube size={12} />
                  {t("watch_now")}
                </motion.a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PerformerContainer;