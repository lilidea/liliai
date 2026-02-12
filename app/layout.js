import { Geist, Geist_Mono, Inter, Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "./context/SiteContext";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Primary Professional Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

// Modern/Startup Font
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

// Friendly/Saas Font
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
});

// Elegant/Luxury Font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "liliai | AI Website Builder",
  description: "Web sitenizi saniyeler içinde oluşturun.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/app_icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

import { checkSecurity } from "@/lib/security";

export default async function RootLayout({ children }) {
  // 🔥 FIREWALL ACTIVE
  await checkSecurity();

  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} ${plusJakarta.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning={true}
        style={{ zoom: '0.9' }}
      >
        <ThemeProvider>
          <SiteProvider>
            {children}
          </SiteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
