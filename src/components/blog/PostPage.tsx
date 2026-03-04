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
      <h1 className="text-2xl font-[AGSemi] ">
        {t(post.data.title)}
      </h1>

      <p className="text-lg text-black/80 font-[AGNormal]">
        {t(post.data.description)}
      </p>

        <div className="flex flex-row gap-2">
            <p className="text-black font-[AGSemi] text-sm">
            {t('blog.por')} {post.data.por}
          </p>
           <p className="text-black font-[AGNormal] text-sm">
            {post.data.data}
          </p>
          </div>

          </div>

        <article className="prose prose-lg max-w-none font-[AGNormal] text-black [&_p]:mb-6">
       <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="font-[AGRegular] uppercase bg-[#0072ff]  max-w-max px-2 text-white sm:text-2xl  mb-6 text-lg"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-[AGBlack] text-xl mt-8 mb-4"
                {...props}
              />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>

      </article>


    <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2"> 
            <h4 className="font-[AGBlack] text-white tracking-tight bg-[black]">
            {post.data.materiaLabel}:
          </h4>
            <a 
            target="_blank"
            href={post.data.materia}>
              <h4 className="font-[AGBlack] text-black tracking-tight text-sm">{post.data.brand}</h4>
            </a> 
          </div>

      <div className="flex flex-row gap-2">
        <h4 className="font-[AGBlack]  text-white tracking-tight bg-[black]">{t('blog.socials')}:</h4>
        <a 
        target="_blank"
        href={post.data.socials}>
          <h4 className="font-[AGBlack]  text-black tracking-tight text-sm">{post.data.insta}</h4>
        </a>
        
        
      </div>
      </div>

    </div>
  );  
}
