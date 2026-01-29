"use client";
import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { getImagesForSector } from '@/utils/imageManager';

const Contact2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const bgImage = useMemo(() => {
    const images = getImagesForSector(siteData.sector);
    return images.hero?.[0] || images.about?.[0] || '/images/placeholder-contact.jpg';
  }, [siteData.sector]);

  return (
    <section className="py-24 relative flex items-center justify-center min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src={bgImage}
            alt="Arka plan"
            className="w-full h-full object-cover brightness-[0.25]"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
         <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Bize Ulaşın</h2>
            <p className="text-gray-300 text-center mb-8">Sorularınız için buradayız.</p>

            <form className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">E-Mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
               </div>
               <button 
                  className="w-full py-4 rounded-lg font-bold text-white mt-4 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  style={{ backgroundColor: primaryColor }}
               >
                  Gönder
               </button>
               <p className="text-center text-xs text-gray-500 mt-4">
                  *Kişisel verileriniz gizlilik politikamız uyarınca korunmaktadır.
               </p>
            </form>
         </div>
      </div>
    </section>
  );
};

export default Contact2;
