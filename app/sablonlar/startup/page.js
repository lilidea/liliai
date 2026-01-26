"use client";
import React from 'react';
import Header5 from '@/components/headers/Header5';
import Hero2 from '@/components/heroes/Hero2';
import Stats1 from '@/components/stats/Stats1';
import Services3 from '@/components/services/Services3';
import Pricing3 from '@/components/pricing/Pricing3';
import Testimonials2 from '@/components/testimonials/Testimonials2';
import Cta2 from '@/components/cta/Cta2';
import Footer1 from '@/components/footers/Footer1';

import { SiteContext } from '@/app/context/SiteContext';

import { getImagesForSector } from '@/utils/imageManager';

export default function StartupTemplate() {
  const visuals = getImagesForSector('tech_software');

  // Mock Data for Startup Template
  const startupData = {
    companyName: "Nova SaaS",
    aboutText: "Yapay zeka destekli analiz platformu ile işletmenizin verilerini tam potansiyeline ulaştırın.",
    primaryColor: "#6366f1", // Indigo
    secondaryColor: "#4f46e5",
    pages: ["Ürün", "Çözümler", "Fiyatlandırma", "Giriş Yap"],
    heroImage: visuals.hero[0],
    generatedContent: {
        hero: { title: "Daha Akıllı Kararlar Alın", subtitle: "Verilerinizi anlamlandıran AI platformu." },
        services: { title: "Özellikler", description: "İhtiyacınız olan tüm araçlar tek bir yerde." },
        pricing: { title: "Esnek Planlar", description: "Büyümenize ayak uyduran fiyatlandırma." }
    },
    selectedComponents: { header: 'header5', hero: 'hero2', stats: 'stats1', services: 'services3', pricing: 'pricing3', testimonials: 'testimonials2', cta: 'cta2', footer: 'footer1' },
    sector: 'tech_software'
  };

  // Mock Context Value
  const contextValue = {
    siteData: startupData,
    isLoading: false,
    updateSiteData: () => {}, 
  };
  
  return (
    <SiteContext.Provider value={contextValue}>
      <div className="font-sans text-gray-900 bg-white">
        <div className="relative">
           <Header5 />
           <div className="pt-0">
              <Hero2 />
           </div>
        </div>
        <Stats1 />
        <Services3 />
        <div className="py-10"></div>
        <Pricing3 />
        <Testimonials2 />
        <Cta2 />
        <Footer1 />
      </div>
    </SiteContext.Provider>
  );
}

