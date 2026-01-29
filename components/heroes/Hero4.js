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
                     <Star size={16} fill="currentColor" />
                     <span>Profesyonel Çözümler</span>
                  </div>

                  <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight text-gray-900">
                     {heroTitle || (
                        <>
                           {companyName || "LILIDEA"} <br />
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
                     <div className="h-64 w-full rounded-2xl overflow-hidden relative group shadow-xl">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>1</div>
                        </div>
                        <div className="absolute bottom-4 left-4 font-bold text-white drop-shadow-md">UI/UX Design</div>
                     </div>
                     <div className="h-48 w-full rounded-2xl overflow-hidden relative group shadow-xl">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: secondaryColor || primaryColor }}>2</div>
                        </div>
                        <div className="absolute bottom-4 left-4 font-bold text-white drop-shadow-md">Branding</div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-48 w-full rounded-2xl overflow-hidden relative group shadow-xl">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>3</div>
                        </div>
                        <div className="absolute bottom-4 left-4 font-bold text-white drop-shadow-md">Development</div>
                     </div>
                     <div className="h-64 w-full rounded-2xl overflow-hidden relative group shadow-xl">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: accentColor || primaryColor }}>4</div>
                        </div>
                        <div className="absolute bottom-4 left-4 font-bold text-white drop-shadow-md">Marketing</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Hero4;
