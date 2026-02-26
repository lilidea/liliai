
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testSuggest() {
    console.log('Testing /api/suggest-pages...');

    const payload = {
        companyName: 'Gourmet Burger',
        sector: 'Restaurant',
        aboutText: 'Best burgers in town.'
    };

    try {
        const response = await fetch('http://localhost:3003/api/suggest-pages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ Page Suggestion Success!');
            console.log('Suggested Pages:', data.pages);

            const hasMenu = data.pages.includes('Menü');
            if (hasMenu) {
                console.log('✅ Logic Check: "Menü" page passed for Restaurant.');
            } else {
                console.warn('⚠️ Logic Check: "Menü" page MISSING for Restaurant.');
            }
        } else {
            console.error('❌ Suggestion Failed:', data.error);
        }
    } catch (error) {
        console.error('❌ Request Error:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.log('⚠️  Make sure the Next.js server is running on localhost:3000');
        }
    }
}

testSuggest();
