"use client";

import React, { useEffect, useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { getComponent } from '@/components/registry';
import { useRouter } from 'next/navigation';
import { Edit3, Eye, ArrowLeft, Send } from 'lucide-react';

import EditableSection from '@/components/preview/EditableSection';
import CustomizationSidebar from '@/components/preview/CustomizationSidebar';
import PublishModal from '@/components/preview/PublishModal';

export default function PreviewPage() {
  const { siteData } = useSite();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  // Interaction State
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(null); // { id: 'hero', category: 'hero' }
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Component Category Mapping
  const pageCategoryMap = {
    'Hakkımızda': 'about',
    'İletişim': 'contact',
    'Hizmetler': 'services',
    'Projeler': 'projects',
    'Blog': 'blog',
    'SSS': 'faq',
    'Ekibimiz': 'team',
    // New Mappings
    'Menü': 'menu',
    'Ürünler': 'productgrid',
    'Kampanyalar': 'productgrid',
    'Fiyat Listesi': 'productgrid',
    'Galeri': 'gallery',
    'Projeler': 'gallery', // Reuse gallery for projects grid if needed, or keep separate
    'Yasal Uyarılar': 'legal',
    'Sertifikalar': 'legal',
    'Uzmanlık Alanları': 'legal',
    'Randevu': 'appointment',
    'Tedaviler': 'services' // Fallback to services for now
  };

  // 1. Header
  const HeaderComponent = getComponent('headers', siteData.selectedComponents.header || 'header1');
  
  // 2. Hero
  const HeroComponent = getComponent('heroes', siteData.selectedComponents.hero || 'hero1');
  
  // 3. Footer
  const FooterComponent = getComponent('footers', siteData.selectedComponents.footer || 'footer1');

  const openSidebar = (id, category) => {
      if (!isEditMode) return;
      setActiveSidebar({ id, category });
  };

  return (
    <div className={`min-h-screen bg-white font-sans transition-all duration-500 ${isEditMode ? 'pr-[400px]' : ''}`}>
      
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-[60] flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
            <button 
                onClick={() => router.push('/')}
                className="p-2 hover:bg-neutral-100 rounded-full text-neutral-600 transition-colors"
                title="Sihirbaza Dön"
            >
                <ArrowLeft size={20} />
            </button>
            <div className="h-6 w-px bg-neutral-200"></div>
            <span className="font-bold text-neutral-900">{siteData.companyName || 'Liliai'} Önizleme</span>
        </div>

        <div className="flex items-center gap-3">
             <div className="bg-neutral-100 p-1 rounded-lg flex items-center gap-1">
                <button 
                    onClick={() => setIsEditMode(false)}
                    className={`px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all ${!isEditMode ? 'bg-white shadow text-[#0073FF]' : 'text-neutral-500 hover:text-black'}`}
                >
                    <Eye size={14} /> İzle
                </button>
                <button 
                    onClick={() => setIsEditMode(true)}
                    className={`px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all ${isEditMode ? 'bg-white shadow text-[#0073FF]' : 'text-neutral-500 hover:text-black'}`}
                >
                    <Edit3 size={14} /> Düzenle
                </button>
             </div>

             <button 
                onClick={() => setIsPublishModalOpen(true)}
                className="bg-[#E69419] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#cf8315] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
            >
                Bizle Paylaş <Send size={14} />
             </button>
        </div>
      </div>

      <div className="pt-16">
        {/* Header */}
        <EditableSection 
            isEditMode={isEditMode} 
            isActive={activeSidebar?.id === 'header'} 
            onClick={() => openSidebar('header', 'header')}
        >
            {HeaderComponent && <HeaderComponent />}
        </EditableSection>

        <main>
            {/* Hero */}
            <EditableSection 
                isEditMode={isEditMode} 
                isActive={activeSidebar?.id === 'hero'} 
                onClick={() => openSidebar('hero', 'hero')}
            >
                {HeroComponent && <HeroComponent />}
            </EditableSection>

            {/* Dynamic Pages */}
            {(siteData.pages || []).map((page, index) => {
                const category = pageCategoryMap[page];
                if (!category) return null;

                // Get user selection or fallback to '1'
                const selectedStyle = siteData.selectedComponents[category] || `${category}1`;
                const DynamicComponent = getComponent(category, selectedStyle);

                if (!DynamicComponent) return null;

                return (
                    <EditableSection 
                        key={index}
                        isEditMode={isEditMode} 
                        isActive={activeSidebar?.id === page} 
                        onClick={() => openSidebar(page, category)}
                    >
                        <DynamicComponent />
                    </EditableSection>
                );
            })}
        </main>

        {/* Footer */}
        <EditableSection 
            isEditMode={isEditMode} 
            isActive={activeSidebar?.id === 'footer'} 
            onClick={() => openSidebar('footer', 'footer')}
        >
            {FooterComponent && <FooterComponent />}
        </EditableSection>
      </div>
      
      {/* Sidebar */}
      <CustomizationSidebar 
         isOpen={isEditMode} 
         onClose={() => setActiveSidebar(null)}
         activeSection={activeSidebar?.id}
         activeCategory={activeSidebar?.category}
      />

      {/* Publish Modal */}
      <PublishModal 
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />

    </div>
  );
}
