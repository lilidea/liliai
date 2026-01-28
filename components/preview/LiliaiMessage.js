import React from 'react';
import { Bot, User, Check, Sparkles, Layout } from 'lucide-react';
import { Button } from '@/components/Button';
import { themes } from '@/app/context/ThemeContext';

export default function LiliaiMessage({ message, onManualAction, onComponentSelect, onThemeSelect, isLast }) {
    const isAi = message.role === 'assistant';
    
    return (
        <div className={`flex flex-col gap-2 ${isAi ? 'items-start' : 'items-end'}`}>
            <div className={`flex items-end gap-2 max-w-[95%] ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Avatar */}
                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm overflow-hidden border border-white/50
                    ${isAi ? 'bg-white' : 'bg-neutral-200'}
                `}>
                    {isAi ? (
                        <img src="/app_icon.png" className="w-full h-full object-cover" alt="AI" />
                    ) : (
                        <User size={16} className="text-neutral-500" />
                    )}
                </div>

                {/* Bubble */}
                <div className={`
                    p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${isAi 
                        ? 'bg-white text-neutral-800 rounded-bl-none border border-neutral-100' 
                        : 'bg-black text-white rounded-br-none'}
                `}>
                   {message.content}
                   
                   {/* COMPONENT PICKER GRID */}
                   {message.componentPicker && !message.applied && (
                       <div className="mt-3 grid grid-cols-2 gap-2 w-64 animate-in fade-in slide-in-from-bottom-2">
                           {message.componentPicker.options.map((comp) => (
                               <button 
                                   key={comp}
                                   onClick={() => onComponentSelect(message.componentPicker.category, comp)}
                                   className="group relative aspect-video bg-neutral-100 rounded-lg border-2 border-transparent hover:border-orange-500 overflow-hidden transition-all text-left"
                               >
                                   <div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:text-orange-200 bg-neutral-50">
                                       <Layout size={24} />
                                   </div>
                                   <div className="absolute bottom-0 left-0 w-full bg-white/90 p-1.5 text-[10px] font-bold text-neutral-600 truncate backdrop-blur-sm">
                                       {comp}
                                   </div>
                               </button>
                           ))}
                       </div>
                   )}

                   {/* THEME PICKER */}
                   {message.themePicker && !message.applied && (
                        <div className="mt-3 grid grid-cols-2 gap-2 w-56 animate-in fade-in slide-in-from-bottom-2">
                            {Object.entries(themes).map(([key, theme]) => (
                                <button
                                    key={key}
                                    onClick={() => onThemeSelect(key)}
                                    className="flex items-center gap-2 p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors text-xs text-left"
                                >
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                                    <span className="font-medium">{theme.name}</span>
                                </button>
                            ))}
                        </div>
                   )}

                   {/* SUCCESS STATE */}
                   {message.applied && (
                       <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center gap-1 text-xs font-bold text-green-600">
                           <Check size={12} /> Uygulandı
                       </div>
                   )}
                </div>
            </div>

            {/* SUGGESTIONS (Local or API) */}
            {isAi && message.suggestions && isLast && !message.applied && (
                 <div className="ml-10 flex flex-wrap gap-2 mt-1">
                    {message.suggestions.map((sugg, i) => {
                        // Support both string suggestions and object suggestions
                        const label = typeof sugg === 'string' ? sugg : sugg.label;
                        
                        return (
                            <button 
                                key={i}
                                className="text-xs bg-white border border-neutral-200 hover:border-orange-400 text-neutral-600 hover:text-orange-600 px-3 py-1.5 rounded-full transition-all shadow-sm"
                                onClick={() => {
                                    if (typeof sugg === 'string') {
                                         // API format fallback
                                         // We don't have a handler for raw strings passed to onManualAction easily unless we map them.
                                         // But sidebar handles string suggestions by sending them as text.
                                         // Let's pass it to onManualAction logic if possible or assume sidebar handles it via a separate prop? 
                                         // Sidebar Logic: if ManualAction matches, execute. Else if prompt, send prompt.
                                         // Actually Sidebar passed `onManualAction` which expects the Object item.
                                         // We need to differentiate.
                                         // Let's assume standard suggestions are objects now in our new Logic.
                                         // For API backward compat, if string, assume it's a prompt.
                                         onManualAction({ action: 'AI_PROMPT', prompt: sugg });
                                    } else {
                                        onManualAction(sugg);
                                    }
                                }}
                            >
                                <span className="flex items-center gap-1">
                                    <Sparkles size={10} className="text-orange-400" />
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                 </div>
            )}
        </div>
    );
}
