"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Activity, Search, RefreshCw, AlertTriangle, CheckCircle, Smartphone, Globe } from 'lucide-react';

export default function SecurityPage() {
    const [stats, setStats] = useState({ logs: [], usage: {}, stats: {} });
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    const fetchStats = async () => {
        setLoading(true);
        try {
            // Re-using the same endpoint logic via a new API if needed, 
            // or just assuming we might need an API to expose full stats.
            // Currently app/admin/page.js reads file directly (Server Component).
            // This is a client component, so we need an API.
            // Let's create a quick API for this or use a server action.
            // For now, I'll fetch from a new endpoint: /api/admin/security/stats
            const res = await fetch('/api/admin/security/stats');
            const data = await res.json();
            setStats(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    // Filter logs
    const filteredLogs = (stats.logs || []).filter(log => 
        log.ip.includes(filter) || (log.details && log.details.toLowerCase().includes(filter.toLowerCase()))
    );

    return (
        <div className="p-8 max-w-7xl mx-auto h-full flex flex-col">
            <header className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Shield className="text-[#0073FF]" /> Güvenlik Merkezi
                    </h1>
                    <p className="text-gray-500 text-sm">Detaylı IP izleme ve erişim kontrolü.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={fetchStats} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
                        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                    </button>
                </div>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-[#0073FF] rounded-lg"><Globe size={20}/></div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{stats.stats?.totalIPs || 0}</div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Tekil IP</div>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Lock size={20}/></div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{stats.stats?.blockedIPs || 0}</div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Engellenen</div>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                    <div className="p-2 bg-orange-50 text-[#E69419] rounded-lg"><Activity size={20}/></div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">{stats.stats?.totalGenerations || 0}</div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Toplam İşlem</div>
                    </div>
                </div>
            </div>

            {/* Detailed Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col flex-1 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="IP veya işlem ara..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0073FF]"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-auto custom-scrollbar">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-bold uppercase text-[10px] sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-3">IP Adresi</th>
                                <th className="px-6 py-3">Cihaz / Platform</th>
                                <th className="px-6 py-3">İşlem</th>
                                <th className="px-6 py-3">Zaman</th>
                                <th className="px-6 py-3">Durum</th>
                                <th className="px-6 py-3">Aksiyon</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                             {filteredLogs.map((log, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-gray-600 text-xs">
                                        {log.ip}
                                    </td>
                                    <td className="px-6 py-3 text-gray-500 text-xs flex items-center gap-2">
                                        <Smartphone size={14} className="opacity-50" />
                                        <span className="truncate max-w-[150px]">Bilinmeyen Cihaz (Web)</span>
                                    </td>
                                    <td className="px-6 py-3 text-gray-900 font-medium text-xs">
                                        {log.action}
                                        <div className="text-[10px] text-gray-400">{log.details}</div>
                                    </td>
                                    <td className="px-6 py-3 text-gray-400 text-xs">
                                        {new Date(log.timestamp).toLocaleString('tr-TR')}
                                    </td>
                                    <td className="px-6 py-3">
                                        {log.status === 'BLOCKED' ? (
                                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold border border-red-100">
                                               <Lock size={8} /> ENGELLİ
                                           </span>
                                       ) : (
                                           <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-bold border border-green-100">
                                               AKTİF
                                           </span>
                                       )}
                                    </td>
                                    <td className="px-6 py-3">
                                         {/* Placeholder for future specific ban action */}
                                         <button className="text-[10px] font-bold text-gray-400 hover:text-red-500 transition">
                                             Engelle
                                         </button>
                                    </td>
                                </tr>
                             ))}
                             {filteredLogs.length === 0 && (
                                 <tr>
                                     <td colSpan="6" className="p-8 text-center text-gray-400 text-sm">
                                         Kayıt bulunamadı.
                                     </td>
                                 </tr>
                             )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
