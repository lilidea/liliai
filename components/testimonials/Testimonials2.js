"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { MessageSquareQuote } from 'lucide-react';

const Testimonials2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 70%)` }}></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
         <MessageSquareQuote size={64} className="mx-auto mb-8 opacity-50" style={{ color: primaryColor }} />
         
         <p className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12">
            "Projeye başladığımız ilk günden itibaren şeffaf iletişim ve üstün teknik beceri ile yanımızda oldular. Sonuçtan daha memnun olamazdık."
         </p>

         <div className="flex flex-col items-center">
            <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
               className="w-16 h-16 rounded-full border-2 border-white mb-4"
               alt="Client"
            />
            <div className="font-bold text-xl">Caner Erkin</div>
            <div className="text-gray-400">Genel Müdür, Logistics Inc.</div>
         </div>
         
         {/* Simple dots for slider visual */}
         <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600 cursor-pointer hover:bg-white transition-colors"></div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials2;
