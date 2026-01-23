"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const team = [
    { name: "Ahmet Yılmaz", role: "Kurucu & CEO", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Ayşe Kaya", role: "Kreatif Direktör", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Mehmet Demir", role: "Baş Yazılımcı", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Zeynep Çelik", role: "Pazarlama Müdürü", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 text-gray-900">Ekibimizle Tanışın</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, index) => (
             <div key={index} className="flex flex-col items-center group">
               <div className="mb-6 relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <span style={{ color: primaryColor }}><Linkedin size={18} /></span>
                  </div>
               </div>
               <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
               <p className="text-sm text-gray-500 mb-3">{member.role}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team2;
