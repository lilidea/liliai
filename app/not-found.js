"use client";

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E69419]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0073FF]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[10rem] md:text-[12rem] font-black leading-none bg-gradient-to-r from-[#E69419] to-[#0073FF] bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-400 text-lg">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        {/* Search Icon Animation */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E69419] to-[#0073FF] rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-full border border-gray-700">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E69419] to-[#E69419]/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E69419]/25 transition-all duration-300"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ana Sayfaya Dön
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-gray-300 font-semibold rounded-xl border border-gray-700 hover:border-[#0073FF] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Geri Git
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Liliai • Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
