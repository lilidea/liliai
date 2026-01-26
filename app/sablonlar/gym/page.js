
"use client";
import React from 'react';
import Header1 from '@/components/headers/Header1';
import Hero3 from '@/components/heroes/Hero3';
import About2 from '@/components/abouts/About2';
import Pricing1 from '@/components/pricing/Pricing1';
import Gallery1 from '@/components/gallery/Gallery1';
import Team3 from '@/components/team/Team3';
import Footer1 from '@/components/footers/Footer1';

import { SiteContext } from '@/app/context/SiteContext';
import { getImagesForSector } from '@/utils/imageManager';

export default function GymTemplate() {
  const visuals = getImagesForSector('event_gym');
  
  const gymData = {
    companyName: "IronFit Gym",
    aboutText: "Sınırlarını zorla. En yeni ekipmanlar, profesyonel eğitmenler ve motive edici atmosferimizle hedeflerine ulaş.",
    primaryColor: "#dc2626", // Red 600
    secondaryColor: "#171717", // Neutral 900
    pages: ["Programlar", "Üyelik", "Eğitmenler", "İletişim"],
    heroImage: visuals.hero[0],
    generatedContent: {
        hero: { title: "Daha Güçlü Bir Sen", subtitle: "IronFit ile potansiyelini açığa çıkar." },
        pricing: { title: "Üyelik Paketleri", description: "Sana en uygun planı seç ve hemen başla." },
        gallery: { title: "Salonumuz", description: "Modern ekipmanlar ve ferah çalışma alanları." }
    },
    // Mock selection
    selectedComponents: { header: 'header1', hero: 'hero3', about: 'about2', pricing: 'pricing1', gallery: 'gallery1', team: 'team3', footer: 'footer1' },
    sector: 'event_gym'
  };

  const contextValue = {
    siteData: gymData,
    isLoading: false,
    updateSiteData: () => {},
  };

  return (
    <SiteContext.Provider value={contextValue}>
      <div className="font-sans text-gray-900 bg-white">
        <Header1 />
        <Hero3 /> 
        <About2 />
        <Gallery1 />
        <Pricing1 />
        <Team3 />
        <Footer1 />
      </div>
    </SiteContext.Provider>
  );
}
