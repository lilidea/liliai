import React from 'react';
import { Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const team = [
    {
        name: "Ayşe Yılmaz",
        role: "Kurucu & CEO",
        bio: "Teknoloji dünyasında 15 yıllık deneyim. Vizyoner liderliği ile şirkete yön veriyor.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        social: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Mehmet Demir",
        role: "Teknoloji Direktörü (CTO)",
        bio: "Full-stack geliştirme uzmanı. Altyapı ve inovasyondan sorumlu.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        social: { linkedin: "#", github: "#" }
    },
    {
        name: "Zeynep Kaya",
        role: "Tasarım Lideri",
        bio: "Ödüllü UI/UX tasarımcısı. Kullanıcı deneyimini mükemmelleştiriyor.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        social: { dribbble: "#", instagram: "#" }
    },
    {
        name: "Can Öztürk",
        role: "Pazarlama Müdürü",
        bio: "Dijital pazarlama stratejisti. Markanın büyüme hikayesini yazıyor.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        social: { linkedin: "#", twitter: "#" }
    }
];

export default function TeamDetailed() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Takımımızla Tanışın</h2>
                    <p className="text-lg text-gray-600">Her biri kendi alanında uzman, tutkulu ve yaratıcı ekibimiz, projelerinizi en iyi şekilde hayata geçirmek için burada.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay with Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white/90 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                        <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-sm">
                                            <Linkedin size={16} />
                                        </a>
                                        <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-sm">
                                            <Twitter size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-[#0073FF] font-medium text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
