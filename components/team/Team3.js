"use client";
import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Quote } from 'lucide-react';
import { getImagesForSector } from '@/utils/imageManager';

const Team3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const memberImage = useMemo(() => {
    const images = getImagesForSector(siteData.sector);
    return images.about?.[0] || images.hero?.[0] || '/images/placeholder-team.jpg';
  }, [siteData.sector]);

  const featuredMember = {
    name: "Elif Öztürk",
    role: "Lead Designer",
    quote: "Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır. Her detayda mükemmelliği arıyoruz."
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="md:w-1/2 relative h-96 md:h-auto">
             <img src={memberImage} alt={featuredMember.name} className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>

          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
             <Quote size={48} className="text-gray-600 mb-8 opacity-50" />
             <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10 opacity-90">
               "{featuredMember.quote}"
             </p>
             <div>
               <div className="text-xl font-bold" style={{ color: primaryColor }}>{featuredMember.name}</div>
               <div className="text-gray-400">{featuredMember.role}</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team3;
