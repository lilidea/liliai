const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
});

async function main() {
  try {
    const templates = await prisma.template.findMany();
    console.log('Connection Successful. Templates found:', templates.length);
    console.log(JSON.stringify(templates, null, 2));
  } catch (e) {
    console.error('Connection Failed:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
