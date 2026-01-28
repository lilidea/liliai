const { PrismaClient } = require('@prisma/client');
console.log('Initializing Prisma Client...');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Connecting to database...');
    const count = await prisma.template.count();
    console.log('Successfully connected!');
    console.log('Template count:', count);
    
    // List valid templates
    const templates = await prisma.template.findMany();
    console.log('Templates:', JSON.stringify(templates, null, 2));

  } catch (e) {
    console.error('Connection failed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
