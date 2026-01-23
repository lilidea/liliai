"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const sidebarPosts = [
    { title: "SEO Stratejileri 2024", date: "10 Oca" },
    { title: "Growth Hacking Nedir?", date: "08 Oca" },
    { title: "React 19 Yenilikleri", date: "05 Oca" },
    { title: "Minimalist Tasarım İlkeleri", date: "01 Oca" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">İçerik Atölyesi</h2>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Featured Post */}
           <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group">
              <img 
                 src="https://source.unsplash.com/random/1200x800/?workspace"
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onError={(e) => e.target.src='https://placehold.co/1200x800/333/fff?text=Featured'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                 <span className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                    Editörün Seçimi
                 </span>
                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Dijital Markanızı Nasıl Bir Üst Seviyeye Taşırsınız?
                 </h3>
                 <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <img src="https://i.pravatar.cc/150?u=editor" className="w-8 h-8 rounded-full border border-white/30"/>
                    <span>Zeynep Yılmaz</span>
                    <span>•</span>
                    <span>14 Ocak 2024</span>
                 </div>
              </div>
           </div>

           {/* Sidebar List */}
           <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col">
              <h4 className="font-bold text-gray-400 text-sm uppercase tracking-widest mb-6">Popüler İçerikler</h4>
              <div className="flex-1 space-y-6">
                 {sidebarPosts.map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                       <span className="text-xs text-gray-400 block mb-1">{post.date}</span>
                       <h5 className="text-lg font-bold text-gray-800 group-hover:text-[var(--primary)] transition-colors" style={{ '--primary': primaryColor }}>
                          {post.title}
                       </h5>
                    </div>
                 ))}
              </div>
              <button 
                className="w-full py-3 rounded-xl border-2 font-bold transition-all hover:bg-black hover:text-white hover:border-black mt-6"
                style={{ borderColor: 'black' }}
              >
                Tüm Arşivi Gör
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Blog3;
