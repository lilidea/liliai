"use client";
import React, { useState } from 'react';
import { registry } from '@/components/registry';
import { useSite } from '@/app/context/SiteContext';
import { useTheme } from '@/app/context/ThemeContext';
import { Palette, Layers, Maximize2 } from 'lucide-react';

export default function ComponentsPage() {
    const { siteData, updateSiteData } = useSite();
    const { themes, changeTheme } = useTheme();
    const [filter, setFilter] = useState('all');
    const [zoom, setZoom] = useState(0.75); // Default zoom out to 75%

    // Inject Mock Data on Mount for better visual testing
    React.useEffect(() => {
        updateSiteData({
            companyName: siteData.companyName || 'Liliai Teknoloji',
            aboutText: siteData.aboutText || 'Geleceğin teknolojilerini bugünden inşa ediyoruz. Yapay zeka destekli çözümlerimizle işinizi dijital dünyada bir adım öne taşıyın.',
            pages: siteData.pages?.length ? siteData.pages : ['Ana Sayfa', 'Hizmetler', 'Kurumsal', 'Blog', 'İletişim'],
            email: 'info@lilidea.com',
            phone: '+90 (212) 555 00 00',
            address: 'Teknopark İstanbul, Türkiye',
            socials: { twitter: '#', instagram: '#', linkedin: '#' }
        });
    }, []);

    // Flatten registry and derive categories from keys (e.g. 'header1' -> 'header')
    const allComponents = Object.entries(registry).map(([id, Component]) => {
        const category = id.replace(/[0-9]+$/, ''); // header1 -> header
        return { category, id, Component };
    });

    const filtered = filter === 'all' ? allComponents : allComponents.filter(c => c.category === filter);
    const categories = Array.from(new Set(allComponents.map(c => c.category)));

    return (
        <div className="flex h-full items-start">
            {/* Controls Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto sticky top-0 h-screen shrink-0 z-20">
                <h2 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-800">
                    <Layers size={20} className="text-gray-400" /> 
                    Panel Kontrolleri
                </h2>

                <div className="space-y-6">
                    {/* View Controls (Zoom) */}
                    <div className="space-y-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                         <label className="text-xs font-bold uppercase text-gray-500 flex justify-between">
                             Görünüm Ölçeği
                             <span className="text-[#0073FF]">{(zoom * 100).toFixed(0)}%</span>
                         </label>
                         <input 
                            type="range" 
                            min="0.25" 
                            max="1" 
                            step="0.05"
                            value={zoom} 
                            onChange={(e) => setZoom(parseFloat(e.target.value))}
                            className="w-full accent-[#0073FF]"
                         />
                    </div>

                    {/* Filter */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400">Kategori Filtresi</label>
                        <select 
                            value={filter} 
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700 focus:border-[#0073FF] focus:ring-2 focus:ring-blue-100 outline-none hover:bg-white transition"
                        >
                            <option value="all">Tümünü Göster</option>
                            {categories.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
                        </select>
                    </div>

                    {/* Navigation Editor */}
                    <div className="space-y-2">
                         <label className="text-xs font-bold uppercase text-gray-400">Menü Linkleri</label>
                         <textarea 
                            rows={3}
                            placeholder="Ana Sayfa, Kurumsal..."
                            value={siteData.pages?.join(', ') || ''}
                            onChange={(e) => updateSiteData({ pages: e.target.value.split(',').map(s => s.trim()) })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700 focus:border-[#0073FF] focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-gray-400 resize-none"
                         />
                         <p className="text-[10px] text-gray-400">Virgül ile ayırarak yazın.</p>
                    </div>

                    {/* Color Palette */}
                    <div className="space-y-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                         <div>
                             <label className="text-xs font-bold uppercase text-gray-500 flex items-center gap-2 mb-1">
                                <Palette size={12} /> Renk Paleti
                             </label>
                             <p className="text-[10px] text-gray-400">Markanızın renklerini belirleyin.</p>
                         </div>

                         {/* Custom Color Inputs */}
                         <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <input 
                                    type="color" 
                                    value={siteData.primaryColor || '#E69419'}
                                    onChange={(e) => updateSiteData({ primaryColor: e.target.value })}
                                    className="w-8 h-8 rounded cursor-pointer border-none bg-transparent"
                                />
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-gray-700">Ana Renk</label>
                                    <span className="text-[10px] text-gray-400 uppercase">{siteData.primaryColor || '#E69419'}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input 
                                    type="color" 
                                    value={siteData.secondaryColor || '#0073FF'}
                                    onChange={(e) => updateSiteData({ secondaryColor: e.target.value })}
                                    className="w-8 h-8 rounded cursor-pointer border-none bg-transparent"
                                />
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-gray-700">İkincil</label>
                                    <span className="text-[10px] text-gray-400 uppercase">{siteData.secondaryColor || '#0073FF'}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input 
                                    type="color" 
                                    value={siteData.accentColor || '#000000'}
                                    onChange={(e) => updateSiteData({ accentColor: e.target.value })}
                                    className="w-8 h-8 rounded cursor-pointer border-none bg-transparent"
                                />
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-gray-700">Vurgu</label>
                                    <span className="text-[10px] text-gray-400 uppercase">{siteData.accentColor || '#000000'}</span>
                                </div>
                            </div>
                         </div>

                         <div className="h-px bg-gray-200 my-2"></div>

                         {/* Presets */}
                         <div>
                            <label className="text-[10px] font-bold uppercase text-gray-400 mb-2 block">Hazır Kartelalar</label>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(themes).map(([key, theme]) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            changeTheme(key);
                                            updateSiteData({
                                                primaryColor: theme.colors.primary,
                                                secondaryColor: theme.colors.secondary,
                                                accentColor: theme.colors.accent
                                            });
                                        }}
                                        className="flex items-center gap-2 p-2 rounded border border-gray-200 hover:bg-white hover:border-gray-300 text-xs transition-colors text-gray-600 bg-white/50"
                                    >
                                        <div className="w-3 h-3 rounded-full shadow-sm" style={{ background: theme.colors.primary }}></div>
                                        <span className="truncate font-medium">{theme.name}</span>
                                    </button>
                                ))}
                            </div>
                         </div>
                    </div>
                    
                    {/* Quick Data Overrides */}
                    <div className="space-y-2">
                         <label className="text-xs font-bold uppercase text-gray-400">Diğer Veriler</label>
                         <input 
                            type="text" 
                            placeholder="Şirket Adı"
                            value={siteData.companyName || ''}
                            onChange={(e) => updateSiteData({ companyName: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm mb-2 text-gray-700 focus:border-[#0073FF] focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-gray-400"
                         />
                    </div>
                </div>
            </div>

            {/* Canvas */}
            <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
                <header className="flex justify-between items-end mb-8">
                     <div>
                        <h1 className="text-3xl font-bold text-gray-900">Bileşen Kütüphanesi</h1>
                        <p className="text-gray-500">İncelenen {filtered.length} bileşen</p>
                     </div>
                </header>

                <div className="space-y-12">
                    {filtered.map(({ category, id, Component }) => (
                        <div key={`${category}-${id}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow flex flex-col">
                            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center shrink-0">
                                <span className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
                                    {category} / <span className="text-[#0073FF]">{id}</span>
                                </span>
                                <button className="text-gray-400 hover:text-[#0073FF] transition">
                                    <Maximize2 size={14} />
                                </button>
                            </div>
                            {/* Render Component Isolated 
                                'transform-gpu' creates a new stacking context, containing 'fixed' children.
                                'h-[400px]' gives height for absolute items to sit in.
                                'overflow-y-auto' handles tall content.
                                Scale applied here
                            */}
                            <div 
                                className="relative transform-gpu h-[400px] w-full overflow-y-auto overflow-x-hidden bg-white origin-top-left transition-transform duration-200"
                            >
                                <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top left', width: `${100/zoom}%` }}>
                                    <Component />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
