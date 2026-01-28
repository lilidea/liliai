"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, Check, ChevronDown } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';
import { Button } from '@/components/Button';

export default function ChatAssistant({ isOpen: isVisible }) {
  const { siteData, updateSiteData } = useSite();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Merhaba! Ben Liliai asistanıyım. Sitenizde ne değiştirmek istersiniz?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Effect to auto-open if it's the first time and edit mode is active? 
  // Let's keep it manual for now, or respect the prop if we want it to be controllable.
  
  if (!isVisible) return null;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage], // Send history
          siteData: siteData // Send context
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.reply,
          actions: data.actions
        }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Bir hata oluştu, lütfen tekrar deneyin.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyActions = (actions, messageIndex) => {
    if (!actions) return;
    
    // Apply updates
    // Handle nested updates like selectedComponents carefully if the API returns a full object or partial
    // The API prompt suggests sending full objects for nested things or we handle merging here.
    // Let's assume the API tries its best.
    
    updateSiteData(actions);

    // Mark as applied visually (optional, local state)
    // For now, we just give a success toast or change the button state
    const newMessages = [...messages];
    newMessages[messageIndex].applied = true;
    setMessages(newMessages);
  };

  return (
    <>
      {/* Trigger Button (Only visible if chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 animate-bounce-subtle"
        >
          <Sparkles size={24} />
          <span className="font-bold pr-2">AI Asistan</span>
        </button>
      )}

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none translate-y-10'
        }`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-t-2xl flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
                <Bot size={20} />
            </div>
            <div>
                <h3 className="font-bold">Liliai Asistan</h3>
                <p className="text-xs text-blue-100">Yapay zeka ile siteni düzenle</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
                
                {/* Actions Card */}
                {msg.actions && (
                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <div className="text-xs font-bold text-neutral-500 uppercase mb-2">Önerilen Değişiklikler</div>
                    <ul className="text-xs space-y-1 mb-3 text-neutral-600 bg-neutral-50 p-2 rounded border border-neutral-100 font-mono">
                         {Object.keys(msg.actions).slice(0, 3).map(key => (
                              <li key={key} className="truncate">
                                • {key}: <span className="text-blue-600">{JSON.stringify(msg.actions[key]).substring(0, 20)}...</span>
                              </li>
                         ))}
                    </ul>
                    
                    {msg.applied ? (
                        <div className="flex items-center gap-2 text-green-600 font-bold text-xs bg-green-50 p-2 rounded-lg justify-center">
                            <Check size={14} /> Uygulandı
                        </div>
                    ) : (
                        <Button 
                            size="sm" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => handleApplyActions(msg.actions, idx)}
                        >
                            <Sparkles size={14} className="mr-2" /> Değişiklikleri Uygula
                        </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-neutral-200">
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce animation-delay-200"></span>
                        <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce animation-delay-400"></span>
                    </div>
                 </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-neutral-200 rounded-b-2xl shrink-0">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bir şeyler yazın..."
              className="flex-1 bg-neutral-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            />
            <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-3 rounded-xl disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
                <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
