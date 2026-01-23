"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LayoutTemplate } from 'lucide-react';

export default function TemplatesLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Top Navigation Bar - Showcase Style */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-[110] border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/sablonlar" className="flex items-center gap-3">
                 <img src="/app_icon.png" alt="Lilidea Logo" className="w-8 h-8 rounded-lg shadow-sm" />
                 <span className="text-xl font-bold text-gray-900 tracking-tight">Şablon Galeri</span>
            </Link>
            
            <div className="flex gap-4 text-sm font-medium">
               <Link href="/tum-bilesenler" className="text-gray-500 hover:text-gray-900 transition-colors">Bileşenler</Link>
               <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-[#E69419] transition-colors bg-gray-100 px-3 py-1.5 rounded-full hover:bg-orange-50">
                 <ArrowLeft size={16} /> Editör
               </Link>
            </div>
        </div>
      </div>
      
      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}
