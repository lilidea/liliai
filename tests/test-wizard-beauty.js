
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testWizardFlow() {
    console.log('🚀 Testing Wizard Flow: Güzellik Salonu...');

    const siteData = {
        companyName: 'Lilia Güzellik Merkezi',
        sector: 'Kuaför / Saç Tasarım', // SECTORS listesinden bir etiket
        pages: ['Hakkımızda', 'Hizmetler', 'Blog', 'İletişim']
    };

    try {
        console.log('\n1. Generating Site Structure and Content (gpt-4o)...');
        const contentPromise = fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'full_site',
                companyName: siteData.companyName,
                sector: siteData.sector,
                pages: siteData.pages
            })
        });

        console.log('2. Generating Hero Image (DALL-E 3)...');
        const imagePromise = fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'generate_image',
                prompt: `A high quality, professional, 4k website banner for a ${siteData.sector} business named ${siteData.companyName}. Style: modern, impressive.`,
                style: 'vivid'
            })
        });

        const [contentRes, imageRes] = await Promise.all([contentPromise, imagePromise]);

        const contentResult = await contentRes.json();
        const imageResult = await imageRes.json();

        if (contentResult.success) {
            console.log('✅ Content Generation Success!');
            console.log('--- AI Branding ---');
            console.log(contentResult.data.branding);
            console.log('\n--- AI Selections ---');
            console.log(contentResult.data.selections);
            console.log('\n--- AI Content (Hizmetler) ---');
            console.log(contentResult.data.content.services?.items?.slice(0, 3));
            console.log('\n--- AI Content (Blog) ---');
            console.log(contentResult.data.content.blog?.slice(0, 2));
        } else {
            console.error('❌ Content Generation Failed:', contentResult.error);
        }

        if (imageResult.success) {
            console.log('\n✅ DALL-E 3 Image Success!');
            console.log('Image URL:', imageResult.data);
        } else {
            console.error('\n❌ DALL-E 3 Failed:', imageResult.error);
        }

    } catch (error) {
        console.error('\n❌ Request Error:', error.message);
    }
}

testWizardFlow();
