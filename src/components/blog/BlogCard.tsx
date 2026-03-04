
import { useTranslation } from "react-i18next";


export default function BlogCard({ title, description, image, slug, type, por, data, socials }) {
  const { t } = useTranslation();
  return (
    <a href={`/blog/${slug}`} className="group block">
      <div className=" rounded-xl bg-white/70 border border-white/10 transition-all duration-300 group:hover:scale-[1.02]">

      <div className="flex flex-row">

        <div className="flex flex-row bg-[#0072ff]">
            <h4 className="font-[AGBlack] px-2 text-white tracking-tight">{type}</h4>
        </div>

        <div className="h-[3px] bg-black w-full"/>
      </div>

      <div className="flex flex-col p-4">
          <h2 className="text-black font-[AGSemi] text-2xl mb-3">{title}</h2>
          <p className="text-black font-[AGNormal] line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-row gap-2">
            <p className="text-black font-[AGSemi] text-sm">
            {t('blog.por')} {por}
          </p>
           <p className="text-black font-[AGNormal] text-sm">
            {data}
          </p>
          </div>
        </div>
      
        <img src={image} className="w-full h-56 object-cover" />
      
      </div>
    </a>
  );
}
