"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { getComponent } from '@/components/registry';
import { useRouter } from 'next/navigation';
import { Edit3, Eye, ArrowLeft, Send, Menu, X, AlertTriangle, Clock } from 'lucide-react';

import EditableSection from '@/components/preview/EditableSection';
import CustomizationSidebar from '@/components/preview/CustomizationSidebar';
import PublishModal from '@/components/preview/PublishModal';
import { useSiteLimit } from '@/hooks/useSiteLimit';

export default function PreviewPage() {
  const { siteData } = useSite();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const hasRecorded = useRef(false);
  
  // Site Limit Hook
  const { canCreateSite, remainingCount, recordSiteCreation, getTimeUntilReset, maxSites, isLoaded } = useSiteLimit();
  const [showLimitModal, setShowLimitModal] = useState(false);
  
  // Interaction State
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(null); // { id: 'hero', category: 'hero' }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Record site creation when user reaches preview (only once)
  useEffect(() => {
    if (!isLoaded || hasRecorded.current) return;
    
    if (!canCreateSite) {
      setShowLimitModal(true);
    } else {
      // Record this site creation
      recordSiteCreation({
        sector: siteData.sector,
        companyName: siteData.companyName
      });
      hasRecorded.current = true;
    }
  }, [isLoaded, canCreateSite, siteData.sector, siteData.companyName]);

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
    <div className={`min-h-screen bg-white font-sans transition-all duration-500 ${isEditMode ? 'lg:pr-[400px]' : ''}`}>
      
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-[60] flex items-center justify-between px-3 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
            <button 
                onClick={() => router.push('/')}
                className="p-2 hover:bg-neutral-100 rounded-full text-neutral-600 transition-colors"
                title="Sihirbaza Dön"
            >
                <ArrowLeft size={18} className="md:w-5 md:h-5" />
            </button>
            <div className="hidden md:block h-6 w-px bg-neutral-200"></div>
            <span className="font-bold text-neutral-900 text-sm md:text-base truncate max-w-[120px] md:max-w-none">
                {siteData.companyName || 'Liliai'} <span className="hidden sm:inline">Önizleme</span>
            </span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
            <button 
                onClick={() => setIsPublishModalOpen(true)}
                className="bg-[#E69419] text-white p-2 rounded-lg"
            >
                <Send size={18} />
            </button>
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-600"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-white border-b border-neutral-200 z-[55] p-4 md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <div className="bg-neutral-100 p-1 rounded-lg flex items-center gap-1">
              <button 
                onClick={() => { setIsEditMode(false); setIsMobileMenuOpen(false); }}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-bold flex items-center justify-center gap-2 transition-all ${!isEditMode ? 'bg-white shadow text-[#0073FF]' : 'text-neutral-500'}`}
              >
                <Eye size={16} /> İzle
              </button>
              <button 
                onClick={() => { setIsEditMode(true); setIsMobileMenuOpen(false); }}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-bold flex items-center justify-center gap-2 transition-all ${isEditMode ? 'bg-white shadow text-[#0073FF]' : 'text-neutral-500'}`}
              >
                <Edit3 size={16} /> Düzenle
              </button>
            </div>
            <button 
              onClick={() => { setIsPublishModalOpen(true); setIsMobileMenuOpen(false); }}
              className="bg-[#E69419] text-white px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
            >
              Bizle Paylaş <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="pt-14 md:pt-16">
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
         onClose={() => {
           setActiveSidebar(null);
           // On mobile, close edit mode entirely
           if (window.innerWidth < 768) {
             setIsEditMode(false);
           }
         }}
         activeSection={activeSidebar?.id}
         activeCategory={activeSidebar?.category}
      />

      {/* Publish Modal */}
      <PublishModal 
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />

      {/* Limit Exceeded Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
              <AlertTriangle size={32} className="text-[#E69419]" />
            </div>
            
            <h2 className="text-2xl font-bold text-center text-neutral-900 mb-2">
              Limite Ulaştınız
            </h2>
            <p className="text-neutral-500 text-center mb-6">
              Ücretsiz olarak {maxSites} site oluşturabilirsiniz. Limitiniz doldu.
            </p>
            
            {getTimeUntilReset() && (
              <div className="bg-neutral-100 rounded-xl p-4 mb-6 flex items-center gap-3">
                <Clock size={20} className="text-neutral-400" />
                <div>
                  <div className="text-sm font-medium text-neutral-700">Yenileme Süresi</div>
                  <div className="text-xs text-neutral-500">
                    {getTimeUntilReset().hours} saat {getTimeUntilReset().minutes} dakika sonra
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => router.push('/')}
                className="w-full py-3 rounded-xl bg-[#E69419] text-white font-bold hover:bg-[#d4850f] transition-colors"
              >
                Ana Sayfaya Dön
              </button>
              <button 
                onClick={() => setShowLimitModal(false)}
                className="w-full py-3 rounded-xl bg-neutral-100 text-neutral-600 font-medium hover:bg-neutral-200 transition-colors"
              >
                Yine de Görüntüle
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
