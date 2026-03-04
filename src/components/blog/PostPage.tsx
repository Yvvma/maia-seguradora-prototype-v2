import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { Instagram, Globe } from "lucide-react";


export default function PostPage({ post }) {
  const { t } = useTranslation();

  return (
    <div className="relative  max-w-4xl mx-auto p-4 pt-16">
      <img src={post.data.cover} className="w-full rounded-xl" />

    <div className="flex flex-col gap-2 py-8">
      <h1 className="text-2xl font-[MMC] ">
        {t(post.data.title)}
      </h1>

      <p className="text-lg text-black/80 font-[NotoSansLight]">
        {t(post.data.description)}
      </p>

        <div className="flex flex-row gap-2">
            <p className="text-black font-[NotoSansRegular] text-sm">
            {t('blog.por')} {post.data.por}
          </p>
           <p className="text-black font-[NotoSansLight] text-sm">
            {post.data.data}
          </p>
          </div>

          </div>

        <article className="prose prose-lg max-w-none font-[NotoSansLight] text-black [&_p]:mb-6">
       <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="font-[NotoSansBold] uppercase bg-[#0A1F7A]  max-w-max px-2 text-white sm:text-2xl  mb-6 text-lg"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-[NotoSansBold] text-xl mt-8 mb-4"
                {...props}
              />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>

      </article>


    <div className="flex flex-row gap-4 mt-8">
        <a 
          target="_blank"
          href="https://www.instagram.com/maiaseguros"
          className="bg-[#0A1F7A] text-white px-4 py-2 rounded-full font-[NotoSansRegular] text-sm hover:bg-[#e84620] transition-colors"
        >
          Instagram
        </a>
        
        <a 
          target="_blank"
          href="https://www.maiaseguros.com.br"
          className="bg-[#e84620] text-white px-4 py-2 rounded-full font-[NotoSansRegular] text-sm hover:bg-[#0A1F7A] transition-colors"
        >
          Website
        </a>
      </div>

    </div>
  );  
}
