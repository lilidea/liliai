"use client";
import React from 'react';
import Header2 from '@/components/headers/Header2';
import Hero3 from '@/components/heroes/Hero3';
import About4 from '@/components/abouts/About4';
import Projects2 from '@/components/projects/Projects2';
import Blog2 from '@/components/blog/Blog2';
import Contact2 from '@/components/contact/Contact2';
import Footer3 from '@/components/footers/Footer3';

import { SiteContext } from '@/app/context/SiteContext';

export default function PortfolioTemplate() {
  // Mock Data for Portfolio Template
  const portfolioData = {
    companyName: "Alex Design",
    aboutText: "Minimalist tasarımlar, maksimum etki. Markanızın hikayesini görsel bir şölene dönüştürüyorum.",
    primaryColor: "#000000", // Black
    secondaryColor: "#333333", // Dark Gray
    pages: ["İşler", "Hakkımda", "Günlük", "İletişim"],
    heroImage: "/images/portfolio_hero.png"
  };

  const contextValue = {
    siteData: portfolioData,
    isLoading: false,
    updateSiteData: () => {},
  };

  return (
    <SiteContext.Provider value={contextValue}>
      <div className="font-sans text-gray-900 bg-white">
        <Header2 />
        <Hero3 />
        <About4 />
        <Projects2 />
        <Blog2 />
        <Contact2 />
        <Footer3 />
      </div>
    </SiteContext.Provider>
  );
}
