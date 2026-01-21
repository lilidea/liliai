"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight, Info } from 'lucide-react';

const Hero1 = () => {
  const { siteData } = useSite();
  const { companyName, aboutText, primaryColor } = siteData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            İşiniz İçin <span style={{ color: primaryColor }}>En İyisi</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {aboutText || "Firmanızın vizyonunu dijital dünyaya taşıyoruz. Modern tasarım ve güçlü altyapı ile rakiplerinizin önüne geçin."}
          </p>
          <div className="flex gap-4">
            <button 
              className="px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              Hemen Başla <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 rounded-lg bg-white text-gray-800 font-semibold border border-gray-200 hover:bg-gray-50 transition flex items-center gap-2">
              <Info size={20} /> Daha Fazla
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg aspect-square bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center text-gray-400">
             (Görsel Alanı)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
