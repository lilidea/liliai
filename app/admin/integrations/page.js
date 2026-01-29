"use client";
import React, { useState } from 'react';
import {
    Search, Filter, ExternalLink,
    Plug, ShoppingCart, Truck, CreditCard,
    MessageCircle, Database, FileText
} from 'lucide-react';

// Data from user request
const INTEGRATIONS = [
    // Üyelik, Kampanya ve Sadakat
    { id: 1, title: 'SMS otomasyon & push bildirimleri', category: 'Üyelik, Kampanya ve Sadakat', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 2, title: 'Kupon kod altyapıları', category: 'Üyelik, Kampanya ve Sadakat', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 3, title: 'Hediye kartı modülleri', category: 'Üyelik, Kampanya ve Sadakat', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 4, title: 'Clubcard / Sadakat programları', category: 'Üyelik, Kampanya ve Sadakat', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Pazaryerleri
    { id: 5, title: 'GittiGidiyor', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 6, title: 'eBay', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 7, title: 'Amazon Türkiye', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 8, title: 'ÇiçekSepeti', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 9, title: 'N11 API', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 10, title: 'Hepsiburada API', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 11, title: 'Trendyol API', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 12, title: 'Trendyol Entegrasyonu', category: 'Pazaryerleri', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Stok / ERP / Tedarik
    { id: 13, title: 'Nebim ERP', category: 'Stok / ERP / Tedarik Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 14, title: 'Logo ERP', category: 'Stok / ERP / Tedarik Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Muhasebe / Finans
    { id: 15, title: 'GİB entegrasyon API’ları', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 16, title: 'UBL Fatura desteği', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 17, title: 'e-Arşiv', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 18, title: 'e-Fatura', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 19, title: 'Nebim V3 / Nebim V2', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 20, title: 'Mikro Yazılım', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 21, title: 'Logo Bulut', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 22, title: 'Paraşüt', category: 'Muhasebe / Finans Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Ödeme
    { id: 23, title: 'Shopier', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 24, title: 'Papara Pay', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 25, title: 'Param', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 26, title: 'PayU', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 27, title: 'PayTR', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 28, title: 'Iyzico', category: 'Ödeme Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Kargo
    { id: 29, title: 'Kolay gelsin', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 30, title: 'Sürat Kargo', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 31, title: 'PTT Kargo', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 32, title: 'FedEx', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 33, title: 'DHL Express', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 34, title: 'UPS', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 35, title: 'MNG Kargo', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 36, title: 'Aras Kargo', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 37, title: 'Yurtiçi Kargo', category: 'Kargo Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Pazarlama
    { id: 38, title: 'Onedio SMS', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 39, title: '360 SMS', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 40, title: 'NetGSM', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 41, title: 'WhatsApp Business API', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 42, title: 'Zendesk Chat', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 43, title: 'Tawk.to', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 44, title: 'JivoChat', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 45, title: 'TikTok product feed', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 46, title: 'Facebook/Instagram product feed', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 47, title: 'Google Merchant Center feed', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 48, title: 'TikTok Pixel', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 49, title: 'Facebook/Meta Pixel', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 50, title: 'Yandex.Metrica', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 51, title: 'Google Tag Manager', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
    { id: 52, title: 'Google Analytics 4', category: 'Pazarlama Entegrasyonları', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },

    // Özel
    { id: 53, title: 'Paraşüt Entegrasyonu', category: 'Özel Entegrasyonlar', desc: 'Müşteri deneyimini iyileştirmek ve süreçleri otomatize etmek için güçlü entegrasyon çözümü.' },
];

const CATEGORIES = [
    { name: 'Tümü', icon: Plug },
    { name: 'Pazaryerleri', icon: ShoppingCart },
    { name: 'Ödeme Entegrasyonları', icon: CreditCard },
    { name: 'Kargo Entegrasyonları', icon: Truck },
    { name: 'Pazarlama Entegrasyonları', icon: MessageCircle },
    { name: 'Muhasebe / Finans Entegrasyonları', icon: FileText },
    { name: 'Stok / ERP / Tedarik Entegrasyonları', icon: Database },
    { name: 'Üyelik, Kampanya ve Sadakat', icon: Plug },
    { name: 'Özel Entegrasyonlar', icon: Plug },
];

export default function IntegrationsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    const filteredIntegrations = INTEGRATIONS.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tümü' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="p-8 w-full mx-auto h-full flex flex-col">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <div className="p-2 bg-[#E69419]/10 rounded-xl text-[#E69419]">
                            <Plug size={24} />
                        </div>
                        Entegrasyon Merkezi
                    </h1>
                    <p className="text-gray-500 text-sm mt-1 ml-12">İşinizi büyütmek için ihtiyaç duyduğunuz tüm araçlar burada.</p>
                </div>

                <div className="relative w-full md:w-64">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Entegrasyon ara..."
                        className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#E69419] shadow-sm transition-all"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar mb-6 select-none">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${selectedCategory === cat.name
                                ? 'bg-[#111] text-white border-[#111]'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {React.createElement(cat.icon, { size: 14 })}
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
                {filteredIntegrations.map(item => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E69419]/30 transition-all flex flex-col h-64 group relative overflow-hidden">

                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-gray-400 text-xl group-hover:scale-110 transition-transform">
                                {item.title.substring(0, 1)}
                            </div>
                            <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md tracking-wider">
                                {item.category.split(' ')[0]}
                            </span>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1" title={item.title}>{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
                            {item.desc}
                        </p>

                        <div className="mt-auto">
                            <button className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-[#111] hover:text-white hover:border-[#111] transition-colors flex items-center justify-center gap-2">
                                <ExternalLink size={14} /> İncele ve Başlat
                            </button>
                        </div>

                        {/* Hover Effect Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E69419] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                ))}

                {filteredIntegrations.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-400 flex flex-col items-center">
                        <Plug size={48} className="mb-4 opacity-20" />
                        <p>Aradığınız kriterlere uygun entegrasyon bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
