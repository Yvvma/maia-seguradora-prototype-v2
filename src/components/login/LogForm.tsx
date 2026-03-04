import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const LoginForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { email, password } = formData;

    if (!email || !password) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // opcional: redirecionar ou atualizar sessão
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
    <>
    <h1 className="font-[AppliedBold] text-md sm:text-xl uppercase text-white">Log In</h1>
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col gap-4 text-white font-[AppliedThin] uppercase py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <label className="flex flex-col gap-1 text-xs tracking-wide font-[AppliedRegular]">
        {t("login.email")}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-transparent border-b border-white/40 text-white px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
      </label>

      <label className="flex flex-col gap-1 text-xs tracking-wide font-[AppliedRegular]">
        {t("login.password")}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="bg-transparent border-b border-white/40 text-white px-4 py-2 focus:outline-none focus:border-white transition-all"
        />
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
            <p className="font-[AppliedRegular] uppercase">
              {isSubmitting ? t('form_sending_status') : t('login.submit')}
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
                  "text-xs text-center font-[AppliedRegular] px-3 py-1 rounded mt-3",
                  submitStatus === 'success'
                    ? "bg-green-600/20 text-green-400 border border-green-500"
                    : "bg-red-600/20 text-red-400 border border-red-500"
                )}
              >
                {submitStatus === 'success'
                  ? t('login.success_message')
                  : t('login.error_message')}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.form>
    </>
  );
};

export default LoginForm;
