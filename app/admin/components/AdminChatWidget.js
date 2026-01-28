"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, ShieldAlert, Check, X, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminChatWidget() {
    const router = useRouter();
    const [messages, setMessages] = useState([
        { role: 'model', content: 'Sistem yöneticiniz Liliai hazır. İstatistikleri sorabilir veya işlem yapmamı isteyebilirsiniz.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [pendingAction, setPendingAction] = useState(null); // { type, payload }
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, pendingAction]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg],
                    siteData: { context: 'Admin Dashboard' }
                })
            });

            const data = await res.json();
            
            if (data.reply) {
                setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
            }

            if (data.action) {
                handleAiAction(data.action);
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', content: 'Hata oluştu, lütfen tekrar deneyin.' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleAiAction = (action) => {
        console.log("AI Action Triggered:", action);
        
        if (action.type === 'BLOCK_IP') {
            setPendingAction(action);
        }
        else if (action.type === 'CREATE_TEMPLATE') {
            setMessages(prev => [...prev, { 
                role: 'model', 
                content: `🆕 **${action.payload.category}** kategorisinde yeni bir şablon oluşturmak için sizi sihirbaza yönlendiriyorum...`,
                isSystem: true 
            }]);
            setTimeout(() => {
                router.push(`/admin/templates?prompt=${encodeURIComponent(action.payload.prompt)}&category=${action.payload.category}`);
            }, 1500);
        }
        else if (action.type === 'NAVIGATE') {
            router.push(action.payload.page);
        }
    };

    const confirmAction = async () => {
        if (!pendingAction) return;

        if (pendingAction.type === 'BLOCK_IP') {
            // Call Block API here (Simulated for clear example, would normally call /api/admin/security/block)
            setMessages(prev => [...prev, { 
                role: 'model', 
                content: `✅ **${pendingAction.payload.ip}** IP adresi başarıyla engellendi!`,
                isSystem: true 
            }]);
        }
        setPendingAction(null);
    };

    const cancelAction = () => {
        setMessages(prev => [...prev, { role: 'model', content: 'İşlem iptal edildi.', isSystem: true }]);
        setPendingAction(null);
    };

    const QUICK_REPLIES = [
        "Sistem durumu nedir?",
        "Toplam kaç şablon var?",
        "Yeni şablon oluştur",
        "Son ziyaretçi sayısı?",
        "Erişim loglarını göster",
        "Engellenen IP'ler",
        "Güvenlik taraması yap"
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md shadow-gray-100 overflow-hidden border border-gray-200 h-full flex flex-col">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col items-center justify-center text-center gap-3 shrink-0">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#E69419] blur-lg opacity-20 rounded-full"></div>
                    <img src="/app_icon.png" className="w-16 h-16 rounded-2xl shadow-sm relative z-10" alt="Liliai" />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white z-20"></div>
                </div>
                <div>
                     <h3 className="font-bold text-gray-900 text-lg">Liliai Asistan</h3>
                     <p className="text-xs text-gray-500 font-medium">Akıllı Sistem Yöneticisi</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm flex gap-3 ${
                            m.role === 'user' 
                                ? 'bg-[#0073FF] text-white rounded-br-none' 
                                : m.isSystem 
                                    ? 'bg-green-50 text-green-800 border border-green-100'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}>
                            {m.isSystem && <Check size={16} className="mt-0.5 shrink-0" />}
                            <div>{m.content}</div>
                        </div>
                    </div>
                ))}

                {/* Confirm Action Card */}
                {pendingAction && pendingAction.type === 'BLOCK_IP' && (
                    <div className="mx-4 my-2 p-4 bg-red-50 border border-red-100 rounded-xl animate-in slide-in-from-bottom-2">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                                <ShieldAlert size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-red-900 text-sm">IP Engelleme Onayı</h4>
                                <p className="text-xs text-red-700 mt-1">
                                    <b>{pendingAction.payload.ip}</b> adresini engellemek/banlamak istediğinize emin misiniz?
                                </p>
                                <div className="mt-3 flex gap-2">
                                    <button 
                                        onClick={confirmAction}
                                        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition"
                                    >
                                        Evet, Engelle
                                    </button>
                                    <button 
                                        onClick={cancelAction}
                                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-lg transition"
                                    >
                                        İptal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-400 rounded-2xl rounded-bl-none px-4 py-2 text-xs flex items-center gap-1">
                            <Bot size={12} className="animate-bounce" /> Düşünüyor...
                        </div>
                    </div>
                )}
            </div>
            
            {/* Quick Replies - Always Visible */}
            {!pendingAction && (
                <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                    {QUICK_REPLIES.map(qr => (
                        <button 
                            key={qr} 
                            onClick={() => setInput(qr)}
                            className="whitespace-nowrap px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 hover:bg-[#E69419]/10 hover:text-[#E69419] hover:border-[#E69419]/20 transition"
                        >
                            {qr}
                        </button>
                    ))}
                </div>
            )}

            <div className="p-3 border-t border-gray-100 bg-gray-50 shrink-0">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Bir şeyler sor veya emir ver..."
                        className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-[#0073FF] focus:ring-2 focus:ring-blue-50 outline-none"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={loading || pendingAction}
                        className="bg-[#E69419] hover:bg-[#d48612] text-white p-2 rounded-xl transition disabled:opacity-50"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
