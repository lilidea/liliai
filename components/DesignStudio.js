"use client";
import React, { useState, useMemo } from 'react';
import { getAvailableComponents, getComponent } from '@/components/registry';
import { Check, ChevronDown, ChevronRight, Eye, List } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';

export default function DesignStudio() {
    const { siteData, updateSelection, triggerLoading } = useSite();
    const [mobileView, setMobileView] = useState('selection'); // 'selection' | 'preview'
    const [expandedCategories, setExpandedCategories] = useState(['header', 'hero']);

    // Mapping of display names in Pages step to registry categories
    const pageCategoryMap = {
        'Hakkımızda': 'about',
        'İletişim': 'contact',
        'Hizmetler': 'services',
        'Projeler': 'projects',
        'Blog': 'blog',
        'SSS': 'faq',
        'Ekibimiz': 'team'
    };

    // Turkish Display Names
    const displayNames = {
        'header': 'Üst Menü',
        'hero': 'Ana Bölüm',
        'about': 'Hakkımızda',
        'contact': 'İletişim',
        'services': 'Hizmetler',
        'projects': 'Projeler',
        'blog': 'Blog',
        'faq': 'SSS',
        'team': 'Ekibimiz',
        'footer': 'Alt Menü'
    };

    // Calculate dynamic categories
    const categories = useMemo(() => {
        const baseTabs = ['header', 'hero'];
        const pageTabs = (siteData.pages || [])
            .map(p => pageCategoryMap[p])
            .filter(Boolean);
        const uniquePageTabs = [...new Set(pageTabs)];
        return [...baseTabs, ...uniquePageTabs, 'footer'];
    }, [siteData.pages]);

    // Toggle category expansion
    const toggleCategory = (category) => {
        setExpandedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Select a component option
    const handleSelect = (category, option) => {
        updateSelection(category, option);
    };

    // Get all selected components for preview
    const selectedComponents = useMemo(() => {
        return categories
            .map(cat => ({
                category: cat,
                component: siteData.selectedComponents[cat]
            }))
            .filter(item => item.component);
    }, [categories, siteData.selectedComponents]);

    // Selection Panel Component
    const SelectionPanel = () => (
        <div className="h-full overflow-y-auto custom-scrollbar space-y-2 p-2">
            {categories.map(category => {
                const options = getAvailableComponents(category);
                const isExpanded = expandedCategories.includes(category);
                const selectedOption = siteData.selectedComponents[category];
                
                return (
                    <div key={category} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(category)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-neutral-800">
                                    {displayNames[category] || category}
                                </span>
                                {selectedOption && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#E69419]/10 text-[#E69419] font-medium">
                                        {selectedOption}
                                    </span>
                                )}
                            </div>
                            {isExpanded ? (
                                <ChevronDown size={18} className="text-neutral-400" />
                            ) : (
                                <ChevronRight size={18} className="text-neutral-400" />
                            )}
                        </button>
                        
                        {/* Options */}
                        {isExpanded && options.length > 0 && (
                            <div className="border-t border-neutral-100 p-2 space-y-1">
                                {options.map(opt => {
                                    const isSelected = selectedOption === opt;
                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => handleSelect(category, opt)}
                                            className={`w-full px-3 py-2.5 rounded-lg text-left text-sm font-medium flex items-center justify-between transition-all ${
                                                isSelected 
                                                    ? 'bg-[#E69419] text-white shadow-md' 
                                                    : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                                            }`}
                                        >
                                            <span className="capitalize">{opt.replace(/(\d+)/, ' $1')}</span>
                                            {isSelected && <Check size={16} />}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        
                        {/* No options message */}
                        {isExpanded && options.length === 0 && (
                            <div className="border-t border-neutral-100 p-4 text-center text-neutral-400 text-sm">
                                Henüz şablon yok
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    // Preview Panel Component
    const PreviewPanel = () => (
        <div className="h-full bg-neutral-100 rounded-xl overflow-hidden flex flex-col border border-neutral-200">
            {/* Mini Browser Header */}
            <div className="h-9 bg-white border-b border-neutral-200 flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4 max-w-sm mx-auto">
                    <div className="bg-neutral-100 rounded-md px-3 py-1 text-xs text-neutral-500 text-center font-medium flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {siteData.companyName || 'siteniz'}.com
                    </div>
                </div>
            </div>
            
            {/* Preview Content */}
            <div className="flex-1 bg-neutral-50 relative overflow-hidden group">
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                    <div className="min-h-full">
                        {selectedComponents.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-neutral-400 text-center p-8 mt-20">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
                                    <Eye size={32} className="text-neutral-300" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-1">Görünüm Hazır Değil</h3>
                                <p className="text-sm text-neutral-500 max-w-xs">Sol menüden bileşenleri seçmeye başlayarak sitenizi oluşturun.</p>
                            </div>
                        ) : (
                            <div className="animate-in fade-in duration-500">
                                {/* Wrap scaled content in a container that handles exact sizing */}
                                <div className="origin-top-left" style={{ 
                                    transform: 'scale(0.65)', 
                                    width: '153.8%', // 100 / 0.65
                                    height: '153.8%',
                                    transformOrigin: '0 0'
                                }}>
                                    {selectedComponents.map(({ category, component }) => {
                                        const Component = getComponent(null, component);
                                        if (!Component) return null;
                                        return (
                                            <div key={category} className="relative hover:ring-2 hover:ring-blue-400 transition-all cursor-default">
                                                {/* Component Label Overlay on Hover */}
                                                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    <span className="bg-blue-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm">
                                                        {displayNames[category]}
                                                    </span>
                                                </div>
                                                {React.createElement(Component)}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="text-center mb-6 shrink-0">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900 mb-2">Tasarım Stüdyosu</h2>
                <p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto">
                    Soldaki panelden bölümleri seçin, sağdaki panelde sitenizin nasıl görüneceğini canlı izleyin.
                </p>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex gap-2 mb-4 shrink-0 bg-neutral-100 p-1 rounded-xl">
                <button
                    onClick={() => setMobileView('selection')}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        mobileView === 'selection'
                            ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5'
                            : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                >
                    <List size={16} />
                    Bileşen Seçimi
                </button>
                <button
                    onClick={() => setMobileView('preview')}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        mobileView === 'preview'
                            ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-black/5'
                            : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                >
                    <Eye size={16} />
                    Canlı Önizleme
                    {selectedComponents.length > 0 && (
                        <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px]">{selectedComponents.length}</span>
                    )}
                </button>
            </div>

            {/* Desktop: Split View */}
            <div className={`hidden md:flex flex-1 gap-6 min-h-0 items-start h-[600px] lg:h-[700px]`}>
                {/* Left: Selection Panel */}
                <div className="w-[320px] shrink-0 flex flex-col h-full bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-neutral-100 bg-neutral-50/50 flex justify-between items-center">
                         <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Bileşen Menüsü</span>
                         <span className="text-xs bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full">{categories.length} Bölüm</span>
                    </div>
                    <div className="flex-1 min-h-0 overflow-y-auto">
                        <SelectionPanel />
                    </div>
                </div>
                
                {/* Right: Preview Panel */}
                <div className="flex-1 flex flex-col h-full min-h-0 bg-white rounded-2xl shadow-xl shadow-neutral-200/50 ring-1 ring-neutral-200 overflow-hidden">
                    <PreviewPanel />
                </div>
            </div>

            {/* Mobile: Single View */}
            <div className="md:hidden flex-1 min-h-0 bg-white rounded-xl border border-neutral-200 overflow-hidden">
                {mobileView === 'selection' ? (
                    <div className="h-full overflow-y-auto">
                         <SelectionPanel />
                    </div>
                ) : (
                    <PreviewPanel />
                )}
            </div>
        </div>
    );
}
