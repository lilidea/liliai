"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Calendar } from 'lucide-react';

const Blog1 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const posts = [
    { title: "Yapay Zeka ve Geleceğin Teknolojileri", date: "12 Ocak 2024", cat: "Teknoloji" },
    { title: "Marka Kimliği Oluştururken Dikkat Edilmesi Gerekenler", date: "08 Ocak 2024", cat: "Tasarım" },
    { title: "Dijital Pazarlamada Yeni Trendler", date: "03 Ocak 2024", cat: "Pazarlama" }
  ];

  return (
    <section className="py-20 bg-gray-50">
       <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Blog & Haberler</h2>
             <p className="text-gray-500">Sektördeki son gelişmeleri ve deneyimlerimizi paylaşıyoruz.</p>
          </div>

          <div className="space-y-8">
             {posts.map((post, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center gap-6 md:gap-8 group">
                   <div className="w-full md:w-48 h-32 bg-gray-200 rounded-2xl overflow-hidden shrink-0">
                      <img 
                        src={`https://source.unsplash.com/random/400x300/?${encodeURIComponent('office ' + i)}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => e.target.src=`https://placehold.co/400x300/e5e7eb/gray?text=Blog+${i+1}`}
                      />
                   </div>
                   <div className="flex-1 text-center md:text-left space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                         <span style={{ color: primaryColor }}>{post.cat}</span>
                         <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                         {post.title}
                      </h3>
                      <p className="text-gray-500 line-clamp-2">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                   </div>
                   <button className="px-6 py-2 rounded-full border border-gray-200 font-bold text-sm hover:bg-black hover:text-white hover:border-black transition shrink-0 hidden md:block">
                      Oku
                   </button>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Blog1;
