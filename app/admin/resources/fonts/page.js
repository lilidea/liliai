"use client";
import React from 'react';
import { Type, Check } from 'lucide-react';

const fonts = [
    { name: 'Inter', class: 'font-sans' },
    { name: 'Outfit', class: 'font-[family-name:var(--font-outfit)]' },
    { name: 'Plus Jakarta Sans', class: 'font-[family-name:var(--font-jakarta)]' },
    { name: 'Playfair Display', class: 'font-[family-name:var(--font-playfair)]' },
    { name: 'Geist Mono', class: 'font-mono' },
];

export default function FontsPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <header className="mb-8">
                 <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Type className="text-[#E69419]" /> Font Yöneticisi
                </h1>
                <p className="text-gray-500 text-sm">Sistemde yüklü olan tipografi ailelerini test edin.</p>
            </header>

            <div className="space-y-6">
                {fonts.map((font) => (
                    <div key={font.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#0073FF] transition group">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold uppercase text-gray-400 tracking-wider flex items-center gap-2">
                                {font.name}
                                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">{font.class}</span>
                            </span>
                            <button className="text-gray-300 group-hover:text-[#0073FF] transition">
                                <Check size={18} />
                            </button>
                        </div>
                        <div className={`${font.class} space-y-2`}>
                            <h2 className="text-4xl text-gray-900">Meraklı tilki çitin üzerinden atladı.</h2>
                            <p className="text-lg text-gray-600">
                                1234567890 — The quick brown fox jumps over the lazy dog.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
