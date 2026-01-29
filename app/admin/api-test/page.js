"use client";
import React, { useState, useEffect } from 'react';
import { Play, AlertCircle, CheckCircle, Terminal, Clock, Bookmark, ChevronRight, Trash2 } from 'lucide-react';

export default function ApiTester() {
    const [endpoint, setEndpoint] = useState('/api/ai/chat');
    const [payload, setPayload] = useState('{\n  "messages": [\n    { "role": "user", "content": "Merhaba!" }\n  ]\n}');
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [latency, setLatency] = useState(0);
    const [history, setHistory] = useState([]);

    // Load history
    useEffect(() => {
        const saved = localStorage.getItem('api_history');
        if (saved) setHistory(JSON.parse(saved));
    }, []);

    const addToHistory = (url, body, status, time) => {
        const newItem = {
            id: Date.now(),
            url,
            body: body.substring(0, 50) + '...',
            timestamp: new Date().toISOString(),
            status,
            time
        };
        const updated = [newItem, ...history].slice(0, 10);
        setHistory(updated);
        localStorage.setItem('api_history', JSON.stringify(updated));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('api_history');
    };

    const loadTemplate = (type) => {
        if (type === 'chat') {
            setEndpoint('/api/ai/chat');
            setPayload(JSON.stringify({
                messages: [{ role: "user", "content": "Bana modern bir blog sitesi için renk paleti öner." }],
                siteData: { companyName: "Liliai Test" }
            }, null, 2));
        } else if (type === 'generate') {
            setEndpoint('/api/generate');
            setPayload(JSON.stringify({
                prompt: "Bir teknoloji şirketi için Hero bölümü oluştur.",
                component: "hero1",
                siteData: { companyName: "TechCorp" }
            }, null, 2));
        }
    };

    const handleSend = async () => {
        setStatus('loading');
        setResponse(null);
        const start = Date.now();

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payload
            });

            const time = Date.now() - start;
            setLatency(time);

            const data = await res.json();
            setResponse(data);

            if (res.ok) {
                setStatus('success');
                addToHistory(endpoint, payload, 'success', time);
            } else {
                setStatus('error');
                addToHistory(endpoint, payload, 'error', time);
            }

        } catch (error) {
            setLatency(Date.now() - start);
            setStatus('error');
            setResponse({ error: error.message });
            addToHistory(endpoint, payload, 'error', Date.now() - start);
        }
    };

    return (
        <div className="h-full flex flex-col p-6 w-full mx-auto text-gray-900">
            <header className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Terminal size={24} className="text-[#E69419]" />
                        API Laboratuvarı v2
                    </h1>
                    <p className="text-gray-500 text-sm">Uç noktaları test et, hata ayıkla ve yanıtları incele.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => loadTemplate('chat')}
                        className="px-3 py-1.5 text-xs font-bold bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition"
                    >
                        <Bookmark size={14} className="text-blue-500" /> Sohbet Şablonu
                    </button>
                    <button
                        onClick={() => loadTemplate('generate')}
                        className="px-3 py-1.5 text-xs font-bold bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition"
                    >
                        <Bookmark size={14} className="text-[#0073FF]" /> Üretim Şablonu
                    </button>
                </div>
            </header>

            <div className="flex-1 flex gap-6 min-h-0">

                {/* Left: History & Controls */}
                <div className="w-64 flex flex-col gap-4">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col overflow-hidden">
                        <div className="p-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <h3 className="text-xs font-bold uppercase text-gray-500 flex items-center gap-2">
                                <Clock size={12} /> Geçmiş
                            </h3>
                            {history.length > 0 && (
                                <button onClick={clearHistory} className="text-gray-400 hover:text-red-500">
                                    <Trash2 size={12} />
                                </button>
                            )}
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {history.length === 0 ? (
                                <div className="p-8 text-center text-gray-400 text-xs">
                                    Henüz işlem yok.
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {history.map((item) => (
                                        <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer group transition">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    POST
                                                </span>
                                                <span className="text-[10px] text-gray-400">{item.time}ms</span>
                                            </div>
                                            <div className="text-xs font-mono text-gray-700 truncate mb-1">{item.url}</div>
                                            <div className="text-[10px] text-gray-400 truncate">{new Date(item.timestamp).toLocaleTimeString()}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Center: Editor */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* URL Bar */}
                    <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold font-mono">POST</span>
                        <input
                            type="text"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                            className="flex-1 text-sm font-mono text-gray-700 outline-none"
                            placeholder="/api/..."
                        />
                        <button
                            onClick={handleSend}
                            disabled={status === 'loading'}
                            className="bg-[#0073FF] hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition disabled:opacity-50"
                        >
                            {status === 'loading' ? <span className="animate-spin">⟳</span> : <Play size={16} fill="white" />}
                            Gönder
                        </button>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4 min-h-[600px]">
                        {/* Request Body */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-500 pl-1">Body (JSON)</label>
                            <textarea
                                value={payload}
                                onChange={(e) => setPayload(e.target.value)}
                                className="flex-1 bg-white border border-gray-200 rounded-xl p-4 font-mono text-xs text-gray-700 focus:border-[#0073FF] focus:ring-2 focus:ring-blue-100 outline-none resize-none shadow-sm min-h-[400px]"
                                spellCheck="false"
                            />
                        </div>

                        {/* Response */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Yanıt</label>
                                {status !== 'idle' && (
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                        {status.toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-4 relative overflow-auto custom-scrollbar group">
                                {response ? (
                                    <pre className="font-mono text-xs text-green-400 whitespace-pre-wrap">
                                        {JSON.stringify(response, null, 2)}
                                    </pre>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs">
                                         // Yanıt bekleniyor...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
