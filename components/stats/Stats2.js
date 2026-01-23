"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats2 = () => {
  const { siteData } = useSite();
  const { primaryColor, secondaryColor } = siteData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
           
           {/* Text Content */}
           <div className="md:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                 Rakamlarla <br/>
                 <span style={{ color: primaryColor }}>Başarı Hikayemiz</span>
              </h2>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                 Gücümüzü verilerden ve tecrübemizden alıyoruz. Her geçen gün büyüyen ailemizle sektöre yön vermeye devam ediyoruz.
              </p>

              <div className="grid grid-cols-2 gap-12">
                 <div>
                    <div className="text-4xl md:text-6xl font-black mb-2" style={{ color: secondaryColor }}>%98</div>
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Müşteri Memnuniyeti</div>
                 </div>
                 <div>
                    <div className="text-4xl md:text-6xl font-black mb-2 text-white">10X</div>
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Büyüme Hızı</div>
                 </div>
              </div>
           </div>

           {/* Visual Content */}
           <div className="md:w-1/2 relative min-h-[400px]">
              <img 
                 src="https://source.unsplash.com/random/800x800/?analytics,graph"
                 className="absolute inset-0 w-full h-full object-cover"
                 onError={(e) => e.target.src='https://placehold.co/800x800/111/444?text=Stats'}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/50"></div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Stats2;
