const { test, expect } = require('@playwright/test');

test.describe('Liliai Wizard Flow', () => {
  test('should load the dashboard and start the wizard', async ({ page }) => {
    // 1. Ana sayfaya git
    await page.goto('/');

    // 2. Splash screen geçmesini bekle (triggerLoading 1500ms kullanıyor)
    // SplashScreen.js bileşenini beklemek daha sağlıklı olabilir ama şimdilik timeout verelim.
    await page.waitForTimeout(3000);

    // 3. "Yeni Site" veya "Başla" butonunun varlığını kontrol et
    const startButton = page.getByRole('button', { name: /Yeni Site|Başla/i }).first();
    await expect(startButton).toBeVisible({ timeout: 15000 });

    // 4. Butona tıkla ve 1. adıma geçişi kontrol et
    await startButton.click();
    
    // Sihirbazın 1. adımı: "Markanızı Tanımlayın"
    const step1Heading = page.getByText('Markanızı Tanımlayın');
    await expect(step1Heading).toBeVisible({ timeout: 15000 });

    // 5. Firma adını doldur
    const companyInput = page.getByPlaceholder(/Örn: liliai/i);
    await companyInput.fill('Test Firması');

    // 6. "Sonraki" butonu var mı kontrol et (Genellikle sihirbazda 'Sonraki' veya 'İleri' butonu olur)
    // Sayfanın altındaki navigasyon butonlarını bulalım
    const nextButton = page.getByRole('button').filter({ hasText: /Sonraki|İleri/i }).first();
    if (await nextButton.isVisible()) {
        await nextButton.click();
        // Step 2: Renk Paleti kontrolü
        await expect(page.getByText('Renk Paleti')).toBeVisible();
    }
  });
});
