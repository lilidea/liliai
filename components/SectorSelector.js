"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { Input } from './Input';
import { SECTORS } from '@/utils/sectorMappings';

export const SectorSelector = ({ value, onChange, placeholder = "Sektör Yazın veya Seçin..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef(null);

    // Find the label for the current value
    const selectedSector = SECTORS.find(s => s.id === value);
    const displayValue = selectedSector ? selectedSector.label : search;

    // Filter sectors based on search
    const filteredSectors = SECTORS.filter(s =>
        s.label.toLowerCase().includes(search.toLowerCase()) ||
        s.id.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 8); // Limit results for better performance and UI

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (sector) => {
        onChange({ target: { name: 'sector', value: sector.id } });
        setSearch("");
        setIsOpen(false);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'Enter') setIsOpen(true);
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                setHighlightedIndex(prev => (prev < filteredSectors.length - 1 ? prev + 1 : prev));
                e.preventDefault();
                break;
            case 'ArrowUp':
                setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
                e.preventDefault();
                break;
            case 'Enter':
                if (highlightedIndex >= 0) {
                    handleSelect(filteredSectors[highlightedIndex]);
                }
                e.preventDefault();
                break;
            case 'Escape':
                setIsOpen(false);
                break;
        }
    };

    return (
        <div className="relative w-full" ref={containerRef}>
            <div className="relative">
                <Input
                    type="text"
                    value={isOpen ? search : (selectedSector ? selectedSector.label : "")}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if (!isOpen) setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="pr-12" // Space for icon
                    autoComplete="off"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-neutral-400 pointer-events-none">
                    {isOpen ? <Search size={18} className="animate-in fade-in zoom-in duration-200" /> : <ChevronDown size={18} />}
                </div>
            </div>

            {/* Dropdown Suggestions */}
            {isOpen && filteredSectors.length > 0 && (
                <div className="absolute z-[100] w-full mt-2 bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                        {filteredSectors.map((sector, index) => {
                            const isSelected = value === sector.id;
                            const isHighlighted = highlightedIndex === index;

                            return (
                                <div
                                    key={sector.id}
                                    onClick={() => handleSelect(sector)}
                                    onMouseEnter={() => setHighlightedIndex(index)}
                                    className={`
                    flex items-center justify-between px-5 py-3.5 cursor-pointer transition-colors
                    ${isHighlighted ? 'bg-orange-50 text-[#E69419]' : 'text-neutral-700'}
                    ${isSelected ? 'font-bold' : 'font-medium'}
                  `}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm">{sector.label}</span>
                                        <span className="text-[10px] uppercase tracking-wider opacity-40">{sector.id.split('_')[0]}</span>
                                    </div>
                                    {isSelected && <Check size={16} className="text-[#E69419]" />}
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer Info */}
                    <div className="bg-neutral-50 px-5 py-2 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                            {filteredSectors.length} sonuç bulundu
                        </span>
                        <span className="text-[10px] text-neutral-300">
                            Seçmek için tıklayın veya Enter'a basın
                        </span>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {isOpen && search && filteredSectors.length === 0 && (
                <div className="absolute z-[100] w-full mt-2 bg-white border border-neutral-200 rounded-2xl shadow-2xl p-6 text-center animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-neutral-400 font-medium">"{search}" için bir sektör bulunamadı.</p>
                    <p className="text-xs text-neutral-300 mt-1">Lütfen listeden birini seçin veya aramayı değiştirin.</p>
                </div>
            )}
        </div>
    );
};
