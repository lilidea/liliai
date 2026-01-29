"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Team6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const items = [
        { n: "Kaan", r: "Backend" }, { n: "Sude", r: "Social" }, { n: "Oğuz", r: "DevOps" },
        { n: "Meryem", r: "QA" }, { n: "Emre", r: "HR" }, { n: "Leman", r: "Legal" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee py-20 border-y border-gray-100 italic">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-10 px-20 group cursor-default">
                        <span className="text-6xl md:text-8xl font-black text-gray-900 group-hover:text-transparent group-hover:webkit-text-stroke transition-all" style={{ WebkitTextStrokeColor: primaryColor, WebkitTextStrokeWidth: '2px' }}>
                            {item.n}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:scale-150 transition" style={{ backgroundColor: primaryColor }}></div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: inline-flex;
                    width: max-content;
                }
            `}</style>
        </section>
    );
};

export default Team6;
