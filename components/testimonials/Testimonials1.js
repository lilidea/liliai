"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Star } from 'lucide-react';

const Testimonials1 = () => {
   const { siteData } = useSite();
   const { primaryColor } = siteData;

   const content = siteData.generatedContent?.testimonials || {};
   const reviews = content.items || [
      { name: "Selin Y.", role: "Pazarlama Müdürü", text: "Beklentimizin çok üzerinde bir iş çıktı. Tasarım harika, iletişim süper." },
      { name: "Mert K.", role: "CEO, TechStart", text: "Hız ve profesyonellik konusunda rakipsizler. Kesinlikle tavsiye ediyorum." },
      { name: "Ayşe T.", role: "Butik Sahibi", text: "Satışlarım iki katına çıktı. E-ticaret altyapısı çok sağlam." },
   ];

   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title || "Müşterilerimiz Ne Diyor?"}</h2>
               <div className="w-20 h-1 rounded mx-auto" style={{ backgroundColor: primaryColor }}></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {reviews.map((r, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow relative">
                     <div className="flex text-yellow-500 mb-4 gap-1">
                        {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                     </div>
                     <p className="text-gray-600 mb-6 italic">"{r.text}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300 font-bold flex items-center justify-center text-gray-500 text-sm">
                           {r.name.charAt(0)}
                        </div>
                        <div>
                           <div className="font-bold text-gray-900">{r.name}</div>
                           <div className="text-xs text-xs text-gray-500">{r.role}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Testimonials1;
