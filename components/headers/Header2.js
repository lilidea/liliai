"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Header2 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor, pages } = siteData;
  const menuItems = pages || ['Ana Sayfa', 'Hizmetler', 'Hakkımızda', 'İletişim'];
  const midPoint = Math.ceil(menuItems.length / 2);
  const leftMenu = menuItems.slice(0, midPoint);
  const rightMenu = menuItems.slice(midPoint);

  return (
    <header className="sticky top-0 z-[50] bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">

        <nav className="hidden md:flex space-x-6 order-2 md:order-1 mt-4 md:mt-0">
          {leftMenu.map(page => (
            <a key={page} href="#" className="text-gray-600 hover:text-gray-900 text-sm uppercase tracking-wider">{page}</a>
          ))}
        </nav>

        <div className="text-3xl font-serif font-black order-1 md:order-2" style={{ color: primaryColor }}>
          {companyName || "lil.ai"}
        </div>

        <nav className="hidden md:flex space-x-6 order-3 mt-4 md:mt-0">
          {rightMenu.map(page => (
            <a key={page} href="#" className="text-gray-600 hover:text-gray-900 text-sm uppercase tracking-wider">{page}</a>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Header2;
