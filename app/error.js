"use client";

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#E69419]/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gray-800/90 backdrop-blur-sm p-8 rounded-full border border-red-500/30">
              <AlertTriangle className="w-16 h-16 text-red-400" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Bir Hata Oluştu
          </h1>
          <p className="text-gray-400 text-lg">
            Beklenmeyen bir sorunla karşılaştık. Lütfen tekrar deneyin veya ana sayfaya dönün.
          </p>
        </div>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <div className="mb-8 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Bug className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">Hata Detayı</span>
            </div>
            <code className="text-sm text-gray-400 break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E69419] to-[#E69419]/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E69419]/25 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-gray-300 font-semibold rounded-xl border border-gray-700 hover:border-[#0073FF] hover:text-white transition-all duration-300"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-gray-500 text-sm">
          Sorun devam ederse lütfen bizimle iletişime geçin.
        </p>
      </div>
    </div>
  );
}
