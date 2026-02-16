
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testImageKeywords() {
    console.log('Testing /api/generate (Image Suggestions)...');

    const payload = {
        type: 'suggest_images',
        companyName: 'Liliai Coffee',
        sector: 'Cafe',
    };

    try {
        const response = await fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ Image Suggestion Success!');
            console.log('Keywords:', data.data);
        } else {
            console.error('❌ Suggestion Failed:', data.error);
        }
    } catch (error) {
        console.error('❌ Request Error:', error.message);
    }
}

testImageKeywords();
