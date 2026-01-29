"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { useTheme } from '@/app/context/ThemeContext';
import { Send, Sparkles, ChevronRight, Grid, Type, X } from 'lucide-react';
import LiliaiMessage from './LiliaiMessage';
import { getAvailableComponents } from '@/components/registry';

// Static Suggestions Map to save tokens
const CONTEXT_SUGGESTIONS = {
    header: [
        { label: 'Tasarımı Değiştir', action: 'PICK_COMPONENT', type: 'header' },
        { label: 'Başlığı Düzenle', action: 'AI_PROMPT', prompt: 'Header başlığını ve buton metinlerini düzenlemek istiyorum.' },
    ],
    hero: [
        { label: 'Tasarımı Değiştir', action: 'PICK_COMPONENT', type: 'hero' },
        { label: 'Sloganı Yeniden Yaz', action: 'AI_PROMPT', prompt: 'Hero sloganını daha etkileyici hale getir.' },
        { label: 'Görseli Değiştir', action: 'AI_PROMPT', prompt: 'Arka plan görselini değiştirmek istiyorum.' },
    ],
    footer: [
        { label: 'Tasarımı Değiştir', action: 'PICK_COMPONENT', type: 'footer' },
        { label: 'Linkleri Düzenle', action: 'AI_PROMPT', prompt: 'Footer linklerini düzenle.' },
    ],
    about: [
        { label: 'Tasarımı Değiştir', action: 'PICK_COMPONENT', type: 'about' },
        { label: 'Metni Profesyonelleştir', action: 'AI_PROMPT', prompt: 'Hakkımızda yazısını daha kurumsal bir dille yaz.' },
    ],
    contact: [
        { label: 'Tasarımı Değiştir', action: 'PICK_COMPONENT', type: 'contact' },
        { label: 'Adres Ekle', action: 'AI_PROMPT', prompt: 'İletişim bilgilerine yeni bir adres ekle.' },
    ]
};

export default function CustomizationSidebar({ isOpen, onClose, activeSection, activeCategory }) {
  const { siteData, updateSiteData, updateSelection } = useSite();
  const { changeTheme } = useTheme();
  
  const [messages, setMessages] = useState([
    { 
        role: 'assistant', 
        content: 'Merhaba! Ben Liliai. Sitenizi tasarlamaya hazır mısınız? 🚀', 
        suggestions: [
            { label: 'Tema Rengini Değiştir', action: 'SHOW_THEMES' },
            { label: 'Yazı Tiplerini Değiştir', action: 'AI_PROMPT', prompt: 'Yazı tiplerini değiştirmek istiyorum.' }
        ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Context Awareness - LOCAL ONLY (Token Saving)
  useEffect(() => {
    if (activeSection && isOpen) {
        // Fallback or specific mapping
        const category = activeCategory || activeSection;
        const suggestions = CONTEXT_SUGGESTIONS[category] || [
             { label: 'İçeriği Düzenle', action: 'AI_PROMPT', prompt: `Bu bölümün (${activeSection}) içeriğini düzenle.` }
        ];

        const contextMsg = {
            role: 'assistant',
            content: `Şu an **${formatSectionName(activeSection)}** bölümündesiniz.`,
            suggestions: suggestions
        };
        setMessages(prev => [...prev, contextMsg]);
    }
  }, [activeSection, isOpen]);

  const handleSend = async (text = input) => {
    if (!text || !text.trim()) return;

    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        const payload = {
            messages: messages.concat(userMsg),
            siteData,
            activeContext: { section: activeSection, category: activeCategory }
        };

        const res = await fetch('/api/ai/chat', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        
        const data = await res.json();
        
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: data.reply,
            action: data.action,
            suggestions: data.suggestions // Ensure API still returns string-array suggestions, we might need to map them to objects if we want consistency, but simple strings are fine for generic ones
        }]);

    } catch (e) {
        console.error(e);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Bağlantı koptu, tekrar dener misiniz?' }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleManualAction = (item) => {
      // Handle local actions that don't need AI
      if (item.action === 'PICK_COMPONENT') {
          // Show component picker
          const available = getAvailableComponents(item.type);
          setMessages(prev => [...prev, {
              role: 'assistant',
              content: `Aşağıdaki ${item.type} tasarımlarından birini seçebilirsiniz:`,
              componentPicker: {
                  category: item.type,
                  options: available
              }
          }]);
      } else if (item.action === 'AI_PROMPT') {
          handleSend(item.prompt);
      } else if (item.action === 'SHOW_THEMES') {
          // Show simple theme buttons
           setMessages(prev => [...prev, {
              role: 'assistant',
              content: `Hangi renk temasını tercih edersiniz?`,
              themePicker: true
          }]);
      }
  };

  const handleComponentSelect = (category, id) => {
      updateSelection(category, id);
      setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Tasarım güncellendi! Başka ne yapalım?',
          applied: true
      }]);
  };

  const handleThemeSelect = (themeKey) => {
      changeTheme(themeKey);
      
      // Also update siteData for legacy components using inline styles
      // We need to import 'themes' object or accept it as arg, or access via context
      // Since 'changeTheme' is from context but 'themes' object might be needed.
      // Let's assume we can get theme colors from the hook if we export them, or simple lookup.
      // Importing themes directly from context file seems easiest.
      import('@/app/context/ThemeContext').then(({ themes }) => {
          const theme = themes[themeKey];
          if (theme) {
              updateSiteData({
                  primaryColor: theme.colors.primary,
                  secondaryColor: theme.colors.secondary,
                  accentColor: theme.colors.accent
              });
          }
      });

      setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Tema rengi güncellendi.',
          applied: true
      }]);
  }
  
  const formatSectionName = (sec) => sec ? sec.charAt(0).toUpperCase() + sec.slice(1) : 'Bölüm';

  return (
    <div className={`
      fixed top-0 right-0 h-full w-full md:w-[400px] bg-white/95 md:bg-white/80 backdrop-blur-xl border-l border-white/20 shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      
      {/* Header */}
      <div className="h-14 md:h-16 flex items-center justify-between px-4 md:px-6 border-b border-black/5 shrink-0 bg-white/50">
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden shadow-lg border border-white/50">
                <img src="/app_icon.png" className="w-full h-full object-cover" alt="Liliai" />
            </div>
            <div>
                <h2 className="font-bold text-neutral-800 text-sm tracking-tight">Liliai Studio</h2>
                <div className="flex items-center gap-1.5 opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-medium uppercase tracking-wider">Online</span>
                </div>
            </div>
        </div>
        <button 
          onClick={onClose} 
          className="p-2 hover:bg-black/5 rounded-full transition-colors md:block"
        >
            {/* X icon on mobile, ChevronRight on desktop */}
            <X size={22} className="text-neutral-600 md:hidden" />
            <ChevronRight size={20} className="text-neutral-500 hidden md:block" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar">
         {messages.map((msg, idx) => (
             <LiliaiMessage 
                key={idx} 
                message={{...msg, index: idx}} 
                isLast={idx >= messages.length - 2} // Show suggestions for last few messages
                onManualAction={handleManualAction}
                onComponentSelect={handleComponentSelect}
                onThemeSelect={handleThemeSelect}
             />
         ))}
         
         {isLoading && (
             <div className="flex items-center gap-2 text-neutral-400 text-sm ml-2 animate-pulse">
                <Sparkles size={14} />
                <span>Liliai düşünüyor...</span>
             </div>
         )}
         <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/90 border-t border-black/5 shrink-0 pb-8">
        <div className="relative group">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Liliai'ye bir talimat ver..."
                className="w-full bg-neutral-100/50 border border-neutral-200 rounded-2xl pl-4 pr-12 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none shadow-sm group-hover:shadow-md"
            />
            <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-2 bg-black text-white rounded-xl shadow-lg hover:bg-neutral-800 disabled:opacity-50 disabled:scale-95 transition-all active:scale-90"
            >
                <Send size={16} />
            </button>
        </div>
        <div className="text-[10px] text-center text-neutral-400 mt-3 font-medium tracking-wide">
            Powered by Gemini • Liliai Intelligence v2.0
        </div>
      </div>

    </div>
  );
}
