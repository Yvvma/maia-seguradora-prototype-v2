
import { useTranslation } from "react-i18next";

// Cores para cada tipo de tag
const TAG_COLORS = {
  'Notícia': 'bg-blue-600',
  'Educação Financeira': 'bg-green-600',
  'Seguros': 'bg-purple-600',
  'Planejamento': 'bg-orange-600',
  'Investimentos': 'bg-teal-600',
  'default': 'bg-gray-600'
};

export default function BlogCard({ title, description, image, slug, type, por, data, socials }) {
  const { t } = useTranslation();
  const tagColor = TAG_COLORS[type] || TAG_COLORS.default;
  
  return (
    <a href={`/blog/${slug}`} className="group block">
      <div className=" rounded-xl bg-white/70 border border-white/10 transition-all duration-300 group:hover:scale-[1.02]">

      <div className="flex flex-row">

        <div className={`flex flex-row ${tagColor}`}>
            <h4 className="font-[NotoSansBold] px-2 text-white tracking-tight">{type}</h4>
        </div>

        <div className="h-[3px] bg-black w-full"/>
      </div>

      <div className="flex flex-col p-4">
          <h2 className="text-black font-[MMC] text-2xl mb-3">{title}</h2>
          <p className="text-black font-[NotoSansLight] line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-row gap-2">
            <p className="text-black font-[NotoSansRegular] text-sm">
            {t('blog.por')} {por}
          </p>
           <p className="text-black font-[NotoSansLight] text-sm">
            {data}
          </p>
          </div>
        </div>
      
        <img src={image} className="w-full h-56 object-cover" />
      
      </div>
    </a>
  );
}
