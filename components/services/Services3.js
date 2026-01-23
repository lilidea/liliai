"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowUpRight } from 'lucide-react';

const Services3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const services = [
    { title: "Marka Kimliği", id: "01", desc: "Logo, kurumsal renkler ve görsel dil tasarımı." },
    { title: "Web Geliştirme", id: "02", desc: "Modern, hızlı ve SEO dostu web siteleri." },
    { title: "Dijital Pazarlama", id: "03", desc: "Sosyal medya yönetimi ve Google Ads kampanyaları." },
    { title: "Prodüksiyon", id: "04", desc: "Tanıtım filmleri ve profesyonel fotoğraf çekimleri." },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 opacity-50">Servisler</h2>

        <div className="space-y-4">
          {services.map((s, i) => (
            <div key={i} className="group border-b border-gray-800 pb-8 pt-4 hover:border-gray-600 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <span className="text-sm font-mono text-gray-500" style={{ color: primaryColor }}>{s.id}</span>
                <h3 className="text-2xl md:text-4xl font-bold group-hover:translate-x-2 transition-transform">
                  {s.title}
                </h3>
              </div>
              <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <p className="text-gray-400 max-w-xs">{s.desc}</p>
                 <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
