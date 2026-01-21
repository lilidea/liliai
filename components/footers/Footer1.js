"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer1 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
            {companyName || "Firma Adı"}
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            © {year} Tüm hakları saklıdır. <br className="md:hidden"/>
            <span className="hidden md:inline"> | </span>
            Powered by 
            <a href="https://lilidea.com" target="_blank" className="text-white hover:text-blue-400 transition ml-1 inline-flex items-center gap-1">
              <img src="/lilidea.svg" alt="Lilidea Logo" className="h-4 w-auto"/> lilidea.com
            </a>
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
