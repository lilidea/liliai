// Comprehensive Sector List & Mappings
export const SECTORS = [
    { id: 'tech', label: 'Teknoloji & Yazılım' },
    { id: 'health', label: 'Sağlık & Medikal' },
    { id: 'const', label: 'İnşaat & Mimarlık' },
    { id: 'food', label: 'Gıda & Restoran' },
    { id: 'beauty', label: 'Güzellik & Bakım' },
    { id: 'retail', label: 'Mağazacılık & Perakende' },
    { id: 'auto', label: 'Otomotiv & Servis' },
    { id: 'pro', label: 'Profesyonel Hizmetler (Hukuk, Danışmanlık vb.)' },
    { id: 'edu', label: 'Eğitim & Kurslar' },
    { id: 'event', label: 'Etkinlik & Turizm' },
    { id: 'other', label: 'Diğer' }
];

// Reusable Templates (to save tokens and configuration effort)
const TEMPLATES = {
    corporate: {
        design: {
            header: 'header4', hero: 'hero2', about: 'about1', services: 'services1', footer: 'footer2',
            legal: 'legal1', team: 'team1', pricing: 'pricing1', blog: 'blog1'
        },
        pages: ['Hakkımızda', 'Hizmetler', 'Referanslar', 'İletişim']
    },
    creative: {
        design: {
            header: 'header3', hero: 'hero4', about: 'about2', services: 'services2', projects: 'projects3', footer: 'footer3',
            gallery: 'gallery1', blog: 'blog2'
        },
        pages: ['Hakkımızda', 'Hizmetler', 'Projeler', 'Blog', 'İletişim']
    },
    local: {
        design: {
            header: 'header2', hero: 'hero1', about: 'about1', services: 'services3', footer: 'footer1',
            appointment: 'appointment1', pricing: 'pricing2'
        },
        pages: ['Hizmetler', 'Fiyatlar', 'İletişim', 'Yol Tarifi']
    },
    visual: {
        design: {
            header: 'header1', hero: 'hero3', about: 'about3', gallery: 'gallery1', footer: 'footer1',
            menu: 'menu1', productgrid: 'productgrid1'
        },
        pages: ['Hakkımızda', 'Galeri', 'Menü/Ürünler', 'İletişim']
    },
    medical: {
        design: {
            header: 'header2', hero: 'hero1', about: 'about1', services: 'services1', team: 'team2', footer: 'footer1',
            appointment: 'appointment1', legal: 'legal1'
        },
        pages: ['Tedaviler', 'Ekibimiz', 'Randevu Al', 'İletişim']
    }
};

// Helper to get defaults with content
export const getSectorDefaults = (sectorId) => {
    let defaults = TEMPLATES.corporate; // Fallback

    // 1. Tech
    if (sectorId === 'tech') defaults = { ...TEMPLATES.creative, design: { ...TEMPLATES.creative.design } };

    // 2. Health
    else if (sectorId === 'health') defaults = { ...TEMPLATES.medical, design: { ...TEMPLATES.medical.design } };

    // 3. Construction & Trades
    else if (sectorId === 'const') defaults = { ...TEMPLATES.local, pages: ['Hizmetler', 'Referanslar', 'İletişim'] };

    // 4. Food
    else if (sectorId === 'food') defaults = { ...TEMPLATES.visual, pages: ['Menü', 'Galeri', 'Hakkımızda', 'İletişim'] };

    // 5. Beauty
    else if (sectorId === 'beauty') defaults = { ...TEMPLATES.visual, pages: ['Hizmetler', 'Fiyat Listesi', 'Galeri', 'Randevu'] };

    // 6. Retail
    else if (sectorId === 'retail') defaults = { ...TEMPLATES.visual, pages: ['Ürünler', 'Kampanyalar', 'Hakkımızda', 'İletişim'] };

    // 7. Auto
    else if (sectorId === 'auto') defaults = { ...TEMPLATES.local, pages: ['Hizmetler', 'Randevu', 'İletişim'] };

    // 8. Professional
    else if (sectorId === 'pro') defaults = { ...TEMPLATES.corporate, pages: ['Uzmanlık Alanları', 'Ekibimiz', 'Blog', 'İletişim'] };

    // 9. Education
    else if (sectorId === 'edu') defaults = { ...TEMPLATES.corporate, pages: ['Eğitimler', 'Kayıt Bilgileri', 'Hakkımızda', 'İletişim'] };

    // 10. Events & Tourism
    else if (sectorId === 'event') defaults = { ...TEMPLATES.visual, pages: ['Hizmetler', 'Galeri', 'Referanslar', 'İletişim'] };

    // Add Mock Content for AI Sim
    return {
        ...defaults,
        content: {
            hero: {
                title: 'Sektörün Öncüsü: ' + (SECTORS.find(s => s.id === sectorId)?.label || 'Şirketiniz'),
                subtitle: 'Kaliteli hizmet ve profesyonel çözümlerle yanınızdayız.'
            },
            about: {
                title: 'Hakkımızda',
                text: 'Müşteri memnuniyetini en üst düzeyde tutarak, sektördeki tecrübemizle sizlere hizmet veriyoruz.'
            }
        }
    }
};
