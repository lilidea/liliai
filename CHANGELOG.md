# Changelog

## [1.2.2] - 2026-01-29

### 🏗 Design Studio Redesign (Tasarım Stüdyosu Yenilendi)
- **Split View Layout (Desktop):**
  - Left panel: Organized accordion menu for component selection.
  - Right panel: Live, scrollable full-page preview of selected components.
- **Mobile Responsive (Mobil):**
  - Added "Selection" vs "Preview" toggle buttons for better mobile experience.
- **Mobile Responsive (Mobil):**
  - Added "Selection" vs "Preview" toggle buttons for better mobile experience.
  - optimized for smaller screens.
- **Layout Fixes:**
  - Resolved overflow and scrolling issues in Desktop preview panel.
  - Fixed scaling behavior to prevent content from overflowing boundaries.

### 🔢 Usage Limits (Kullanım Limitleri)
- **3-Site Limit:**
  - Implemented `useSiteLimit` hook to track site creation.
  - Limit: 3 free sites per 24 hours.
  - **Limit Modal:** Shows "Limit Exceeded" warning with countdown timer until reset when user tries to preview a 4th site.

### 🔧 Component Stability (Bileşen Kararlılığı)
- **Removed External Dependencies (Dış Bağımlılıklar Kaldırıldı):**
  - Replaced unreliable `source.unsplash.com` images with local `imageManager`.
  - Replaced `i.pravatar.cc` with styled gradient initial avatars (safer & faster).
  - Impacted Components: `About3`, `Blog1-3`, `Stats2`, `Team1-3`, `Contact2`, `Cta2`, `Projects1-3`.
  
---

## [1.2.1] - 2026-01-29

### 🛡️ Error Handling & UX (Hata Yönetimi)
- **Global Error Pages:**
  - Added `not-found.js` - Custom 404 page with brand styling and Turkish localization.
  - Added `error.js` - Global error boundary with retry functionality.
  - Added `loading.js` - Animated loading skeleton with Liliai branding.
- **Admin Panel Error Handling:**
  - Added `admin/error.js` - Compact error page for admin context.
  - Added `admin/loading.js` - Skeleton UI matching admin panel layout.

---

## [1.2.0] - 2026-01-28

### 🗄️ Database Migration (Veritabanı Taşıma)
- **SQLite -> MySQL Migration:**
  - Migrated the application database from local SQLite (`dev.db`) to a remote MySQL server (`lilideapanel_sitebuilder`).
  - Updated `prisma/schema.prisma` provider to `mysql`.
  - Configured `DATABASE_URL` in `.env` with new credentials.
  - Successfully pushed the existing schema to the new empty database.
  - Verified connection with a test script.

## [1.1.0] - 2026-01-23

### 📚 Component Library Expansion (Bileşen Kütüphanesi Genişletildi)
- **New Showcase Page (`/tum-bilesenler`):**
  - **Sticky Sidebar:** Easy navigation between component categories.
  - **Live Preview:** All components rendered sequentially with category grouping.
  - **Header3 Fix:** Resolved display issues for transparent/absolute headers in showcase.

- **New UI Components (Yeni Bileşenler):**
  - **About:** `About3` (Stats Split), `About4` (Minimal Center).
  - **Services:** `Services2` (Border Grid), `Services3` (Horizontal List).
  - **Team:** `Team2` (Circle Avatars), `Team3` (Featured Profile).
  - **Projects:** `Projects2` (Masonry Grid), `Projects3` (Horizontal Slider).
  - **Blog:** `Blog2` (Grid), `Blog3` (Featured + Sidebar).
  - **FAQ:** `FAQ2` (Box Grid), `FAQ3` (Clean List).
  - **Contact:** `Contact2` (Background Form), `Contact3` (Split Map).

- **New Business Components (İş Bileşenleri):**
  - **Pricing:** `Pricing1` (Cards), `Pricing2` (Table), `Pricing3` (Toggle).
  - **Testimonials:** `Testimonials1` (Grid), `Testimonials2` (Slider).
  - **Stats:** `Stats1` (Row), `Stats2` (Split Visual).
  - **CTA:** `Cta1` (Center), `Cta2` (Split).

- **Page Templates (Hazır Şablonlar):**
  - **Startup:** SaaS oriented landing page with modern dark/light contrast.
  - **Corporate:** Professional business template.
  - **Portfolio:** Minimalist creative portfolio.
  - **Gallery:** New `/sablonlar` page with "Wizard-style" card design.

- **UI/UX Improvements:**
  - **Custom AI Imagery:** Generated unique Hero images for each template.
  - **Footer Links:** Added quick access links to Templates and Components in the main footer.
  - **Branding:** Unified logo usage (`/app_icon.png`) across headers and footers.

## [1.0.0] - 2026-01-21

### 🚀 New Features (Yeni Özellikler)
- **Interactive Preview (Etkileşimli Önizleme):**
  - **Edit Mode:** Toggle between "View" and "Edit" modes in the preview page.
  - **Live Customization Sidebar:** Edit text and images for any section directly from the preview.
  - **Publish Modal:** A professional "Bizle Paylaş" (Share with Us) form capturing Company Name, Budget, Timeline, and Contact Info.
  
- **Content Studio 2.1 (İçerik Stüdyosu Güncellemeleri):**
  - **Master-Detail Layout:** Completely redesigned from a card grid to a sidebar-based navigation.
  - **Logo Generation:** Users can now generate a logo using AI directly from the "General Info" tab.
  - **Page SEO Details:** Added specific inputs for "Page Title" and "Keywords" for better SEO management.
  - **Updated Icons:** Replaced generic sparkle icons with modern "Bot" icons for AI actions.

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
- **Preview UX Fixes:**
  - Adjusted Sidebar positioning to sit correctly below the top navigation bar.
  - Added "Empty State" guidance to the sidebar to help users start editing.

### 📦 Deployment
- Ready for **Vercel** deployment.
