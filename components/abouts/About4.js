"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const About4 = () => {
  const { siteData } = useSite();
  const { primaryColor, aboutText } = siteData;

  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <span 
          className="inline-block py-1 px-3 rounded-md text-xs font-bold tracking-widest uppercase mb-6"
          style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
        >
          Biz Kimiz?
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Sınırları zorluyor, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
             mükemmeli hedefliyoruz.
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
          {aboutText || "Tutkumuz, teknolojiyi sanatla birleştirerek kullanıcılarınıza unutulmaz deneyimler yaşatmaktır. Her pikselde kalite, her satırda güven var."}
        </p>

        <div className="mt-12 flex justify-center gap-12">
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">2024</div>
             <div className="text-xs text-gray-500 uppercase tracking-widest">Kuruluş</div>
           </div>
           <div className="w-px bg-gray-800"></div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">Glob.</div>
             <div className="text-xs text-gray-500 uppercase tracking-widest">Vizyon</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
