"use client";
import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowUpRight } from 'lucide-react';
import { getImagesForSector } from '@/utils/imageManager';

const Projects1 = () => {
   const { siteData } = useSite();
   const { primaryColor } = siteData;

   const projectImages = useMemo(() => {
      const images = getImagesForSector(siteData.sector);
      return [...(images.gallery || []), ...(images.hero || [])];
   }, [siteData.sector]);

   const content = siteData.generatedContent?.projects || {};
   const projects = content.items || [
      { title: "Modern Konsept 1", desc: "UI/UX Tasarım, Geliştirme" },
      { title: "Modern Konsept 2", desc: "UI/UX Tasarım, Geliştirme" },
      { title: "Modern Konsept 3", desc: "UI/UX Tasarım, Geliştirme" },
      { title: "Modern Konsept 4", desc: "UI/UX Tasarım, Geliştirme" }
   ];

   return (
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="space-y-4">
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Portfolyo</span>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tight">{content.title || "Son Çalışmalarımız"}</h2>
               </div>
               <button className="px-6 py-3 rounded-full border-2 font-bold hover:bg-black hover:text-white hover:border-black transition" style={{ borderColor: 'currentColor', color: 'black' }}>
                  Tümünü Gör
               </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {projects.map((p, i) => (
                  <div key={p} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100">
                     <img
                        src={projectImages[i % projectImages.length] || `/images/placeholder-project.jpg`}
                        alt={`Proje ${p}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100">
                        <div className="flex justify-end">
                           <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                              <ArrowUpRight size={20} />
                           </div>
                        </div>
                        <div>
                           <h3 className="text-white text-2xl font-bold">{p.title}</h3>
                           <p className="text-white/80">{p.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects1;
