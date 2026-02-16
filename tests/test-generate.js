
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testGenerate() {
    console.log('Testing /api/generate (Full Site)...');

    const payload = {
        type: 'full_site',
        companyName: 'Liliai Test Corp',
        sector: 'Technology',
        aboutText: 'We provide AI solutions for businesses.',
        pages: ['Home', 'About', 'Services', 'Contact']
    };

    try {
        const response = await fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ Full Site Generation Success!');
            console.log('Branding:', data.data.branding);
            console.log('Selections:', data.data.selections);
        } else {
            console.error('❌ Generation Failed:', data.error);
        }
    } catch (error) {
        console.error('❌ Request Error:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.log('⚠️  Make sure the Next.js server is running on localhost:3000');
        }
    }
}

testGenerate();
