"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Play, ArrowRight } from 'lucide-react';

const Hero3 = () => {
  const { siteData } = useSite();
  const { companyName, aboutText, heroTitle, primaryColor, secondaryColor, accentColor } = siteData;

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Background Shapes derived from Brand Colors */}
      <div 
        className="absolute top-0 right-0 w-2/3 h-full opacity-10 rounded-bl-[100px] -z-10 transform translate-x-1/4"
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-blob"
        style={{ backgroundColor: secondaryColor || primaryColor }}
      ></div>
      <div 
        className="absolute bottom-20 right-1/3 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ backgroundColor: accentColor || primaryColor }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
         <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-bold uppercase tracking-wider">
               Yenilikçi Çözümler
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
               {heroTitle ? (
                  <span>{heroTitle}</span>
               ) : (
                 <>
                   Geleceği <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}>
                     Şekillendiriyoruz.
                   </span>
                 </>
               )}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                {aboutText || "Markanızın dijital dünyadaki varlığını en üst seviyeye taşıyacak stratejiler ve tasarımlar geliştiriyoruz."}
            </p>
            
            <div className="flex gap-4">
                <button 
                  className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition flex items-center gap-2"
                  style={{ backgroundColor: primaryColor }}
                >
                   Keşfet <ArrowRight />
                </button>
                <button className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-900 hover:text-white hover:bg-gray-900 transition text-gray-900">
                    <Play size={20} fill="currentColor" />
                </button>
            </div>
         </div>

         <div className="relative hidden md:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
               <div className="aspect-[4/5] bg-neutral-900 flex items-center justify-center text-white overflow-hidden">
                  <img 
                    src={siteData.heroImage || "https://source.unsplash.com/random/800x1000/?abstract"}
                    className="w-full h-full object-cover"
                    alt="Hero Art"
                  />
               </div>
            </div>
            
             {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-8 border-white bg-neutral-100 z-20 flex items-center justify-center shadow-lg">
               <span className="text-2xl font-black text-gray-900">10+</span>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero3;
