"use client";
import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Trash2, Download, Copy, RefreshCw, Globe, Server } from 'lucide-react';

const PLACEHOLDERS = {
    'Abstract': [
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800'
    ],
    'Technology': [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800'
    ],
    'Office': [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800'
    ],
    'Minimal': [
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800'
    ]
};

export default function ImagesPage() {
    const [tab, setTab] = useState('local'); // local | remote
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/files');
            const data = await res.json();
            if (data.images) setImages(data.images);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tab === 'local') fetchImages();
    }, [tab]);

    const copyPath = (text) => {
        navigator.clipboard.writeText(text);
        alert('Kopyalandı: ' + text);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto h-full flex flex-col">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <ImageIcon className="text-[#E69419]" /> Görsel Galeri
                    </h1>
                    <p className="text-gray-500 text-sm">Varlık yönetimi ve hazır görseller.</p>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setTab('local')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition ${tab === 'local' ? 'bg-[#0073FF] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                        <Server size={14} /> Yüklü Dosyalar
                    </button>
                    <button 
                        onClick={() => setTab('remote')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition ${tab === 'remote' ? 'bg-[#0073FF] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                        <Globe size={14} /> Hazır Placeholders
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto min-h-0 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                
                {tab === 'local' && (
                    loading ? (
                        <div className="grid grid-cols-4 gap-4">
                            {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-gray-100 rounded-xl animate-pulse"/>)}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {images.map(img => (
                                <div key={img} className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                                    <div className="aspect-square bg-gray-50 p-4 flex items-center justify-center relative">
                                        <img src={`/${img}`} alt={img} className="max-w-full max-h-full object-contain" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <button onClick={() => copyPath(`/${img}`)} className="p-2 bg-white rounded-full hover:scale-110 transition text-gray-900" title="Yolu Kopyala">
                                                <Copy size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-2 text-center">
                                        <p className="text-[10px] text-gray-500 truncate" title={img}>{img}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}

                {tab === 'remote' && (
                    <div className="space-y-8">
                        {Object.entries(PLACEHOLDERS).map(([category, urls]) => (
                            <div key={category}>
                                <h3 className="text-xs font-bold uppercase text-gray-400 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-[#E69419] rounded-full"></span>
                                    {category}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {urls.map((url, i) => (
                                        <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                                            <img src={url} className="w-full aspect-video object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button 
                                                    onClick={() => copyPath(url)}
                                                    className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-gray-900 border border-white hover:bg-gray-100 transition flex items-center gap-2"
                                                >
                                                    <Copy size={12} /> Kopyala
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
