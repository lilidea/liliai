import React from 'react';
import { ShieldAlert, Clock, Hammer } from 'lucide-react';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function MaintenancePage() {
    // Check if we are actually in maintenance mode to prevent accidental direct access confusion
    const settings = await prisma.siteSettings.findFirst();
    const isMaintenance = settings?.maintenanceMode ?? false;

    if (!isMaintenance) {
      return (
        <div className="h-screen flex items-center justify-center bg-gray-50 text-gray-500">
           <p>Bakım modu şu an aktif değil. Lütfen ana sayfaya dönün.</p>
        </div>
      );
    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 p-12 rounded-3xl shadow-2xl max-w-lg w-full relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Hammer size={40} className="text-orange-500" />
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-4">Bakımdayız 🚧</h1>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Sistem üzerinde planlı bir geliştirme çalışması yapıyoruz. 
                    <br />Deneyimini iyileştirmek için kısa bir mola verdik.
                </p>

                <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 bg-gray-900/50 py-2 px-4 rounded-full border border-gray-700/50">
                    <Clock size={12} />
                    <span>Tahmini Süre: Çok Yakında</span>
                </div>
            </div>

             <div className="mt-8 text-gray-600 text-xs text-center font-mono">
                System ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
        </div>
    );
}
