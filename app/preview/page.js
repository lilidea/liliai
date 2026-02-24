"use client";

import React, { useEffect, useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { getComponent } from '@/components/registry';
import { useRouter } from 'next/navigation';
import { Edit3, Eye, ArrowLeft, Send, Menu, X, GripVertical } from 'lucide-react';

import EditableSection from '@/components/preview/EditableSection';
import CustomizationSidebar from '@/components/preview/CustomizationSidebar';
import PublishModal from '@/components/preview/PublishModal';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children, isActive, isEditMode, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <EditableSection
        isEditMode={isEditMode}
        isActive={isActive}
        onClick={onClick}
      >
        {isEditMode && (
          <div
            {...attributes}
            {...listeners}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[100] p-2 bg-white shadow-xl border border-neutral-200 rounded-xl cursor-grab active:cursor-grabbing hover:bg-neutral-50 text-[#0073FF] transition-all transform hover:scale-110 active:scale-95"
            onClick={(e) => e.stopPropagation()}
            title="Sıralamayı Değiştir"
          >
            <GripVertical size={24} />
          </div>
        )}
        {children}
      </EditableSection>
    </div>
  );
}

export default function PreviewPage() {
  const { siteData, updateSiteData } = useSite();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Interaction State
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(null); // { id: 'hero', category: 'hero' }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // Sensors for DND
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Prevent hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = siteData.pages.indexOf(active.id);
      const newIndex = siteData.pages.indexOf(over.id);

      const newPages = arrayMove(siteData.pages, oldIndex, newIndex);
      updateSiteData({ pages: newPages });
    }
  };

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
    'Fiyat Listesi': 'pricing',
    'Galeri': 'gallery',
    'Yasal Uyarılar': 'legal',
    'Sertifikalar': 'legal',
    'Uzmanlık Alanları': 'legal',
    'Randevu': 'appointment',
    'Tedaviler': 'services'
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
        {/* Header - Fixed but Editable */}
        <EditableSection
          isEditMode={isEditMode}
          isActive={activeSidebar?.id === 'header'}
          onClick={() => openSidebar('header', 'header')}
        >
          {HeaderComponent && <HeaderComponent />}
        </EditableSection>

        <main>
          {/* Hero - Editable and part of reordering if we add it to siteData.pages */}
          <EditableSection
            isEditMode={isEditMode}
            isActive={activeSidebar?.id === 'hero'}
            onClick={() => openSidebar('hero', 'hero')}
          >
            {HeroComponent && <HeroComponent />}
          </EditableSection>

          {/* Dynamic Pages with Reordering */}
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={siteData.pages || []}
              strategy={verticalListSortingStrategy}
            >
              {(siteData.pages || []).map((page) => {
                const category = pageCategoryMap[page];
                if (!category) return null;

                const selectedStyle = siteData.selectedComponents[category] || `${category}1`;
                const DynamicComponent = getComponent(category, selectedStyle);

                if (!DynamicComponent) return null;

                return (
                  <SortableItem
                    key={page}
                    id={page}
                    isEditMode={isEditMode}
                    isActive={activeSidebar?.id === page}
                    onClick={() => openSidebar(page, category)}
                  >
                    <DynamicComponent />
                  </SortableItem>
                );
              })}
            </SortableContext>
          </DndContext>
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

      <CustomizationSidebar
        isOpen={isEditMode}
        onClose={() => {
          setActiveSidebar(null);
          setIsEditMode(false);
        }}
        activeSection={activeSidebar?.id}
        activeCategory={activeSidebar?.category}
      />

      <PublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />

    </div>
  );
}
