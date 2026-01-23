"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Check, X } from 'lucide-react';

const Pricing2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900">Özellik Karşılaştırması</h2>
        </div>

        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr>
                    <th className="p-4 border-b-2 border-gray-100 w-1/3"></th>
                    <th className="p-4 border-b-2 border-gray-100 text-center text-lg font-bold">Free</th>
                    <th className="p-4 border-b-2 border-gray-100 text-center text-lg font-bold text-[var(--primary)]" style={{ '--primary': primaryColor }}>Pro</th>
                    <th className="p-4 border-b-2 border-gray-100 text-center text-lg font-bold">Ent.</th>
                 </tr>
              </thead>
              <tbody>
                 {[
                    { name: "Kullanıcı Sayısı", f: "1", p: "10", e: "Sınırsız" },
                    { name: "Depolama", f: "5GB", p: "100GB", e: "1TB" },
                    { name: "Özel Domain", f: false, p: true, e: true },
                    { name: "API Erişimi", f: false, p: true, e: true },
                    { name: "Öncelikli Destek", f: false, p: false, e: true },
                    { name: "SLA", f: false, p: false, e: true },
                 ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                       <td className="p-4 border-b border-gray-100 font-medium text-gray-700">{row.name}</td>
                       <td className="p-4 border-b border-gray-100 text-center text-gray-600">
                          {typeof row.f === 'boolean' ? (row.f ? <Check size={20} className="mx-auto text-green-500"/> : <X size={20} className="mx-auto text-gray-300"/>) : row.f}
                       </td>
                       <td className="p-4 border-b border-gray-100 text-center font-bold text-gray-900 bg-gray-50/50">
                          {typeof row.p === 'boolean' ? (row.p ? <Check size={20} className="mx-auto text-green-500"/> : <X size={20} className="mx-auto text-gray-300"/>) : row.p}
                       </td>
                       <td className="p-4 border-b border-gray-100 text-center text-gray-600">
                          {typeof row.e === 'boolean' ? (row.e ? <Check size={20} className="mx-auto text-green-500"/> : <X size={20} className="mx-auto text-gray-300"/>) : row.e}
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
