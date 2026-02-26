
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function runDiagnostics() {
    console.log('--- Liliai API Diagnostics ---');
    const baseUrl = 'http://localhost:3003';

    // Test 1: Suggest Pages
    console.log('\n[1] Testing /api/suggest-pages...');
    try {
        const res = await fetch(`${baseUrl}/api/suggest-pages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                companyName: 'Diagnose Corp',
                sector: 'Technology',
                aboutText: 'Diagnostic test'
            })
        });
        console.log('Status:', res.status);
        const text = await res.text();
        try {
            const json = JSON.parse(text);
            console.log('JSON Response:', json);
        } catch (e) {
            console.log('Non-JSON Response (first 200 chars):', text.substring(0, 200));
        }
    } catch (e) {
        console.error('Request 1 Failed:', e.message);
    }

    // Test 2: Generate Content
    console.log('\n[2] Testing /api/generate (individual)...');
    try {
        const res = await fetch(`${baseUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'individual',
                companyName: 'Diagnose Corp',
                sector: 'Technology',
                aboutText: 'Diagnostic test',
                pages: ['Home']
            })
        });
        console.log('Status:', res.status);
        const text = await res.text();
        try {
            const json = JSON.parse(text);
            console.log('JSON Response:', json);
        } catch (e) {
            console.log('Non-JSON Response (first 200 chars):', text.substring(0, 200));
        }
    } catch (e) {
        console.error('Request 2 Failed:', e.message);
    }
}

runDiagnostics();
