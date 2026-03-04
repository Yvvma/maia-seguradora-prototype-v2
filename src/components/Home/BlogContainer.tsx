import { motion } from "framer-motion";
import React from "react";
import { Clock } from "lucide-react";

const BLOG_ARTICLES = [
  {
    id: "seguro-vida-importancia",
    title: "Por que o Seguro de Vida é Essencial para sua Família",
    description: "Entenda como o seguro de vida pode proteger o futuro financeiro dos seus entes queridos e garantir tranquilidade em momentos difíceis.",
    imgSrc: "/photos/seguros/seguro-main/seguro-main.png",
    readTime: "5 min",
    date: "15 Mar 2024"
  },
  {
    id: "blindagem-patrimonial-guia",
    title: "Blindagem Patrimonial: Proteja seu Patrimônio de Forma Legal",
    description: "Descubra as principais estratégias de blindagem patrimonial e como proteger seus bens contra riscos jurídicos e financeiros.",
    imgSrc: "/photos/seguros/blindagem/blindagem-patrimonial.png",
    readTime: "7 min",
    date: "10 Mar 2024"
  }
];

const BlogContainer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center -translate-y-12 items-center py-8 bg-white rounded-xl mt-8">
      <div className="w-full max-w-6xl mx-auto ">
        <div className="flex justify-between items-center mb-6 px-8">
          <h2 className="text-lg font-[MMC] text-[#0A1F7A]">
            Destaques do Blog
          </h2>
          <a 
            href="/blog" 
            className="text-sm font-[MMC] text-[#0A1F7A] hover:underline"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.a
              key={article.id}
              href={`/blog/${article.id}`}
              className="group bg-white  rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={article.imgSrc}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-[MMC] font-bold tracking-tight text-gray-900 mb-2 group-hover:text-[#0A1F7A] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm font-[NotoSansLight] mb-4 line-clamp-2">
                  {article.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                  
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
