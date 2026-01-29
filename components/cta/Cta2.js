"use client";
import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Check } from 'lucide-react';
import { getImagesForSector } from '@/utils/imageManager';

const Cta2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const ctaImage = useMemo(() => {
    const images = getImagesForSector(siteData.sector);
    return images.hero?.[0] || images.about?.[0] || '/images/placeholder-cta.jpg';
  }, [siteData.sector]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center gap-12">
           
           <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                 İşinizi Büyütmek İçin <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Her Şey Hazır</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                 Gelişmiş analitik araçları, SEO optimizasyonu ve 7/24 destek hizmeti ile yanınızdayız.
              </p>
              
              <ul className="space-y-3 mb-10">
                 {["Kredi kartı gerekmez", "14 gün ücretsiz deneme", "İstediğin zaman iptal et"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                       <Check size={20} className="text-green-500" />
                       {item}
                    </li>
                 ))}
              </ul>

              <button 
                 className="px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all w-full md:w-auto text-center"
                 style={{ backgroundColor: primaryColor }}
              >
                 Şimdi Hesap Oluştur
              </button>
           </div>

           <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border-4 border-gray-900">
                 <img 
                    src={ctaImage}
                    alt="Dashboard"
                    className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Cta2;
