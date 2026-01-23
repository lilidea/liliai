"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight } from 'lucide-react';

const Cta1 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  return (
    <section className="py-24" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Hemen Başlamaya Hazır Mısınız?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
           Binlerce mutlu müşterimiz gibi siz de işinizi dijitale taşıyın ve büyümeye başlayın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="px-8 py-4 bg-white text-black rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Ücretsiz Dene <ArrowRight size={20} />
           </button>
           <button className="px-8 py-4 bg-black/20 text-white rounded-full font-bold hover:bg-black/30 transition-all">
              Demo Talep Et
           </button>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
