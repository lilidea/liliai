"use client";
import React, { useRef } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <h2 className="text-4xl font-bold mb-2">Projeler</h2>
           <p className="text-gray-400">Sürükleyerek keşfedin.</p>
        </div>
        <div className="flex gap-4">
           <button onClick={() => scroll('left')} className="p-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors">
              <ArrowLeft size={20} />
           </button>
           <button onClick={() => scroll('right')} className="p-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors">
              <ArrowRight size={20} />
           </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((p) => (
           <div key={p} className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] bg-gray-800 rounded-2xl overflow-hidden relative group">
              <img 
                 src={`https://source.unsplash.com/random/800x600/?${encodeURIComponent('website ' + p)}`}
                 onError={(e) => e.target.src=`https://placehold.co/800x600/333/fff?text=Project+${p}`}
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <h3 className="text-3xl font-bold mb-2">Proje Başlığı {p}</h3>
                 <p className="text-gray-300">Web Tasarım, 2024</p>
              </div>
           </div>
        ))}
      </div>
    </section>
  );
};

export default Projects3;
