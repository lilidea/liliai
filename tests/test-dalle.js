
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testDallE() {
    console.log('Testing /api/generate (DALL-E 3)...');

    const payload = {
        type: 'generate_image',
        companyName: 'Liliai Tech',
        sector: 'Technology',
        prompt: 'A futuristic technology office with glowing blue lights, high resolution, 4k.'
    };

    try {
        const response = await fetch('http://localhost:3001/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ DALL-E 3 Success!');
            console.log('Image URL:', data.data);
        } else {
            console.error('❌ DALL-E 3 Failed:', data.error);
        }
    } catch (error) {
        console.error('❌ Request Error:', error.message);
    }
}

testDallE();
