
// Curated Unsplash Image Collections by Sector
// High quality, business-appropriate visuals

const SECTOR_IMAGES = {
    // 1. Food & Cafe
    food: {
        hero: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop", // Modern Cafe
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200", // Restaurant Interior
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200", // Barista
        ],
        gallery: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", // Coffee
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800", // Food Plating
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", // Cafe
            "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?q=80&w=800", // Dessert
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"  // Social Drink
        ]
    },

    // 2. Health & Medical
    health: {
        hero: [
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200", // Hospital Hall
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200", // Doctor Talk
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200"  // Dental Clean
        ],
        gallery: [
            "https://images.unsplash.com/photo-1516574187841-693083f69b72?q=80&w=800", // Tools
            "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?q=80&w=800", // Team
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", // Lab
            "https://images.unsplash.com/photo-1581093458791-9f302e6d3959?q=80&w=800"  // Tech
        ]
    },

    // 3. Construction & Home
    const: {
        hero: [
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200", // Architect Plan
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200", // Hard hat
            "https://images.unsplash.com/photo-1516937941344-00b4ec7330f1?q=80&w=1200"  // Painting
        ],
        gallery: [
            "https://images.unsplash.com/photo-1581094794329-cd19a69ab476?q=80&w=800", // Interior
            "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=800", // Kitchen
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800", // Blueprint
            "https://images.unsplash.com/photo-1590486803833-1c5dc8ce34ac?q=80&w=800"  // Living Room
        ]
    },

    // 4. Beauty
    beauty: {
        hero: [
            "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200", // Salon
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200", // Makeup
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200"  // Hair
        ],
        gallery: [
            "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800", // Products
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800", // Hair Cut
            "https://images.unsplash.com/photo-1595476106812-75cbe27fda73?q=80&w=800", // Nails
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800"  // Spa
        ]
    },

    // 5. Tech & Corporate
    tech: {
        hero: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200", // Team working
            "https://images.unsplash.com/photo-1504384308090-c54be3853247?q=80&w=1200", // Office Code
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200"  // Meeting
        ],
        gallery: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", // Laptop
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", // Brainstorm
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800", // Presentation
            "https://images.unsplash.com/photo-1553877607-ca9836375080?q=80&w=800"  // Server
        ]
    },

    // 6. Law & Professional
    law: {
        hero: [
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200", // Gavel
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200", // Pillars
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200"  // Suit 
        ],
        gallery: [
            "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=800", // Books
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800", // Meeting
            "https://images.unsplash.com/photo-1521791136064-7985c2d11f99?q=80&w=800", // Handshake
            "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800"  // Court
        ]
    },

    // 7. Gym & Fitness
    gym: {
        hero: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200", // Gym Dark
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200", // Weights
            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200"  // Treadmill
        ],
        gallery: [
            "https://images.unsplash.com/photo-1574680096141-1c57c502aa96?q=80&w=800", // Dumbbells
            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800", // Trainer
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800", // Yoga
            "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800"  // Class
        ]
    },

    // Fallback
    default: {
        hero: ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200"],
        gallery: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
            "https://images.unsplash.com/photo-1556761175-4b46a8910a8d?q=80&w=800",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800"
        ]
    }
};

export const getImagesForSector = (sectorId) => {
    if (!sectorId) return SECTOR_IMAGES.default;

    const prefix = sectorId.split('_')[0]; // food, health, const, etc.

    // Specific Mapping Overrides
    if (sectorId === 'pro_law') return SECTOR_IMAGES.law;
    if (sectorId === 'event_gym') return SECTOR_IMAGES.gym;

    return SECTOR_IMAGES[prefix] || SECTOR_IMAGES.default;
};

export const getRandomImage = (sectorId, type = 'hero') => {
    const sectorImages = getImagesForSector(sectorId);

    // Try requested type
    let images = sectorImages[type];

    // Fallback 1: 'hero'
    if (!images || images.length === 0) {
        images = sectorImages['hero'];
    }

    // Fallback 2: 'gallery'
    if (!images || images.length === 0) {
        images = sectorImages['gallery'];
    }

    // Fallback 3: Default Hero
    if (!images || images.length === 0) {
        images = SECTOR_IMAGES.default.hero;
    }

    if (!images) return ""; // Should not happen given fallbacks

    return images[Math.floor(Math.random() * images.length)];
};
