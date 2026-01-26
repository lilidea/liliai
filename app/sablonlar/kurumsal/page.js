"use client";
import React from 'react';
import Header4 from '@/components/headers/Header4';
import Hero1 from '@/components/heroes/Hero1';
import About3 from '@/components/abouts/About3';
import Services2 from '@/components/services/Services2';
import Team2 from '@/components/team/Team2';
import Contact3 from '@/components/contact/Contact3';
import Footer2 from '@/components/footers/Footer2';

import { SiteContext } from '@/app/context/SiteContext';

import { getImagesForSector } from '@/utils/imageManager';

export default function CorporateTemplate() {
  const visuals = getImagesForSector('const_company');

  // Mock Data for Corporate Template
  const corporateData = {
    companyName: "Nexus Holding",
    aboutText: "30 yıllık tecrübemizle inşaat, enerji ve lojistik sektörlerinde küresel çözümler üretiyoruz.",
    primaryColor: "#0f172a", // Slate 900
    secondaryColor: "#334155", // Slate 700
    pages: ["Kurumsal", "Faaliyet Alanları", "Yatırımcı İlişkileri", "İletişim"],
    heroImage: visuals.hero[0],
    generatedContent: {
        hero: { title: "Geleceği İnşa Ediyoruz", subtitle: "Sürdürülebilir projeler ve güvenilir ortaklıklar." },
        about: { title: "Vizyonumuz", description: "Dünya standartlarında hizmet anlayışı." },
        services: { title: "Faaliyet Alanlarımız", description: "Enerjiden lojistiğe geniş yelpaze." }
    },
    selectedComponents: { header: 'header4', hero: 'hero1', about: 'about3', services: 'services2', team: 'team2', contact: 'contact3', footer: 'footer2' },
    sector: 'const_company'
  };

  const contextValue = {
    siteData: corporateData,
    isLoading: false,
    updateSiteData: () => {},
  };

  return (
    <SiteContext.Provider value={contextValue}>
      <div className="font-sans text-gray-900 bg-white">
        <Header4 />
        <Hero1 />
        <About3 />
        <Services2 />
        <Team2 />
        <Contact3 />
        <Footer2 />
      </div>
    </SiteContext.Provider>
  );
}
