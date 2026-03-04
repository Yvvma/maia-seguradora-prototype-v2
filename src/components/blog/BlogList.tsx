// BlogList.tsx
import { useState, useEffect, use } from "react";
import BlogCard from "./BlogCard";
import {useTranslation} from "react-i18next";

export default function BlogList({ posts}) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Lê o parâmetro da URL no cliente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("search")?.toLowerCase() || "");
    setIsLoading(false);
  }, []);

  const {t} = useTranslation();
 const orderedPosts = [...posts].sort((a, b) => {
  return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
});

   const filtered = orderedPosts.filter((post) => {
  if (!search) return true;

  const data = post.data;
  const lower = search.toLowerCase();

  return (
    data.title.toLowerCase().includes(lower) ||
    data.description.toLowerCase().includes(lower) ||
    data.type.toLowerCase().includes(lower) ||
    data.por.toLowerCase().includes(lower)
  );
});


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-500 justify-center items-center">
          <img src='/loading/loading.gif' className="max-w-14"/>
        </div>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500 text-lg font-[AGSemi]">{t('blog.invalido')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 h-full">
      {filtered.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.data.title}
          description={post.data.description}
          image={post.data.cover}
          slug={post.slug}
          type={post.data.type}
          por={post.data.por}
          data={post.data.data}
          socials={post.data.socials}
        />
      ))}
    </div>
  );
}