import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "./context/SiteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "liliai | AI Website Builder",
  description: "Web sitenizi saniyeler içinde oluşturun.",
  icons: {
    icon: '/app_icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SiteProvider>
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
