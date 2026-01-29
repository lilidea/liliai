"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const About4 = () => {
  const { siteData } = useSite();
  const { primaryColor, companyName, aboutText } = siteData;

  const stats = [
    { label: "Tamamlanan Proje", value: "1,200+" },
    { label: "Uzman Kadro", value: "45+" },
    { label: "Küresel Ofis", value: "12" },
    { label: "Yıllık Deneyim", value: "15+" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Rakamlarla Biz</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {aboutText || "Sektördeki liderliğimizi ve güvenilirliğimizi kanıtlayan verilerle her geçen gün büyüyoruz."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-black mb-2" style={{ color: primaryColor }}>{stat.value}</div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About4;
