import React from 'react';
import { Edit3 } from 'lucide-react';

export default function EditableSection({ 
    children, 
    isEditMode, 
    isActive, 
    onClick 
}) {
    if (!isEditMode) return children;

    return (
        <div 
            className={`relative group transition-all duration-300 ${
                isActive 
                    ? 'ring-2 ring-[#0073FF] ring-offset-4 ring-offset-white z-10' 
                    : 'hover:ring-2 hover:ring-[#0073FF]/50 hover:ring-offset-2'
            }`}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            {/* Overlay for interaction */}
            <div className={`absolute inset-0 cursor-pointer transition-colors ${
                isActive ? 'bg-transparent point-events-none' : 'bg-transparent hover:bg-[#E69419]/5'
            }`}></div>

            {/* Edit Badge */}
            <div className={`
                absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all transform
                ${isActive 
                    ? 'bg-[#0073FF] text-white scale-100 opacity-100' 
                    : 'bg-white text-neutral-800 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                }
            `}>
                <Edit3 size={14} />
                {isActive ? 'Düzenleniyor' : 'Düzenle'}
            </div>

            {children}
        </div>
    );
}
