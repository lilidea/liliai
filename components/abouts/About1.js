"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Sparkles } from 'lucide-react';

const About1 = () => {
  const { siteData } = useSite();
  const { aboutText, primaryColor, generatedContent } = siteData;
  const content = generatedContent?.about || {};

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center justify-center gap-2">
           <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-yellow-500"><Sparkles size={20} /></span>
           {content.title || "Hakkımızda"}
           <span className="block h-1 w-20 mx-auto mt-4 rounded-full" style={{ backgroundColor: primaryColor }} />
        </h2>
        <p className="text-xl text-gray-700 leading-loose">
          {content.text || aboutText || "2024 yılında kurulan şirketimiz, yenilikçi çözümlerle müşterilerine değer katmayı hedeflemektedir. Profesyonel ekibimiz ve sektördeki deneyimimizle her zaman en iyisini sunmak için çalışıyoruz."}
        </p>
      </div>
    </section>
  );
};

export default About1;
