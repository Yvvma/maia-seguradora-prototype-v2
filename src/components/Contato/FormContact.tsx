import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Instagram, Youtube, X, Mail } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    marketingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"success" | "error" | "consent_error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { name, email, marketingConsent } = formData;

    if (!name || !email) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!marketingConsent) {
      setSubmitStatus("consent_error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", marketingConsent: false });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" w-full flex relative flex-col p-8 h-[800px] justify-center items-center bg-white">

    <div className="bg-[black]/80 flex flex-col gap-2 relative px-4 rounded-xl border-[#e84620] border justify-center items-center">
         <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6 }}
                       className="text-center "
                     >
                       <h2 className="text-xl font-[MMC] text-white py-4 tracking-tighter max-w-[256px]">
                         {t('trabalhe.form')}
                       </h2>
                      
                </motion.div>
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto flex flex-col gap-5 text-white text-center py-4 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Name */}
      <label className="flex flex-col gap-1 text-xs tracking-wide font-[MotoyaCedarW4] text-left">
        {t("contato.nome")}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-transparent border border-white/40 text-white text-center px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
      </label>

      {/* Email */}
      <label className="flex flex-col gap-1 text-xs tracking-wide font-[MotoyaCedarW4] text-left">
        E-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-transparent border border-white/40 text-white text-center px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
      </label>

      {/* Consent */}
      <label className="flex items-start justify-center gap-3 text-xs tracking-wide font-[MotoyaCedarW4] mt-2 cursor-pointer select-none text-center">
        <input
          type="checkbox"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
          className="w-12 h-5 mt-0.5 appearance-none border-2 border-white bg-transparent checked:bg-white transition text-left"
        />
        <span className='text-left'>
          {t("form_consent.checkbox_text_part1")}{" "}
          <a
            href="/terms-and-privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            {t("form_consent.privacy_policy_link")}
          </a>{" "}
          {t("form_consent.checkbox_text_part2")}
        </span>
      </label>

      {/* Button + status */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <motion.button
          type="submit"
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          disabled={isSubmitting}
          className={clsx(
            "bg-white text-black px-6 py-2 rounded-sm text-xs uppercase font-[MotoyaCedarW8] transition",
            isSubmitting && "opacity-60 cursor-not-allowed"
          )}
        >
          {isSubmitting ? t("form_sending_status") : t("contato.enviar")}
        </motion.button>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "text-xs font-[MotoyaCedarW4] px-3 py-1 rounded border",
                submitStatus === "success"
                  ? "border-green-400 text-green-400"
                  : "border-red-400 text-red-400"
              )}
            >
              {submitStatus === "success"
                ? t("form_success_message")
                : submitStatus === "consent_error"
                ? t("form_consent.required_message")
                : t("form_error_message")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
    </div>

    <div>
         <div className=" flex justify-center py-2">
                      <div className="flex flex-row gap-4 items-center text-white">
                        <a
                          href="https://www.instagram.com/maia_corretora_seguros/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          <Instagram size={24} />
                        </a>
                        <a
                          href="https://wa.me/62983303000"
                          target="_blank"
                          rel="noopener noreferrer "
                          className="invert hover:text-gray-400"
                        >
                          <img src='/socials/whatsapp.png' alt="X Icon" className="max-w-[24px] " />
                        </a>
                         <a
                          href="mailto:contato@maiacorretoraseguros.com.br"
                          target="_blank"
                          rel="noopener noreferrer "
                          className=" hover:text-gray-400"
                        >
                          <Mail size={24}/>
                        </a>
                      
                      </div>
                    </div>
    </div>
    </section>
  );
};

export default ContactForm;
