"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Smartphone, Cloud, Code, Database, Lock, Search } from 'lucide-react';

const Services2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const services = [
    { title: "Mobil Uygulama", icon: <Smartphone size={32}/>, desc: "iOS ve Android dünyasında yerinizi alın." },
    { title: "Bulut Bilişim", icon: <Cloud size={32}/>, desc: "Ölçeklenebilir ve güvenli bulut altyapıları." },
    { title: "Özel Yazılım", icon: <Code size={32}/>, desc: "İhtiyacınıza tam uyan kodlama çözümleri." },
    { title: "Veri Analizi", icon: <Database size={32}/>, desc: "Verilerinizi anlamlı bilgilere dönüştürün." },
    { title: "Güvenlik Testi", icon: <Lock size={32}/>, desc: "Sistem açıklarını bulup kapatıyoruz." },
    { title: "SEO Optimizasyon", icon: <Search size={32}/>, desc: "Arama motorlarında en üst sıralarda olun." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Hizmet Alanlarımız</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">Neler Yapıyoruz?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
           {services.map((s, i) => (
             <div key={i} className="group p-10 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors">
               <div className="mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" style={{ color: "inherit" }}>
                   {/* Icon wrapper to allow hover color override via inline style if needed, but using CSS group hover for simplicity */}
                   <span className="group-hover:text-[var(--primary)]" style={{ '--primary': primaryColor }}>
                     {s.icon}
                   </span>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
               <p className="text-gray-500 leading-relaxed">{s.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
