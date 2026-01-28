import React from 'react';
import { Ban } from 'lucide-react';

export default function BlockedPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
            <div className="w-24 h-24 bg-red-900/20 rounded-full flex items-center justify-center mb-6 border border-red-900/50">
                <Ban size={48} className="text-red-500" />
            </div>
            
            <h1 className="text-4xl font-black text-red-600 mb-2 uppercase tracking-tight">Erişim Engellendi</h1>
            <p className="text-gray-500 font-mono text-sm max-w-md">
                IP Adresiniz sistem güvenliği nedeniyle kalıcı olarak engellenmiştir.
                <br />
                <span className="text-xs text-gray-700 mt-4 block">ERR_ACCESS_DENIED_BY_POLICY</span>
            </p>
        </div>
    );
}
