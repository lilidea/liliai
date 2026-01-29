"use client";
import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight } from 'lucide-react';
import { getImagesForSector } from '@/utils/imageManager';

const Blog2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const blogImages = useMemo(() => {
    const images = getImagesForSector(siteData.sector);
    return images.blog || images.hero || [];
  }, [siteData.sector]);

  const posts = [1, 2, 3];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl font-bold text-gray-900">Son Yazılar</h2>
           <a href="#" className="font-semibold hover:underline" style={{ color: primaryColor }}>Tümünü Gör</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                 <div className="relative overflow-hidden rounded-xl mb-4 aspect-[16/9]">
                    <img 
                      src={blogImages[i % blogImages.length] || `/images/placeholder-blog.jpg`}
                      alt={`Blog post ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                       Teknoloji
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-xs text-gray-400 font-medium">12 Ocak 2024 • 5 dk okuma</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                       Yapay Zeka Destekli Tasarımın Geleceği
                    </h3>
                    <p className="text-gray-500 line-clamp-2 text-sm">
                       Tasarım dünyasında devrim yaratan yeni araçlar ve yöntemler hakkında bilmeniz gereken her şey.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold pt-2" style={{ color: primaryColor }}>
                       Devamını Oku <ArrowRight size={16} />
                    </div>
                 </div>
              </article>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Blog2;
