"use client";
import React, { useState } from 'react';
import { Type, Check, Plus, Search, Loader2 } from 'lucide-react';

const GOOGLE_FONTS = [
    { name: 'Roboto', category: 'sans-serif', styles: '12 styles' },
    { name: 'Open Sans', category: 'sans-serif', styles: '10 styles' },
    { name: 'Lato', category: 'sans-serif', styles: '10 styles' },
    { name: 'Montserrat', category: 'sans-serif', styles: '18 styles' },
    { name: 'Poppins', category: 'sans-serif', styles: '18 styles' },
    { name: 'Oswald', category: 'sans-serif', styles: '6 styles' },
    { name: 'Raleway', category: 'sans-serif', styles: '18 styles' },
    { name: 'Merriweather', category: 'serif', styles: '8 styles' },
    { name: 'Nunito', category: 'sans-serif', styles: '14 styles' },
    { name: 'Playfair Display', category: 'serif', styles: '6 styles' },
    { name: 'Rubik', category: 'sans-serif', styles: '14 styles' },
    { name: 'Inter', category: 'sans-serif', styles: '9 styles' }
];

export default function FontsPage() {
    const [installedFonts, setInstalledFonts] = useState([
        { name: 'Inter', class: 'font-sans' },
        { name: 'Outfit', class: 'font-[family-name:var(--font-outfit)]' }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleAddFont = (font) => {
        if (installedFonts.find(f => f.name === font.name)) return;

        setIsAdding(true);
        // Simulate "installing" or adding to config
        setTimeout(() => {
            setInstalledFonts([...installedFonts, { name: font.name, class: `font-['${font.name}']` }]);
            setIsAdding(false);

            // In a real app, this would update siteData/layout config and inject the <link> tag
            // For now we just show UI feedback
            alert(`${font.name} başarıyla eklendi! (Simülasyon)`);
        }, 800);
    };

    const filteredGoogleFonts = GOOGLE_FONTS.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 w-full mx-auto h-full flex flex-col">
            <header className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <div className="p-2 bg-[#E69419]/10 rounded-xl text-[#E69419]">
                            <Type size={24} />
                        </div>
                        Font Yöneticisi
                    </h1>
                    <p className="text-gray-500 text-sm mt-1 ml-12">Sitenizde kullanabileceğiniz yazı tiplerini yönetin.</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-8 h-full">
                {/* Installed Fonts */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Yüklü Fontlar</h2>
                    <div className="space-y-4">
                        {installedFonts.map((font) => (
                            <div key={font.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#E69419] transition group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded">Aktif</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                                        {font.name}
                                    </span>
                                </div>
                                <div className={`${font.class} space-y-2`}>
                                    <h2 className="text-3xl text-gray-900 leading-tight">Meraklı tilki.</h2>
                                    <p className="text-sm text-gray-500 truncate">
                                        The quick brown fox jumps over the lazy dog.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Fonts Browser */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Google Fonts Kütüphanesi</h2>
                        <div className="relative w-64">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Font ara..."
                                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#E69419]"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {filteredGoogleFonts.map(font => {
                                    const isInstalled = installedFonts.find(f => f.name === font.name);

                                    return (
                                        <div key={font.name} className="p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition flex flex-col justify-between group h-32">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-bold text-gray-900">{font.name}</h3>
                                                    <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{font.category}</span>
                                                </div>
                                                <p className="text-gray-400 text-xs mt-1">{font.styles}</p>
                                            </div>

                                            <div className="mt-3 flex items-center justify-between">
                                                <div className="text-xl text-gray-800" style={{ fontFamily: font.name }}>Ag</div>

                                                {isInstalled ? (
                                                    <span className="text-green-500 flex items-center gap-1 text-xs font-bold">
                                                        <Check size={14} /> Ekli
                                                    </span>
                                                ) : (
                                                    <button
                                                        onClick={() => handleAddFont(font)}
                                                        disabled={isAdding}
                                                        className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#E69419] transition disabled:opacity-50"
                                                    >
                                                        {isAdding ? <Loader2 size={14} className="animate-spin" /> : <Plus size={16} />}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400">
                            Google Fonts API • {filteredGoogleFonts.length} font listelendi
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Simple CSS import simulation for the demo fonts */
                @import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Nunito&family=Open+Sans&family=Oswald&family=Playfair+Display&family=Poppins&family=Raleway&family=Roboto&family=Rubik&display=swap');
            `}</style>
        </div>
    );
}
