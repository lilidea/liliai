"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Contact6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-32 bg-white text-center">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="w-12 h-12 rounded-full border-4 border-black mx-auto mb-10 flex items-center justify-center font-black" style={{ color: primaryColor, borderColor: primaryColor }}>?</div>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 uppercase tracking-tighter">Bir Sorum Var.</h2>
                <p className="text-xl text-gray-500 mb-20 font-medium">
                    Aklınıza takılan her şeyi bize sorabilirsiniz. En kısa sürede yanıtlayacağımızdan emin olabilirsiniz.
                </p>

                <form className="space-y-12">
                    <input
                        type="email"
                        placeholder="E-posta adresinizi bırakın..."
                        className="w-full text-center text-3xl font-black text-gray-900 placeholder:text-gray-100 border-none focus:ring-0 border-b-4 border-gray-50 focus:border-black transition-colors pb-8"
                    />
                    <button className="px-12 py-5 rounded-full bg-black text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition shadow-2xl" style={{ backgroundColor: primaryColor }}>
                        Soru Sorun
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact6;
