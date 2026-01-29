"use client";
import React, { useState } from 'react';
import { Sticker, Search, Copy } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function IconsPage() {
    const [search, setSearch] = useState('');

    // Get all icon names
    const iconList = Object.keys(Icons).filter(key => key !== 'createLucideIcon' && key !== 'default');

    const filtered = iconList.filter(name => name.toLowerCase().includes(search.toLowerCase()));

    const copyIcon = (name) => {
        navigator.clipboard.writeText(`<${name} size={20} />`);
        alert(`Kopyalandı: <${name} />`);
    };

    return (
        <div className="h-full flex flex-col p-8 w-full mx-auto">
            <header className="mb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Sticker className="text-[#E69419]" /> İkon Kütüphanesi
                    </h1>
                    <p className="text-gray-500 text-sm">Lucide React ikon setini tara.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="İkon ara..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-blue-50 w-64"
                    />
                </div>
            </header>

            <div className="flex-1 overflow-y-auto bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                    {filtered.slice(0, 200).map(name => {
                        const Icon = Icons[name];
                        return (
                            <button
                                key={name}
                                onClick={() => copyIcon(name)}
                                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition group"
                                title="Kopyalamak için tıkla"
                            >
                                <Icon className="text-gray-600 group-hover:text-[#0073FF] mb-3" size={24} />
                                <span className="text-[10px] text-gray-400 group-hover:text-gray-700 truncate w-full text-center">{name}</span>
                            </button>
                        )
                    })}
                </div>
                {filtered.length > 200 && (
                    <div className="mt-8 text-center text-sm text-gray-400 italic">
                        ... ve {filtered.length - 200} daha fazla simge. Aramayı daraltın.
                    </div>
                )}
            </div>
        </div>
    );
}
