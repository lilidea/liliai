"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const posts = [
        { title: "Geleceğin Teknolojileri", cat: "İnovasyon", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", size: "lg" },
        { title: "Tasarımda Minimalizm", cat: "Dizayn", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800", size: "sm" },
        { title: "Verimlilik Sırları", cat: "İş Dünyası", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", size: "sm" },
        { title: "Ekip Çalışması", cat: "Kültür", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", size: "lg" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16 px-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">Yeni <span style={{ color: primaryColor }}>Yazılar.</span></h2>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-300">BLOG 2024</span>
                </div>

                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {posts.map((post, i) => (
                        <div key={i} className="break-inside-avoid relative rounded-[40px] overflow-hidden group border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
                            <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={post.title} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 text-white">
                                <div className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: primaryColor }}>{post.cat}</div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog4;
