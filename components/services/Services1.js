"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight, Box, Layers, Zap, Shield, BarChart, Globe } from 'lucide-react';

const Services1 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const services = [
    { title: "Dijital Dönüşüm", icon: <Globe size={24}/>, desc: "İş süreçlerinizi dijitalleştirerek verimliliğinizi artırıyoruz." },
    { title: "Kreatif Tasarım", icon: <Layers size={24}/>, desc: "Markanız için akılda kalıcı ve etkileyici tasarımlar hazırlıyoruz." },
    { title: "Yazılım Çözümleri", icon: <Box size={24}/>, desc: "İhtiyacınıza özel, ölçeklenebilir yazılım mimarileri geliştiriyoruz." },
    { title: "Stratejik Danışmanlık", icon: <BarChart size={24}/>, desc: "Büyüme hedeflerinize ulaşmanız için stratejik yol haritaları sunuyoruz." },
    { title: "Siber Güvenlik", icon: <Shield size={24}/>, desc: "Verilerinizi ve sistemlerinizi en güncel tehditlere karşı koruyoruz." },
    { title: "Yüksek Performans", icon: <Zap size={24}/>, desc: "Sistemlerinizin maksimum performansta çalışmasını sağlıyoruz." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl font-black text-gray-900 tracking-tight">Hizmetlerimiz</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">Sizin için sunduğumuz profesyonel çözümlerle işinizi bir üst seviyeye taşıyın.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                 <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform"
                    style={{ backgroundColor: primaryColor }}
                 >
                    {s.icon}
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                 <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                 <a href="#" className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all" style={{ color: primaryColor }}>
                    Detaylı Bilgi <ArrowRight size={16}/>
                 </a>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
