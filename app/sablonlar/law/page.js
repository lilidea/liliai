
"use client";
import React from 'react';
import Header4 from '@/components/headers/Header4';
import Hero2 from '@/components/heroes/Hero2';
import About1 from '@/components/abouts/About1';
import Legal1 from '@/components/legal/Legal1';
import Team1 from '@/components/team/Team1';
import Footer2 from '@/components/footers/Footer2';

import { SiteContext } from '@/app/context/SiteContext';
import { getImagesForSector } from '@/utils/imageManager';

export default function LawTemplate() {
  const visuals = getImagesForSector('pro_law');
  
  const lawData = {
    companyName: "Adalet Hukuk Bürosu",
    aboutText: "20 yılı aşkın tecrübemizle ceza, ticaret ve aile hukuku alanlarında müvekkillerimize en doğru hukuki desteği sunuyoruz.",
    primaryColor: "#1e1b4b", // Indigo 950
    secondaryColor: "#334155", // Slate 700
    pages: ["Hakkımızda", "Uzmanlık Alanları", "Ekibimiz", "İletişim"],
    heroImage: visuals.hero[0],
    generatedContent: {
        legal: { title: "Uzmanlık Alanlarımız", description: "Ceza Hukuku, Ticaret Hukuku, Aile Hukuku ve Bilişim Hukuku alanlarında profesyonel hizmet." },
        team: { title: "Avukatlarımız", description: "Alanında uzman, dinamik ve tecrübeli kadromuz." }
    },
    // Mock selection
    selectedComponents: { header: 'header4', hero: 'hero2', about: 'about1', legal: 'legal1', team: 'team1', footer: 'footer2' },
    sector: 'pro_law'
  };

  const contextValue = {
    siteData: lawData,
    isLoading: false,
    updateSiteData: () => {},
  };

  return (
    <SiteContext.Provider value={contextValue}>
      <div className="font-sans text-gray-900 bg-white">
        <Header4 />
        <Hero2 /> 
        <About1 />
        <Legal1 />
        <Team1 />
        <Footer2 />
      </div>
    </SiteContext.Provider>
  );
}
