import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductGrid1() {
  const { siteData } = useSite();
  const { primaryColor, generatedContent } = siteData;
  const products = generatedContent?.products || [
      { name: "Ürün Modeli A", price: "450 TL", tag: "Yeni" },
      { name: "Premium Paket", price: "1200 TL", tag: "Popüler" },
      { name: "Standart Set", price: "250 TL", tag: null },
      { name: "Hediye Paketi", price: "800 TL", tag: "İndirim" },
  ];

  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4">Ürünlerimiz & Paketler</h2>
                 <p className="text-neutral-500">Sizin için seçtiğimiz en özel ürünler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((p, i) => (
                    <div key={i} className="group border border-neutral-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden">
                        {p.tag && (
                             <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">{p.tag}</span>
                        )}
                        
                        <div className="bg-neutral-50 rounded-xl h-48 mb-6 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500">
                             <ShoppingBag size={48} />
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-neutral-900">{p.name}</h3>
                        <div className="flex items-center justify-between mt-4">
                             <span className="text-lg font-bold" style={{ color: primaryColor }}>{p.price}</span>
                             <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                 <ArrowRight size={18} />
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
