"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

const About3 = () => {
  const { siteData } = useSite();
  const { primaryColor, secondaryColor, aboutText, companyName } = siteData;

  const stats = [
    { label: "Yıllık Tecrübe", value: "10+", icon: Award },
    { label: "Mutlu Müşteri", value: "500+", icon: Users },
    { label: "Tamamlanan Proje", value: "95%", icon: CheckCircle },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold mb-6">
              Hakkımızda
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {companyName || "Şirketiniz"} ile <span style={{ color: primaryColor }}>Geleceği Şekillendirin</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutText || "Sektördeki yenilikçi yaklaşımımız ve uzman kadromuz ile işinizi bir sonraki seviyeye taşıyoruz. Müşteri memnuniyeti odaklı çözümlerimizle tanışın."}
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900 mb-1" style={{ color: primaryColor }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <button 
              className="mt-10 flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: secondaryColor }}
            >
              Hikayemizi Okuyun <ArrowRight size={20} />
            </button>
          </div>

          {/* Right: Visual */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl bg-gray-100 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                (Görsel Alanı)
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Onaylı Kalite</div>
                    <div className="text-xs text-gray-500">Uluslararası standartlar</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decor Elements */}
            <div 
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <div 
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: secondaryColor }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About3;
