"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const products = [
        { n: "Ürün Bir", p: "120", size: "lg", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
        { n: "Ürün İki", p: "45", size: "sm", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
        { n: "Ürün Üç", p: "89", size: "sm", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
        { n: "Ürün Dört", p: "210", size: "lg", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {products.map((item, i) => (
                        <div key={i} className="break-inside-avoid relative rounded-[60px] overflow-hidden group shadow-sm hover:shadow-2xl transition border border-slate-50">
                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Product" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-white">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{item.n}</h3>
                                <div className="text-3xl font-black italic" style={{ color: primaryColor }}>₺{item.p}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid6;
