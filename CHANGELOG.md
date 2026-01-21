# Changelog

## [1.0.0] - 2026-01-21

### 🚀 New Features (Yeni Özellikler)
- **Interactive Preview (Etkileşimli Önizleme):**
  - **Edit Mode:** Toggle between "View" and "Edit" modes in the preview page.
  - **Live Customization Sidebar:** Edit text and images for any section directly from the preview.
  - **Publish Modal:** A professional "Bizle Paylaş" (Share with Us) form capturing Company Name, Budget, Timeline, and Contact Info.
  
- **Content Studio 2.0 (İçerik Stüdyosu):**
  - **Master-Detail Layout:** Completely redesigned from a card grid to a sidebar-based navigation for easier content management.
  - **AI Content Generation:** "Metin Üret" and "Görsel Üret" buttons to auto-fill content.

### 🎨 Branding & Design (Marka ve Tasarım)
- **Liliai Brand Identity:**
  - Applied **Primary Orange (`#E69419`)** and **Secondary Blue (`#0073FF`)** across the entire application.
  - Fixed UI color consistency in Wizard, Design Studio, and Preview.
  - Updated "Bizle Paylaş" button to strictly use the brand orange.
  - Updated AI and interactive elements to use the brand blue-to-orange gradient.

### 🌍 Localization (Yerelleştirme)
- **Full Turkish UI:**
  - Translated all internal component names (Header -> Üst Menü, Hero -> Ana Bölüm, etc.).
  - Localized the Content Studio and all user-facing labels.

### 🛠 Technical Improvements
- **Decoupled UI Styling:** Separated the Wizard's interface styling from the user's selected site colors to ensure tool stability.
- **Hydration Fixes:** Resolved Next.js hydration mismatch errors in `layout.js`.
- **Splash Screen:** Added a polished loading transition with the Liliai logo.

### 📦 Deployment
- Ready for **Vercel** deployment.
