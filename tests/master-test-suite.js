
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const BASE_URL = 'http://localhost:3000';

async function runTest(name, path, options = {}) {
    console.log(`\n[TEST] ${name} (${path})...`);
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            ...options,
            body: options.body ? JSON.stringify(options.body) : undefined
        });

        console.log(`Status: ${response.status}`);
        const data = await response.json();

        if (response.ok && (data.success || data.pages || data.reply)) {
            console.log('✅ PASS');
            // console.log('Response Detail:', JSON.stringify(data, null, 2).substring(0, 500) + '...');
            return true;
        } else {
            console.log('❌ FAIL:', data.error || 'Unknown Error');
            return false;
        }
    } catch (error) {
        console.log('💥 ERROR:', error.message);
        return false;
    }
}

async function startSuite() {
    console.log('=========================================');
    console.log('LILIAI MASTER API TEST SUITE');
    console.log('=========================================');

    const results = [];

    // 1. Suggest Pages
    results.push(await runTest('AI Page Suggestion', '/api/suggest-pages', {
        body: { companyName: 'Liliai Test', sector: 'Software', aboutText: 'AI Platform' }
    }));

    // 2. AI Generate - Individual
    results.push(await runTest('AI Generate (Individual)', '/api/generate', {
        body: { type: 'individual', companyName: 'Liliai Test', sector: 'Software', aboutText: 'AI Platform', pages: ['Home'] }
    }));

    // 3. AI Generate - Full Site
    results.push(await runTest('AI Generate (Full Site - Complex)', '/api/generate', {
        body: { type: 'full_site', companyName: 'Liliai Test', sector: 'Software', aboutText: 'AI Platform', pages: ['Home', 'Services'] }
    }));

    // 4. AI Generate - Rewrite
    results.push(await runTest('AI Generate (Rewrite)', '/api/generate', {
        body: { type: 'rewrite', text: 'Merhaba dünya, biz çok iyi bir şirketiz.', tone: 'professional' }
    }));

    // 5. AI Generate - Image Keywords
    results.push(await runTest('AI Generate (Suggest Images)', '/api/generate', {
        body: { type: 'suggest_images', companyName: 'Liliai Test', sector: 'Software' }
    }));

    // 6. AI Designer Chat
    results.push(await runTest('AI Designer Chat Integration', '/api/ai/chat', {
        body: {
            messages: [{ role: 'user', content: 'Renkleri turuncu yap' }],
            siteData: { companyName: 'Liliai Test', primaryColor: '#000000', secondaryColor: '#FFFFFF' },
            activeContext: { section: 'header' }
        }
    }));

    // 7. Proposal Submission
    results.push(await runTest('Proposal Submission', '/api/proposals', {
        body: {
            formData: {
                name: 'Tester',
                email: 'test@liliai.com',
                company: 'Liliai Test Corp',
                phone: '05550000000',
                budget: '1000-5000',
                timeline: '2 weeks',
                notes: 'Test note'
            },
            siteData: { theme: 'dark', components: ['header1'] }
        }
    }));

    // Summary
    console.log('\n=========================================');
    const passed = results.filter(r => r).length;
    console.log(`TEST SUITE FINISHED: ${passed}/${results.length} PASSED`);
    console.log('=========================================');

    if (passed === results.length) {
        process.exit(0);
    } else {
        process.exit(1);
    }
}

startSuite();
