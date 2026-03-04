import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAgenda } from "../../hooks/useAgenda";

const SHEET_ID = "1kOh1eta7hneTzVE04V_lTBm1d3DF_rVoGSxDhStVoHw";

export default function AgendaContainer() {
  const { t } = useTranslation();
  const { data, loading } = useAgenda(SHEET_ID);

  return (
    <div className="w-full flex flex-col gap-6 py-8 px-6 sm:px-16 md:px-32 bg-black">
      {/* Title */}
      <h2 className="text-2xl font-[AppliedBold] text-white">
        {t("agenda.title")}
      </h2>

      {/* Loading */}
      {loading && (
        <p className="text-lg text-white/50 font-[AppliedRegular]">
          {t("loading")}
        </p>
      )}

      {/* No events */}
      {!loading && data.length === 0 && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            text-sm sm:text-base
            font-[AppliedRegular]
            text-white/60
            max-w-3xl
          "
        >
          {t("agenda.not_available")}
        </motion.p>
      )}

      {/* Agenda list */}
      <div className="flex flex-col gap-4 text-white">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="
              flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-3
              border border-white/10 bg-[#131313]/40
              rounded-xl
              p-4
            "
          >
            {/* Info */}
            <div className="flex flex-col gap-1">
              <span className="text-sm sm:text-lg  text-white/50 font-[AppliedRegular]">
                {item.date}
              </span>
              <span className="text-lg  font-[AppliedBold]">
                {item.name}
              </span>
              <span className="text-sm sm:text-lg  text-white/60 font-[AppliedRegular]">
                {item.location}
              </span>
            </div>

<div className="flex items-center justify-center w-full">
            {/* Button */}
            {item.link && (
              <motion.a
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              whileTap={{scale:0.9}}
              transition={{ duration: 1}}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                max-w-max
                  inline-flex items-center justify-center
                  h-9 px-4
                  rounded-full
                  border border-white
                  text-md font-[AppliedBold]
                  transition
                  hover:bg-white hover:text-white
                "
              >
                {t("agenda.cta")}
              </motion.a>
            )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
