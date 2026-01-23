"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const FAQ3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const faqs = [
    { q: "İade politikanız nedir?", a: "Hizmet tesliminden önce tam iade garantisi sunuyoruz." },
    { q: "Hangi teknolojileri kullanıyorsunuz?", a: "React, Next.js ve Node.js tabanlı modern teknolojiler kullanıyoruz." },
    { q: "Bakım anlaşması zorunlu mu?", a: "Hayır, ancak sitenizin güncel ve güvenli kalması için öneriyoruz." },
    { q: "E-ticaret sitesi kuruyor musunuz?", a: "Evet, her ölçekteki işletme için e-ticaret çözümlerimiz mevcuttur." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
         <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 pl-6" style={{ borderColor: primaryColor }}>
            Sıkça Sorulan<br/>Sorular
         </h2>

         <div className="space-y-8">
            {faqs.map((f, i) => (
               <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-100 pb-8 last:border-0">
                  <div className="md:w-1/3">
                     <h3 className="font-bold text-lg text-gray-900">{f.q}</h3>
                  </div>
                  <div className="md:w-2/3">
                     <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQ3;
