import React, { useMemo } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { getImagesForSector } from '@/utils/imageManager';

export default function Gallery1() {
    const { siteData } = useSite();
    const content = siteData.generatedContent?.gallery || {};

    const images = useMemo(() => {
        const sectorImages = getImagesForSector(siteData.sector).gallery;
        // Ensure we have enough, or repeat/mix
        return [...sectorImages, ...sectorImages].slice(0, 6);
    }, [siteData.sector]);

    return (
        <section className="py-20 bg-neutral-50">
           <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-black mb-4">{content.title || "Galeri"}</h2>
                     <p className="text-neutral-500 max-w-2xl mx-auto">{content.description || "Çalışmalarımızdan ve atmosferimizden kareler."}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div key={i} className={`relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${i % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1'}`}>
                             <div className="aspect-square w-full bg-neutral-200 relative overflow-hidden">
                                <img 
                                    src={src} 
                                    alt={`Gallery item ${i}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                             </div>
                        </div>
                    ))}
                </div>
           </div>
        </section>
    );
}
