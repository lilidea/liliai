
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testHotelFlow() {
    console.log('🚀 Testing Wizard Flow: OTEL...');

    const siteData = {
        companyName: 'Liliai Grand Resort',
        sector: 'Konaklama / Otel',
        pages: ['Hakkımızda', 'Hizmetler', 'Galeri', 'Fiyat Listesi', 'Rezervasyon']
    };

    try {
        console.log('\n1. Generating Full Site Content (gpt-4o)...');
        const res = await fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'full_site',
                companyName: siteData.companyName,
                sector: siteData.sector,
                pages: siteData.pages
            })
        });

        const result = await res.json();

        if (result.success) {
            console.log('✅ Success!');
            const content = result.data.content;

            console.log('\n--- Hero (Otel Örneği) ---');
            console.log(content.hero);

            console.log('\n--- Pricing (Oda Paketleri) ---');
            console.log(content.pricing?.items?.slice(0, 2));

            console.log('\n--- Stats (Otel Verileri) ---');
            console.log(content.stats?.items);

            console.log('\n--- Testimonials (Misafir Yorumları) ---');
            console.log(content.testimonials?.items?.slice(0, 1));

            console.log('\n--- Products (Ekstra Hizmetler) ---');
            console.log(content.products?.slice(0, 2));

        } else {
            console.error('❌ Failed:', result.error);
        }

    } catch (error) {
        console.error('\n❌ Error:', error.message);
    }
}

testHotelFlow();
