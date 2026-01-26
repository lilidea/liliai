import React from 'react';
import { useSite } from '@/app/context/SiteContext';

export default function Menu1() {
    const { siteData } = useSite();
    const { primaryColor, generatedContent } = siteData;
    const content = generatedContent?.menu || {};

    const defaultItems = [
        { category: "Başlangıçlar", items: [
            { name: "Günün Çorbası", price: "90 TL", desc: "Mevsim sebzeleri ile hazırlanan özel çorba." },
            { name: "Bruschetta", price: "120 TL", desc: "Domates, fesleğen ve sarımsaklı ekmek." },
            { name: "Peynir Tabağı", price: "250 TL", desc: "Yerli ve ithal peynirler, kuru meyveler." }
        ]},
        { category: "Ana Yemekler", items: [
            { name: "Izgara Köfte", price: "320 TL", desc: "Özel baharatlar, pilav ve közlenmiş sebzeler." },
            { name: "Tavuk Şinitzel", price: "280 TL", desc: "Patates kızartması ve yeşillik ile." },
            { name: "Mantar Soslu Makarna", price: "240 TL", desc: "Krema, taze mantar ve parmesan." }
        ]},
        { category: "Tatlılar", items: [
            { name: "Tramisu", price: "150 TL", desc: "Orijinal İtalyan tarifi ile." },
            { name: "Cheesecake", price: "140 TL", desc: "Orman meyveli veya limonlu." }
        ]}
    ];

    const menuItems = content.items || defaultItems;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{content.title || "Lezzet Menümüz"}</h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: primaryColor }}></div>
                </div>

                <div className="space-y-16">
                    {menuItems.map((cat, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-neutral-400 border-b pb-4">{cat.category}</h3>
                            <div className="grid gap-8">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start group hover:bg-neutral-50 p-4 rounded-xl transition-colors dashed-border-bottom">
                                        <div>
                                            <h4 className="font-bold text-xl text-neutral-800 group-hover:text-black">{item.name}</h4>
                                            <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap" style={{ color: primaryColor }}>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
