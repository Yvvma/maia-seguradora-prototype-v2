import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

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
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'consent_error' | null>(null);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", marketingConsent: false });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col gap-4 text-white font-[HaasThin] uppercase py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <label className="flex flex-col gap-1 text-xs tracking-wide font-[HaasLight]">
        {t("contato.nome")}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-transparent border-b border-white/40 text-white px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
      </label>

      <label className="flex flex-col gap-1 text-xs tracking-wide font-[HaasLight]">
        E-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-transparent border-b border-white/40 text-white px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
      </label>

      <label className="flex items-start gap-2 text-xs tracking-wide font-[HaasLight] mt-1 cursor-pointer select-none">
        <input
          type="checkbox"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
          className="w-5 h-5 mt-0.5 appearance-none border-2 border-white bg-transparent px-2 checked:bg-white checked:border-white transition"
        />
        <span>
          {t('form_consent.checkbox_text_part1')}{' '}
          <a
            href="/terms-and-privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            {t('form_consent.privacy_policy_link')}
          </a>{' '}
          {t('form_consent.checkbox_text_part2')}
        </span>
      </label>

      <div className="w-full flex justify-center items-center">
        <div className="max-w-sm flex flex-col items-center w-full">
          <motion.button
            type="submit"
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            className={clsx(
              "bg-white text-black px-4 py-2 rounded-sm font-medium hover:bg-gray-200 transition text-xs uppercase mt-4",
              isSubmitting && "opacity-60 cursor-not-allowed"
            )}
            disabled={isSubmitting}
          >
            <p className="font-[HaasLight] uppercase">
              {isSubmitting ? t('form_sending_status') : t('contato.enviar')}
            </p>
          </motion.button>

          <AnimatePresence>
            {submitStatus && (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className={clsx(
                  "text-xs text-center font-[HaasLight] px-3 py-1 rounded mt-3",
                  submitStatus === 'success'
                    ? "bg-green-600/20 text-green-400 border border-green-500"
                    : "bg-red-600/20 text-red-400 border border-red-500"
                )}
              >
                {submitStatus === 'success'
                  ? t('form_success_message')
                  : submitStatus === 'consent_error'
                    ? t('form_consent.required_message')
                    : t('form_error_message')}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
