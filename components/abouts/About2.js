"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

export default function About2() {
  const { siteData } = useSite();
  const { primaryColor, companyName, aboutText } = siteData;

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden relative" id="about">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/50 skew-x-12 transform origin-top translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-8">
             <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                Hakkımızda
             </div>
             <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                {companyName} <span style={{ color: primaryColor }}>Hikayesi.</span>
             </h2>
             <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>
                  {aboutText || `${companyName}, sektördeki yenilikçi yaklaşımıyla tanınan öncü bir kuruluştur. Müşterilerimize en iyi hizmeti sunmak için tutkuyla çalışıyoruz.`}
                </p>
                <p>
                  Vizyonumuz, teknolojiyi ve tasarımı bir araya getirerek unutulmaz dijital deneyimler yaratmaktır. Her projede mükemmelliği hedefleriz.
                </p>
             </div>
             <button 
                className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ backgroundColor: primaryColor }}
             >
                Daha Fazla Bilgi
             </button>
          </div>

          <div className="flex-1 w-full relative">
             <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10"></div>
                {/* Fallback Image or dynamic if we had it */}
                <img 
                    src={`https://placehold.co/800x800/171717/FFF?text=${companyName.charAt(0)}`} 
                    alt="About" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-2xl shadow-xl max-w-xs z-20 hidden md:block">
                <p className="font-bold text-lg mb-1">Müşteri Memnuniyeti</p>
                <div className="flex items-center gap-2 text-yellow-500">
                    {'★★★★★'}
                    <span className="text-neutral-400 text-sm ml-2 font-medium">5.0/5.0</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
