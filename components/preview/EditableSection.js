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
            className={`relative group transition-all duration-300 ${isActive
                    ? 'ring-2 ring-[#0073FF] ring-offset-4 ring-offset-white z-10'
                    : 'hover:ring-2 hover:ring-[#0073FF]/50 hover:ring-offset-2'
                }`}
            onClick={(e) => {
                e.stopPropagation();
                // Check if the click was on the div itself or a non-interactive part
                // This allows the DND handle inside to work if it has its own handlers
                onClick();
            }}
        >
            {/* Interactive Overlay - Only if not dragging? No, overlay should be behind children but capturing clicks */}
            <div className={`absolute inset-0 cursor-pointer transition-colors z-20 ${isActive ? 'bg-transparent pointer-events-none' : 'bg-transparent hover:bg-[#E69419]/5'
                }`}></div>

            {/* Edit Badge - Moved to a safer corner or simplified */}
            <div className={`
                absolute top-4 right-4 z-40 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all transform pointer-events-none
                ${isActive
                    ? 'bg-[#0073FF] text-white scale-100 opacity-100'
                    : 'bg-white text-neutral-800 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                }
            `}>
                <Edit3 size={14} />
                {isActive ? 'Düzenleniyor' : 'Düzenle'}
            </div>

            {/* Children (Component + DND Handle) */}
            <div className="relative z-30">
                {children}
            </div>
        </div>
    );
}
