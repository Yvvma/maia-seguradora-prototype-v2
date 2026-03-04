import { useTranslation } from "react-i18next";

export default function BlogHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative  max-w-5xl flex-row flex gap-4 justify-left items-center  mb-4">
      <img src="/logo/favicon-maia.png" className="w-10 md:w-10" />
      <h1 className="text-black font-[MMC] text-4xl md:text-4xl">
        Blog
      </h1>
     
    </div>
  );
}
