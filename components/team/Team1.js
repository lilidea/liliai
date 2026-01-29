"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Linkedin, Twitter, Mail } from 'lucide-react';

// Avatar colors for team members
const avatarColors = [
  'from-orange-400 to-red-500',
  'from-blue-400 to-purple-500',
  'from-green-400 to-teal-500',
  'from-pink-400 to-rose-500',
];

export default function Team1() {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const team = [
    { name: "Ahmet Yılmaz", role: "Kurucu & CEO" },
    { name: "Ayşe Kaya", role: "Kreatif Direktör" },
    { name: "Mehmet Demir", role: "Yazılım Müdürü" },
    { name: "Zeynep Çelik", role: "Pazarlama Uzmanı" },
  ];

  return (
    <section className="py-24 bg-neutral-50" id="team">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Ekibimizle Tanışın</span>
          <h2 className="text-4xl font-bold mt-2 text-neutral-900">Arkadaki Güç</h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
            Her biri alanında uzman, tutkulu ve yaratıcı ekibimizle projelerinizi en üst seviyeye taşıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full blur-xl opacity-20 scale-90 group-hover:scale-110 transition-transform" style={{ backgroundColor: primaryColor }}></div>
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-sm relative z-10`}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-neutral-400 mb-4">{member.role}</p>
              
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <button className="p-2 rounded-full bg-neutral-100 hover:bg-black hover:text-white transition-colors">
                  <Linkedin size={16} />
                </button>
                <button className="p-2 rounded-full bg-neutral-100 hover:bg-black hover:text-white transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="p-2 rounded-full bg-neutral-100 hover:bg-black hover:text-white transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
