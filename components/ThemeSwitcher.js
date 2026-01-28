"use client";
import React from 'react';
import { useTheme, themes } from '@/app/context/ThemeContext';
import { Palette, Check } from 'lucide-react';

export default function ThemeSwitcher() {
  const { currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`
        absolute bottom-full right-0 mb-4 bg-white dark:bg-neutral-800 
        rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 
        p-2 w-64 transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}
      `}>
        <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">
          Tema Seçimi
        </div>
        <div className="space-y-1">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                changeTheme(key);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors
                ${currentTheme === key 
                  ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white' 
                  : 'hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300'}
              `}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full shadow-sm border border-black/10" 
                  style={{ backgroundColor: theme.colors.primary }}
                />
                {theme.name}
              </div>
              {currentTheme === key && <Check size={16} className="text-green-500" />}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
        title="Temayı Değiştir"
      >
        <Palette size={20} />
      </button>
    </div>
  );
}
