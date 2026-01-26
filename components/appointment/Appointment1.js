import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Appointment1() {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  return (
     <section className="py-20 bg-white">
         <div className="container mx-auto px-6 max-w-5xl">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-4xl font-black mb-6">Randevu Alın</h2>
                     <p className="text-xl text-neutral-500 mb-8">
                         Size en uygun zamanı seçin, uzmanlarımız sizi bekliyor olsun. Hızlı ve kolay planlama.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0" style={{ color: primaryColor }}>
                                 <Calendar size={24} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg">Esnek Saatler</h4>
                                 <p className="text-neutral-500">Haftanın 7 günü hizmetinizdeyiz.</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0" style={{ color: primaryColor }}>
                                 <Check size={24} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg">Hızlı Onay</h4>
                                 <p className="text-neutral-500">Randevunuz anında onaylanır.</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-lg">
                     <form className="space-y-4">
                         <div className="grid grid-cols-2 gap-4">
                             <Input placeholder="Adınız" />
                             <Input placeholder="Soyadınız" />
                         </div>
                         <Input placeholder="Telefon Numaranız" type="tel" />
                         <div className="grid grid-cols-2 gap-4">
                             <Input type="date" />
                             <Input type="time" />
                         </div>
                         <textarea 
                            className="w-full p-4 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none resize-none"
                            placeholder="Notunuz..."
                            rows={3}
                         ></textarea>
                         
                         <Button variant="primary" className="w-full justify-center">
                             Randevu Oluştur
                         </Button>
                     </form>
                 </div>
             </div>
         </div>
     </section>
  );
}
