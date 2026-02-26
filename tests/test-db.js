const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('--- Database Connection Test ---');
    console.log(`Connecting to: ${process.env.DATABASE_URL ? process.env.DATABASE_URL.split('@')[1] : 'URL NOT FOUND'}`);

    try {
        // Try to count templates as a simple test
        console.log('Attempting to fetch template count...');
        const count = await prisma.template.count();
        console.log(`Connection successful! Total templates: ${count}`);

        // Try to fetch one template to be sure
        if (count > 0) {
            const template = await prisma.template.findFirst();
            console.log(`Successfully fetched template: ${template.name}`);
        }
    } catch (error) {
        console.error('--- CONNECTION FAILED ---');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);

        if (error.message.includes('Can\'t reach database server')) {
            console.error('\nSUGGESTION: The database server seems unreachable. This could be due to hosting expiration, firewall settings, or the server being down.');
        } else if (error.message.includes('Access denied')) {
            console.error('\nSUGGESTION: Credentials might be incorrect or the user has been revoked.');
        }
    } finally {
        await prisma.$disconnect();
    }
}

main();
