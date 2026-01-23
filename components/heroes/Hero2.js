"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ChevronRight } from 'lucide-react';

const Hero2 = () => {
  const { siteData } = useSite();
  const { companyName, aboutText, primaryColor } = siteData;

  return (
    <section className="py-24 text-white text-center relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
      {siteData.heroImage && (
         <>
           <div className="absolute inset-0 z-0">
             <img src={siteData.heroImage} className="w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Background"/>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
         </>
      )}
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          {companyName || "Geleceği Şekillendir"}
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-12 font-light">
          {aboutText || "Teknoloji ve tasarımı birleştirerek markanız için eşsiz deneyimler yaratıyoruz."}
        </p>
        <button className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
          Hizmetlerimiz <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero2;
