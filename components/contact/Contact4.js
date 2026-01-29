"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center min-h-[80vh] bg-gray-50">
            {/* Background Blob Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: primaryColor }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-purple-500"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row bg-white rounded-[48px] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="lg:w-2/5 p-12 text-white flex flex-col justify-between" style={{ backgroundColor: primaryColor }}>
                        <div>
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Hemen <br /> Konuşalım.</h2>
                            <p className="text-white/70 mb-12 font-medium">Uzman ekibimiz size yardımcı olmak için hazır. Mesajınızı bekliyoruz!</p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-50">E-posta</div>
                                        <div className="font-bold">info@lilidea.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Telefon</div>
                                        <div className="font-bold">+90 212 987 65 43</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition">
                                <MessageSquare size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 p-12 bg-white">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Adınız</label>
                                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-black/5" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">E-posta</label>
                                    <input type="email" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-black/5" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Konu</label>
                                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-black/5" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mesajınız</label>
                                <textarea rows="4" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-black/5"></textarea>
                            </div>
                            <button className="w-full py-5 rounded-3xl bg-gray-900 text-white font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact4;
