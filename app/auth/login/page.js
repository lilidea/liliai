"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

export default function HashLoginPage() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError('Geçersiz erişim anahtarı.');
      }
    } catch (err) {
      setError('Bağlantı hatası.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-gray-900">
      
      <div className="w-full max-w-[400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Header */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-6">
                <img src="/lilidea.svg" alt="Liliai" className="h-12 w-auto" />
            </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative group">
                <div className={`absolute inset-0 rounded-2xl transition duration-300 ${error ? 'bg-red-100' : 'bg-gray-100 group-focus-within:bg-blue-50'}`}></div>
                <div className="relative">
                    <input 
                        type="text" 
                        value={token}
                        onChange={(e) => { setToken(e.target.value); setError(''); }}
                        placeholder="lilidea-access-..."
                        className={`block w-full px-5 py-4 bg-transparent border-2 rounded-2xl text-center font-mono text-sm font-medium outline-none transition-all placeholder:text-gray-400
                            ${error 
                                ? 'border-red-200 text-red-900 focus:border-red-500' 
                                : 'border-transparent focus:border-[#0073FF] focus:bg-white'
                            }
                        `}
                        spellCheck="false"
                        autoFocus
                    />
                </div>
            </div>

            {error && (
                <div className="text-center">
                    <p className="text-xs font-bold text-red-600 animate-pulse">{error}</p>
                </div>
            )}

            <button 
                type="submit" 
                disabled={loading || !token}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
                    ${token && !loading
                        ? 'bg-[#E69419] hover:bg-[#d48612] text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-0.5' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }
                `}
            >
                {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                ) : (
                    <>Sisteme Giriş Yap <ArrowRight size={16} /></>
                )}
            </button>
        </form>

        {/* Footer */}
        <div className="mt-12 flex justify-center text-center">
            <div className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 inline-flex items-center gap-2">
                <ShieldCheck size={12} className="text-green-600" />
                <span className="text-[10px] font-medium text-gray-500 tracking-wider uppercase">End-to-End Secure</span>
            </div>
        </div>

      </div>
    </div>
  );
}
