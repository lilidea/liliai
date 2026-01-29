"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Coffee, Pizza, Beer, IceCream } from 'lucide-react';

const Menu2 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const items = [
        { name: "Espresso", price: "24", icon: Coffee },
        { name: "Margarita", price: "120", icon: Pizza },
        { name: "Craft Beer", price: "85", icon: Beer },
        { name: "Gelato", price: "45", icon: IceCream }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="p-10 rounded-[50px] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl transition group text-center">
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-8 transition group-hover:scale-110" style={{ color: primaryColor }}>
                                <item.icon size={24} />
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.name}</h4>
                            <div className="text-2xl font-black italic" style={{ color: primaryColor }}>₺{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu2;
