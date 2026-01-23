"use client";
import React, { useMemo, useState, useEffect } from 'react';
import { getAvailableComponents, getComponent } from '@/components/registry';

export default function ShowcasePage() {
  const allComponents = getAvailableComponents();
  const [activeCategory, setActiveCategory] = useState('');
  
  // Group components by category (prefix)
  const groupedComponents = useMemo(() => {
    const groups = {};
    allComponents.forEach(key => {
      // Extract category from key (e.g., 'header1' -> 'header')
      const match = key.match(/^([a-z]+)/);
      const category = match ? match[1] : 'other';
      if (!groups[category]) groups[category] = [];
      groups[category].push(key);
    });
    return groups;
  }, [allComponents]);

  // Order of categories for display
  const categoryOrder = [
    'header', 
    'hero', 
    'about',
    'services', 
    'projects', 
    'team', 
    'blog', 
    'faq', 
    'contact', 
    'footer'
  ];

  // Merge ordered categories with any others found
  const allCategories = useMemo(() => {
    const others = Object.keys(groupedComponents).filter(c => !categoryOrder.includes(c));
    return [...categoryOrder, ...others].filter(c => groupedComponents[c]?.length > 0);
  }, [groupedComponents]);

  // Helper to capitalize first letter
  const visualizeCategory = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

  // Scroll to section
  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = allCategories.map(cat => document.getElementById(cat));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allCategories]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-[100] border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
           <div>
             <h1 className="text-xl font-bold text-gray-900">Bileşen Kütüphanesi</h1>
             <p className="text-xs text-gray-500">Tüm tasarım blokları</p>
           </div>
           <div className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
             Total Components: <span className="text-gray-900 font-bold">{allComponents.length}</span>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex items-start gap-8 relative z-0">
        
        {/* Sticky Sidebar */}
        <aside className="w-64 sticky top-36 hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 p-4 max-h-[calc(100vh-160px)] overflow-y-auto z-30">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 pl-2">Kategoriler</h3>
          <nav className="space-y-1">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === cat 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {visualizeCategory(cat)}
                <span className="float-right text-xs opacity-50 bg-gray-100 px-1.5 rounded-full">
                  {groupedComponents[cat].length}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-20">
          {allCategories.map(category => {
            const components = groupedComponents[category];
            return (
              <div key={category} id={category} className="scroll-mt-28 space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 uppercase tracking-wider">
                    {visualizeCategory(category)}
                  </h2>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="grid gap-12">
                  {components.map(compKey => {
                    const Component = getComponent(compKey);
                    // Special styling for absolute/transparent headers to make them visible
                    const isTransparentHeader = ['header3'].includes(compKey);
                    
                    return (
                      <div key={compKey} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-shadow hover:shadow-md">
                        <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex justify-between items-center">
                          <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                            {compKey}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                            Preview
                          </span>
                        </div>
                        <div className={`isolate relative ${isTransparentHeader ? 'bg-gray-900 min-h-[120px]' : ''}`}>
                           <Component />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
