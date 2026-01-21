"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight, Star } from 'lucide-react';

const Hero4 = () => {
  const { siteData } = useSite();
  const { companyName, aboutText, heroTitle, primaryColor, secondaryColor, accentColor } = siteData;

  return (
    <section className="bg-white text-gray-900 min-h-screen flex items-center py-20 border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="md:w-1/2 space-y-10">
               <div className="flex items-center gap-2 font-bold tracking-widest text-sm uppercase" style={{ color: accentColor || '#F59E0B' }}>
                  <Star size={16} fill="currentColor"/>
                  <span>Profesyonel Çözümler</span>
               </div>
               
               <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight text-gray-900">
                  {heroTitle || (
                    <>
                      {companyName || "LILIDEA"} <br/>
                      <span className="italic text-gray-400 font-sans text-5xl md:text-7xl">Creative Studio</span>
                    </>
                  )}
               </h1>

               <p className="text-gray-500 text-lg leading-relaxed border-l-4 pl-6" style={{ borderColor: primaryColor }}>
                  {aboutText || "Sınırları zorlayan tasarımlar ve akıllı çözümlerle markanızı geleceğe hazırlıyoruz. Dijitalin her alanında yanınızdayız."}
               </p>

               <button 
                 className="group px-10 py-5 text-white font-bold text-xl rounded-none transition flex items-center gap-4 hover:opacity-90 shadow-lg"
                 style={{ backgroundColor: primaryColor }}
               >
                 Projeleri İncele
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-8">
                  <div className="h-64 w-full rounded-2xl overflow-hidden relative group bg-gray-100 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: secondaryColor || primaryColor }}>1</div>
                      <div className="absolute bottom-4 left-4 font-bold text-gray-700">UI/UX Design</div>
                  </div>
                   <div className="h-48 w-full rounded-2xl overflow-hidden relative group bg-gray-50 flex items-center justify-center border-2" style={{ borderColor: primaryColor }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: primaryColor }}>2</div>
                      <div className="absolute bottom-4 left-4 font-bold text-gray-700">Branding</div>
                  </div>
               </div>
               <div className="space-y-4">
                   <div className="h-48 w-full rounded-2xl overflow-hidden relative group bg-gray-50 flex items-center justify-center border-2" style={{ borderColor: secondaryColor || primaryColor }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: secondaryColor || primaryColor }}>3</div>
                      <div className="absolute bottom-4 left-4 font-bold text-gray-700">Development</div>
                  </div>
                  <div className="h-64 w-full rounded-2xl overflow-hidden relative group bg-gray-100 flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: accentColor || primaryColor }}>4</div>
                      <div className="absolute bottom-4 left-4 font-bold text-gray-700">Marketing</div>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default Hero4;
