
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const TEST_CASES = [
    {
        name: "Standard Dentist",
        sector: "health_dentist",
        company: "Gültan Diş Polikliniği",
        about: "Modern diş hekimliği ve implant tedavisi hizmetleri sunuyoruz.",
        checks: {
            colors: ["#059669", "#0ea5e9"], // Green/Blue
            keywords: ["İmplant", "Diş", "Gülüş"],
            requiredComponents: ["services", "team"]
        }
    },
    {
        name: "Cafe Sector (Duman Cafe)",
        sector: "food_cafe",
        company: "Duman Cafe & Bistro",
        about: "Taze kahve ve ev yapımı tatlılarımızla hizmetinizdeyiz.",
        checks: {
            colors: ["#DC2626", "#E69419", "#E69419"], // Warm colors
            keywords: ["Kahve", "Tatlı", "Lezzet", "Duman"],
            forbidden: ["Otomasyon", "Veri Takibi", "Dijital Çözüm"],
            requiredComponents: ["menu"]
        }
    },
    {
        name: "Construction/Architecture",
        sector: "const_arch",
        company: "Vizyon Mimarlık",
        about: "Modern yapılar ve sürdürülebilir mimari projeler geliştiriyoruz.",
        checks: {
            keywords: ["Mimari", "Proje", "Tasarım"],
            requiredComponents: ["projects"]
        }
    },
    {
        name: "Education / School",
        sector: "edu_school",
        company: "Liliai Koleji",
        about: "Geleceğin nesillerini modern eğitim teknikleriyle yetiştiriyoruz.",
        checks: {
            keywords: ["Eğitim", "Öğrenci", "Kolej", "Kayıt"],
            requiredComponents: ["team"]
        }
    },
    {
        name: "Long Name Edge Case",
        sector: "tech_software",
        company: "Global Advanced Artificial Intelligence and Software Solutions Group International",
        about: "Sektörel lider şirketler için yapay zeka çözümleri.",
        checks: {
            keywords: ["Yazılım", "AI"],
        }
    }
];

async function runMultiSectorTest() {
    console.log('🚀 Liliai Diversified Sector & Quality Stress Test Starting...\n');
    const baseUrl = 'http://localhost:3003';
    let totalScore = 0;
    let passedTests = 0;

    for (const test of TEST_CASES) {
        console.log(`\n--- [TEST: ${test.name}] ---`);
        try {
            const res = await fetch(`${baseUrl}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'full_site',
                    companyName: test.company,
                    sector: test.sector,
                    aboutText: test.about
                })
            });

            if (res.status !== 200) {
                console.error(`HTTP Error ${res.status}`);
                continue;
            }

            const json = await res.json();
            const resultData = json.data; // The AI returns { content: {...}, design: {...}, selections: {...} }
            const content = resultData.content;
            const design = resultData.design;

            if (!content || !design) {
                console.log('JSON Structure:', JSON.stringify(json, null, 2));
                throw new Error('API response missing content or design');
            }

            const textContent = JSON.stringify(content);

            let sectorScore = 100;
            let failureReasons = [];

            // 1. Color Check
            if (test.checks.colors) {
                const primaryMatch = test.checks.colors.some(c => design.primaryColor.toLowerCase() === c.toLowerCase());
                if (!primaryMatch) {
                    sectorScore -= 20;
                    failureReasons.push(`Unexpected primary color: ${design.primaryColor}`);
                }
            }

            // 2. Keyword Check (Jargon)
            if (test.checks.keywords) {
                for (const kw of test.checks.keywords) {
                    const pattern = new RegExp(kw, 'gi');
                    if (!pattern.test(textContent)) {
                        sectorScore -= 15;
                        failureReasons.push(`Missing keyword: ${kw}`);
                    }
                }
            }

            // 3. Forbidden Words Check (Tech jargon in Food)
            if (test.checks.forbidden) {
                for (const fw of test.checks.forbidden) {
                    const pattern = new RegExp(fw, 'gi');
                    if (pattern.test(textContent)) {
                        sectorScore -= 30;
                        failureReasons.push(`Found forbidden tech jargon: ${fw}`);
                    }
                }
            }

            // 4. Component Structure
            if (test.checks.requiredComponents) {
                for (const component of test.checks.requiredComponents) {
                    if (!content[component] || (content[component].items && content[component].items.length === 0)) {
                        sectorScore -= 20;
                        failureReasons.push(`Component '${component}' is missing or empty`);
                    }
                }
            }

            console.log(`Relevance Score: ${sectorScore}/100`);
            if (failureReasons.length > 0) {
                console.log('Issues:', failureReasons.join(', '));
            } else {
                console.log('✅ Result is highly relevant and high quality.');
                passedTests++;
            }
            totalScore += sectorScore;

        } catch (e) {
            console.error(`❌ Test failed with error: ${e.message}`);
        }
    }

    console.log('\n======================================');
    console.log(`GLOBAL PERFORMANCE REPORT`);
    console.log(`Total Passed: ${passedTests}/${TEST_CASES.length}`);
    console.log(`Average Relevance Score: ${Math.round(totalScore / TEST_CASES.length)}%`);
    console.log('======================================');
}

runMultiSectorTest();
