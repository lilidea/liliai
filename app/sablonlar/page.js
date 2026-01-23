"use client";
import React from 'react';
import Link from 'next/link';
import { Rocket, Briefcase, Palette } from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      id: "startup",
      title: "Startup & SaaS",
      desc: "Modern girişimler için yüksek dönüşüm odaklı tasarım. Fiyatlandırma ve özellikler ön planda.",
      icon: Rocket,
      color: "bg-gradient-to-br from-blue-600 to-blue-400",
      href: "/sablonlar/startup"
    },
    {
      id: "kurumsal",
      title: "Kurumsal Şirket",
      desc: "Güven ve profesyonellik yansıtan ciddi duruş. Hakkımızda ve Hizmetler odaklı.",
      icon: Briefcase,
      color: "bg-gradient-to-br from-slate-800 to-slate-600",
      href: "/sablonlar/kurumsal"
    },
    {
      id: "portfolyo",
      title: "Yaratıcı Portfolyo",
      desc: "Görsel ağırlıklı, minimal ve etkileyici. İşlerinizi sergilemek için ideal.",
      icon: Palette,
      color: "bg-gradient-to-br from-[#E69419] to-orange-400",
      href: "/sablonlar/portfolyo"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
         <h1 className="text-4xl font-black mb-4 text-gray-900">Hazır Şablonlar</h1>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Sıfırdan başlamak yerine profesyonelce hazırlanmış bu şablonları seçin ve düzenlemeye başlayın.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
         {templates.map((t) => (
           <Link key={t.id} href={t.href} className="group block h-full">
             <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-[#E69419]/30 transition-all duration-300 h-full flex flex-col relative">
                {/* Gradient Background for Icon Area */}
                <div className={`h-56 ${t.color} flex items-center justify-center relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                   <t.icon size={100} className="text-white opacity-10 absolute -bottom-6 -right-6 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"/>
                   <t.icon size={56} className="text-white relative z-10 drop-shadow-md group-hover:scale-110 transition-transform"/>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                   <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0073FF] transition-colors">{t.title}</h3>
                   <p className="text-gray-500 leading-relaxed mb-8 flex-1">{t.desc}</p>
                   
                   <span className="inline-flex items-center justify-center w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all bg-[#0073FF] group-hover:bg-[#E69419] group-hover:shadow-xl">
                      Şablonu İncele
                   </span>
                </div>
             </div>
           </Link>
         ))}
      </div>
    </div>
  );
}
