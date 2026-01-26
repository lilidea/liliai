"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TemplatesLayout({ children }) {
  const pathname = usePathname();
  // TODO: Buraya kendi telefon numaranızı yazın (Başında + olmadan, 90...)
  const phoneNumber = "905555555555"; 
  const message = encodeURIComponent(`Merhaba, şu şablonu çok beğendim ve site yaptırmak istiyorum: ${pathname}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="h-screen bg-gray-50 font-sans flex flex-col overflow-hidden">
      {/* Top Navigation Bar - Fixed at top */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm z-[110] border-b border-gray-200 shrink-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/sablonlar" className="flex items-center gap-3">
                 <img src="/app_icon.png" alt="Lilidea Logo" className="w-8 h-8 rounded-lg shadow-sm" />
                 <span className="text-xl font-bold text-gray-900 tracking-tight">Şablon Galeri</span>
            </Link>
            
            <div className="flex gap-4 text-sm font-medium">
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-bold transition-colors bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow hover:border-green-500"
               >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                  Bu Şablonu Seç
               </a>
               <Link href="/" className="flex items-center gap-2 text-white bg-[#E69419] hover:bg-[#cf8315] px-4 py-2 rounded-lg font-bold shadow-md transition-all">
                 <ArrowLeft size={18} /> Sihirbaza Dön
               </Link>
            </div>
        </div>
      </div>
      
      {/* Main Content - Scrollable Window with containment for fixed elements */}
      <main className="flex-1 overflow-y-auto relative isolate w-full h-full">
         {/* The wrapper div helps simulate a viewport for fixed elements inside templates */}
         <div className="min-h-full w-full relative transform scale-[1]">
            {children}
         </div>
      </main>

    </div>
  );

}
