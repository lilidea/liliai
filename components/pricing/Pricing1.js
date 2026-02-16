"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Check } from 'lucide-react';

const Pricing1 = () => {
   const { siteData } = useSite();
   const { primaryColor } = siteData;

   const content = siteData.generatedContent?.pricing || {};
   const plans = content.items || [
      { name: "Başlangıç", price: "29", features: ["Temel Özellikler", "1 Kullanıcı", "5 Proje", "E-posta Desteği"] },
      { name: "Pro", price: "59", popular: true, features: ["Tüm Başlangıç Özellikleri", "5 Kullanıcı", "Sınırsız Proje", "7/24 Öncelikli Destek", "Analitik Paneli"] },
      { name: "Kurumsal", price: "199", features: ["Tüm Pro Özellikleri", "Sınırsız Kullanıcı", "Özel Entegrasyon", "Dedicated Sunucu", "SLA Garantisi"] },
   ];

   return (
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.title || "Planlar ve Fiyatlandırma"}</h2>
               <p className="text-gray-500">{content.description || "İhtiyacınıza en uygun paketi seçin, hemen başlayın."}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {plans.map((p, i) => (
                  <div
                     key={i}
                     className={`relative bg-white rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 flex flex-col ${p.popular ? 'border-2 scale-105 shadow-lg z-10' : 'border-gray-100'}`}
                     style={p.popular ? { borderColor: primaryColor } : {}}
                  >
                     {p.popular && (
                        <div
                           className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold text-white tracking-widest uppercase"
                           style={{ backgroundColor: primaryColor }}
                        >
                           En Popüler
                        </div>
                     )}
                     <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-2">{p.name}</h3>
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl font-black text-gray-900">${p.price}</span>
                           <span className="text-gray-400">/ay</span>
                        </div>
                     </div>

                     <ul className="space-y-4 mb-8 flex-1">
                        {p.features.map((f, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                              <Check size={16} className="text-green-500 shrink-0" />
                              {f}
                           </li>
                        ))}
                     </ul>

                     <button
                        className={`w-full py-3 rounded-xl font-bold transition-all ${p.popular ? 'text-white shadow-lg hover:shadow-xl' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                        style={p.popular ? { backgroundColor: primaryColor } : {}}
                     >
                        Seç
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Pricing1;
