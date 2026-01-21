import React, { useState, useMemo } from 'react';
import { Button } from '@/components/Button';
import { getAvailableComponents, getComponent } from '@/components/registry';
import { Check } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';

export default function DesignStudio() {
    const { siteData, updateSelection, triggerLoading } = useSite();
    const [designTab, setDesignTab] = useState('header');

    const handleTabChange = (tab) => {
        if (tab === designTab) return;
        triggerLoading(800); // Shorter duration for internal tabs
        setTimeout(() => setDesignTab(tab), 400);
    };

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

    // Calculate dynamic tabs
    const tabs = useMemo(() => {
        const baseTabs = ['header', 'hero'];
        const pageTabs = (siteData.pages || [])
            .map(p => pageCategoryMap[p])
            .filter(Boolean); // Filter out pages that don't have categories yet
        
        // Remove duplicates if any
        const uniquePageTabs = [...new Set(pageTabs)];
        
        return [...baseTabs, ...uniquePageTabs, 'footer'];
    }, [siteData.pages]);

    // Get options for current tab
    const currentOptions = getAvailableComponents(designTab);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col h-full">
            <div className="text-center mb-4 shrink-0">
                <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Tasarım Stüdyosu</h2>
                <p className="text-neutral-500">Sitenizin tüm bileşenlerini sırayla tasarlayın.</p>
            </div>

            {/* Design Tabs / Stepper */}
            <div className="flex overflow-x-auto pb-4 gap-2 px-2 shrink-0 custom-scrollbar justify-start md:justify-center">
                {tabs.map((section) => (
                    <Button
                        key={section}
                        variant={designTab === section ? 'primary' : 'secondary'}
                        onClick={() => handleTabChange(section)}
                        className={`px-4 py-2 text-sm uppercase tracking-wide whitespace-nowrap ${
                            designTab === section ? 'bg-[#E69419] text-white' : 'bg-transparent border-2 border-neutral-200 text-neutral-400 hover:text-neutral-600'
                        }`}
                    >
                        {displayNames[section] || section}
                    </Button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-[350px]">
                {currentOptions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-neutral-400 text-center p-8 border-2 border-dashed border-neutral-100 rounded-2xl">
                        <p>Bu bölüm için henüz hazır şablon bulunmuyor.</p>
                        <span className="text-xs mt-2">({designTab})</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {currentOptions.map(opt => (
                            <div 
                                key={opt}
                                onClick={() => updateSelection(designTab, opt)}
                                className={`relative rounded-2xl border-2 cursor-pointer overflow-hidden transition-all duration-300 min-h-[160px] group ${siteData.selectedComponents[designTab] === opt ? 'shadow-xl ring-1' : 'border-neutral-100 hover:border-neutral-300'}`}
                                style={siteData.selectedComponents[designTab] === opt ? { borderColor: siteData.primaryColor, ringColor: siteData.primaryColor } : {}}
                            >
                                <div className="absolute inset-0 bg-neutral-50 pointer-events-none overflow-hidden">
                                        {/* Scale down preview based on component type */}
                                        <div className={`w-[1200px] transform origin-top-left ${designTab === 'hero' ? 'scale-[0.3]' : 'scale-[0.4]'}`}>
                                            {React.createElement(getComponent(null, opt) || (() => null))}
                                        </div>
                                </div>
                                <div className="absolute bottom-4 left-4 z-10">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${siteData.selectedComponents[designTab] === opt ? 'bg-black text-white' : 'bg-white/90 text-black shadow-sm'}`}>
                                            {opt}
                                        </span>
                                </div>
                                {siteData.selectedComponents[designTab] === opt && (
                                    <div className="absolute top-4 right-4 text-white rounded-full p-1 shadow-lg z-10" style={{ backgroundColor: siteData.primaryColor }}>
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
