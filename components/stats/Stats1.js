"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Users, Briefcase, Award, Globe } from 'lucide-react';

const Stats1 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const stats = [
    { label: "Mutlu Müşteri", value: "2.5k+", icon: Users },
    { label: "Tamamlanan Proje", value: "850+", icon: Briefcase },
    { label: "Ödüller", value: "15", icon: Award },
    { label: "Ülke", value: "12", icon: Globe },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
           {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                 <div 
                   className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 bg-gray-900 shadow-lg group-hover:scale-110 transition-transform"
                   style={{ backgroundColor: primaryColor }}
                 >
                    <s.icon size={32} />
                 </div>
                 <div className="text-4xl font-black text-gray-900 mb-1">{s.value}</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{s.label}</div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Stats1;
