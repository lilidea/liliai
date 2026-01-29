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
        <div className="h-full bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
            {/* Mini Browser Header */}
            <div className="h-8 bg-neutral-200 border-b border-neutral-300 flex items-center px-3 gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-neutral-500 text-center">
                        {siteData.companyName || 'siteniz'}.com
                    </div>
                </div>
            </div>
            
            {/* Preview Content */}
            <div className="flex-1 overflow-y-auto bg-white">
                {selectedComponents.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-neutral-400 text-center p-8">
                        <div>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                                <Eye size={24} className="text-neutral-300" />
                            </div>
                            <p className="font-medium">Önizleme için bileşen seçin</p>
                            <p className="text-sm mt-1">Sol panelden bileşenlerinizi seçin</p>
                        </div>
                    </div>
                ) : (
                    <div className="origin-top" style={{ transform: 'scale(0.5)', transformOrigin: 'top center', width: '200%', marginLeft: '-50%' }}>
                        {selectedComponents.map(({ category, component }) => {
                            const Component = getComponent(null, component);
                            if (!Component) return null;
                            return (
                                <div key={category} className="relative">
                                    {React.createElement(Component)}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Header */}
            <div className="text-center mb-4 shrink-0">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900">Tasarım Stüdyosu</h2>
                <p className="text-neutral-500 text-sm md:text-base">Bileşenlerinizi seçin, canlı önizlemeyi görün</p>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex gap-2 mb-4 shrink-0">
                <button
                    onClick={() => setMobileView('selection')}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        mobileView === 'selection'
                            ? 'bg-[#E69419] text-white shadow-lg'
                            : 'bg-white border-2 border-neutral-200 text-neutral-600'
                    }`}
                >
                    <List size={18} />
                    Seçim
                </button>
                <button
                    onClick={() => setMobileView('preview')}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                        mobileView === 'preview'
                            ? 'bg-[#E69419] text-white shadow-lg'
                            : 'bg-white border-2 border-neutral-200 text-neutral-600'
                    }`}
                >
                    <Eye size={18} />
                    Önizleme
                    {selectedComponents.length > 0 && (
                        <span className="bg-white/20 px-1.5 rounded text-xs">{selectedComponents.length}</span>
                    )}
                </button>
            </div>

            {/* Desktop: Split View */}
            <div className="hidden md:flex flex-1 gap-4 min-h-0">
                {/* Left: Selection Panel */}
                <div className="w-72 shrink-0 flex flex-col">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">
                        Bileşenler
                    </div>
                    <div className="flex-1 min-h-0">
                        <SelectionPanel />
                    </div>
                </div>
                
                {/* Right: Preview Panel */}
                <div className="flex-1 flex flex-col min-h-0">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">
                        Canlı Önizleme
                    </div>
                    <div className="flex-1 min-h-0">
                        <PreviewPanel />
                    </div>
                </div>
            </div>

            {/* Mobile: Single View */}
            <div className="md:hidden flex-1 min-h-0">
                {mobileView === 'selection' ? (
                    <SelectionPanel />
                ) : (
                    <PreviewPanel />
                )}
            </div>
        </div>
    );
}
