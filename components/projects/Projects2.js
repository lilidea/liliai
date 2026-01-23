"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Plus } from 'lucide-react';

const Projects2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const projects = [
    { id: 1, title: "Finans App", category: "Mobil", height: "h-64" },
    { id: 2, title: "E-Ticaret", category: "Web", height: "h-96" },
    { id: 3, title: "Kurumsal Kimlik", category: "Branding", height: "h-64" },
    { id: 4, title: "Panel Tasarımı", category: "UI/UX", height: "h-80" },
    { id: 5, title: "Sosyal Medya", category: "Marketing", height: "h-64" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Seçkin Çalışmalar</h2>
           <p className="text-gray-500">Global markalar için ürettiğimiz dijital deneyimler.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {projects.map((p) => (
             <div key={p.id} className={`relative group rounded-2xl overflow-hidden break-inside-avoid bg-gray-100 ${p.height}`}>
                <img 
                   src={`https://source.unsplash.com/random/600x${p.height === "h-96" ? "800" : "600"}?${encodeURIComponent('design ' + p.category)}`}
                   onError={(e) => e.target.src=`https://placehold.co/600x${p.height === "h-96" ? "800" : "600"}/e5e7eb/black?text=${p.title}`}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6">
                   <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{p.title}</h3>
                   <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{p.category}</p>
                   <button 
                     className="mt-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform delay-150"
                     style={{ color: primaryColor }}
                   >
                     <Plus size={24} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
