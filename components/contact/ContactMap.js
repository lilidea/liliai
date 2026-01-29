import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactMap() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden rounded-3xl bg-white shadow-xl">

                    {/* Contact Form */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Bize Ulaşın</h2>
                        <p className="text-gray-600 mb-8">Sorularınız veya iş birliği teklifleriniz için formu doldurun.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Adınız</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073FF] outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">E-posta</label>
                                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073FF] outline-none transition" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Konu</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073FF] outline-none transition" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073FF] outline-none transition"></textarea>
                            </div>

                            <button className="w-full py-4 bg-[#0073FF] hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                                <Send size={18} />
                                Gönder
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0073FF]">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">E-posta</p>
                                    <p className="text-sm font-bold text-gray-900">info@sirket.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0073FF]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Telefon</p>
                                    <p className="text-sm font-bold text-gray-900">+90 555 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative min-h-[400px] bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.620197495!2d28.871754407871274!3d41.00546324317805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul!5e0!3m2!1sen!2str!4v1716383679198!5m2!1sen!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', inset: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
