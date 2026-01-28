const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const templates = [
    {
      name: "Startup & SaaS",
      category: "Startup", 
      description: "Modern girişimler için yüksek dönüşüm odaklı tasarım. Fiyatlandırma ve özellikler ön planda.",
      content: JSON.stringify({ note: "Legacy Template - Linked to /sablonlar/startup" }),
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" 
    },
    {
      name: "Kurumsal Şirket",
      category: "Corporate",
      description: "Güven ve profesyonellik yansıtan ciddi duruş. Hakkımızda ve Hizmetler odaklı.",
      content: JSON.stringify({ note: "Legacy Template - Linked to /sablonlar/kurumsal" }),
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Yaratıcı Portfolyo",
      category: "Portfolio",
      description: "Görsel ağırlıklı, minimal ve etkileyici. İşlerinizi sergilemek için ideal.",
      content: JSON.stringify({ note: "Legacy Template - Linked to /sablonlar/portfolyo" }),
      thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Hukuk & Danışmanlık",
      category: "Law",
      description: "Güven veren, ciddi ve kurumsal yapı. Avukatlar ve danışmanlar için ideal.",
      content: JSON.stringify({ note: "Legacy Template - Linked to /sablonlar/law" }),
      thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Spor & Fitness",
      category: "Gym",
      description: "Dinamik, enerjik ve harekete geçiren tasarım. Spor salonları ve stüdyolar için.",
      content: JSON.stringify({ note: "Legacy Template - Linked to /sablonlar/gym" }),
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
    }
];

async function main() {
  console.log('Seeding templates...');
  for (const t of templates) {
    await prisma.template.create({
      data: t
    });
  }
  console.log('Done!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
