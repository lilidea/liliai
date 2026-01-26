// Comprehensive Sector List & Mappings
export const SECTORS = [
    // --- Technology & Digital ---
    { id: 'tech_software', label: 'Yazılım & Bilişim' },
    { id: 'tech_marketing', label: 'Dijital Pazarlama Ajansı' },
    { id: 'tech_repair', label: 'Telefon/Bilgisayar Tamiri' },
    { id: 'tech_security', label: 'Güvenlik Sistemleri' },

    // --- Health & Medical ---
    { id: 'health_clinic', label: 'Klinik / Hastane' },
    { id: 'health_dentist', label: 'Diş Hekimi' },
    { id: 'health_vet', label: 'Veteriner Kliniği' },
    { id: 'health_diet', label: 'Diyetisyen' },
    { id: 'health_psychology', label: 'Psikolog / Danışmanlık' },
    { id: 'health_pharmacy', label: 'Eczane' },
    { id: 'health_physio', label: 'Fizyo Terapi' },

    // --- Construction & Home Services ---
    { id: 'const_company', label: 'İnşaat Şirketi' },
    { id: 'const_arch', label: 'Mimarlık & İç Mimarlık' },
    { id: 'const_plumbing', label: 'Sıhhi Tesisat' },
    { id: 'const_electric', label: 'Elektrikçi' },
    { id: 'const_cleaning', label: 'Temizlik Şirketi' },
    { id: 'const_moving', label: 'Nakliyat & Lojistik' },
    { id: 'const_landscaping', label: 'Peyzaj & Bahçe' },
    { id: 'const_solar', label: 'Güneş Enerjisi Sistemleri' },

    // --- Food & Beverage ---
    { id: 'food_restaurant', label: 'Restoran' },
    { id: 'food_cafe', label: 'Kafe & Coffee Shop' },
    { id: 'food_bakery', label: 'Pastane & Fırın' },
    { id: 'food_catering', label: 'Catering & Yemek Hizmetleri' },
    { id: 'food_organic', label: 'Organik Pazar / Şarküteri' },

    // --- Beauty & Personal Care ---
    { id: 'beauty_hair', label: 'Kuaför / Saç Tasarım' },
    { id: 'beauty_barber', label: 'Berber' },
    { id: 'beauty_nails', label: 'Tırnak Stüdyosu' },
    { id: 'beauty_spa', label: 'SPA & Masaj' },
    { id: 'beauty_tattoo', label: 'Dövme Stüdyosu' },

    // --- Retail & Shopping ---
    { id: 'retail_fashion', label: 'Giyim & Butik' },
    { id: 'retail_furniture', label: 'Mobilya Mağazası' },
    { id: 'retail_flowers', label: 'Çiçekçi' },
    { id: 'retail_pet', label: 'Pet Shop' },
    { id: 'retail_jewelry', label: 'Kuyumcu & Takı' },
    { id: 'retail_books', label: 'Kitabevi & Kırtasiye' },
    { id: 'retail_electronics', label: 'Elektronik Mağazası' },

    // --- Automotive ---
    { id: 'auto_repair', label: 'Oto Tamir & Servis' },
    { id: 'auto_wash', label: 'Oto Yıkama & Detailing' },
    { id: 'auto_rental', label: 'Araç Kiralama (Rent a Car)' },
    { id: 'auto_dealer', label: 'Oto Galeri' },

    // --- Professional Services ---
    { id: 'pro_law', label: 'Hukuk Bürosu / Avukat' },
    { id: 'pro_accounting', label: 'Mali Müşavirlik / Muhasebe' },
    { id: 'pro_insurance', label: 'Sigorta Acentesi' },
    { id: 'pro_consulting', label: 'İş Danışmanlığı' },
    { id: 'pro_realty', label: 'Emlakçı / Gayrimenkul' },

    // --- Education ---
    { id: 'edu_school', label: 'Özel Okul / Kolej' },
    { id: 'edu_kindergarten', label: 'Kreş / Anaokulu' },
    { id: 'edu_course', label: 'Özel Ders / Kurs Merkezi' },
    { id: 'edu_driving', label: 'Sürücü Kursu' },
    { id: 'edu_language', label: 'Dil Kursu' },

    // --- Events & Tourism ---
    { id: 'event_wedding', label: 'Düğün Organizasyon' },
    { id: 'event_photo', label: 'Fotoğrafçı' },
    { id: 'event_hotel', label: 'Otel / Pansiyon' },
    { id: 'event_travel', label: 'Turizm Acentesi' },
    { id: 'event_gym', label: 'Spor Salonu / Fitness' }
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
    if (sectorId.startsWith('tech_')) defaults = { ...TEMPLATES.creative, design: { ...TEMPLATES.creative.design } };
    
    // 2. Health
    else if (sectorId.startsWith('health_')) defaults = { ...TEMPLATES.medical, design: { ...TEMPLATES.medical.design } };

    // 3. Construction & Trades
    else if (sectorId.startsWith('const_')) {
        if (sectorId === 'const_arch') defaults = { ...TEMPLATES.creative, pages: ['Projeler', 'Hizmetler', 'Hakkımızda', 'İletişim'] };
        else defaults = { ...TEMPLATES.local, pages: ['Hizmetler', 'Referanslar', 'İletişim'] };
    }

    // 4. Food
    else if (sectorId.startsWith('food_')) defaults = { ...TEMPLATES.visual, pages: ['Menü', 'Galeri', 'Hakkımızda', 'İletişim'] };

    // 5. Beauty
    else if (sectorId.startsWith('beauty_')) defaults = { ...TEMPLATES.visual, pages: ['Hizmetler', 'Fiyat Listesi', 'Galeri', 'Randevu'] };

    // 6. Retail
    else if (sectorId.startsWith('retail_')) defaults = { ...TEMPLATES.visual, pages: ['Ürünler', 'Kampanyalar', 'Hakkımızda', 'İletişim'] };

    // 7. Auto
    else if (sectorId.startsWith('auto_')) defaults = { ...TEMPLATES.local, pages: ['Hizmetler', 'Randevu', 'İletişim'] };

    // 8. Professional
    else if (sectorId.startsWith('pro_')) {
        if (sectorId === 'pro_law') {
             defaults = { 
                design: { 
                    header: 'header4', hero: 'hero2', about: 'about1', services: 'services1', team: 'team1', footer: 'footer2',
                    legal: 'legal1', blog: 'blog1'
                },
                pages: ['Hakkımızda', 'Uzmanlık Alanları', 'Ekibimiz', 'İletişim'] 
             };
        } else {
             defaults = { ...TEMPLATES.corporate, pages: ['Uzmanlık Alanları', 'Ekibimiz', 'Blog', 'İletişim'] };
        }
    }

    // 9. Education
    else if (sectorId.startsWith('edu_')) defaults = { ...TEMPLATES.corporate, pages: ['Eğitimler', 'Kayıt Bilgileri', 'Hakkımızda', 'İletişim'] };

    // 10. Events & Tourism
    else if (sectorId.startsWith('event_')) {
        if (sectorId === 'event_gym') {
             defaults = { 
                design: { 
                    header: 'header1', hero: 'hero3', about: 'about2', services: 'services3', pricing: 'pricing1', footer: 'footer1',
                    gallery: 'gallery1', team: 'team3'
                },
                pages: ['Programlar', 'Üyelik/Fiyat', 'Eğitmenler', 'İletişim'] 
             };
        } else {
             defaults = { ...TEMPLATES.visual, pages: ['Hizmetler', 'Galeri', 'Referanslar', 'İletişim'] };
        }
    }

    // Add Mock Content for AI Sim
    return {
        ...defaults,
        content: {
            hero: {
                title: 'Sektörün Öncüsü: ' + (SECTORS.find(s=>s.id === sectorId)?.label || 'Şirketiniz'),
                subtitle: 'Kaliteli hizmet ve profesyonel çözümlerle yanınızdayız.'
            },
            about: {
                title: 'Hakkımızda',
                text: 'Müşteri memnuniyetini en üst düzeyde tutarak, sektördeki tecrübemizle sizlere hizmet veriyoruz.'
            }
        }
    }
};
