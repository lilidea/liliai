"use client";

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function AdminError({ error, reset }) {
  useEffect(() => {
    console.error('Admin Panel Error:', error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-xl font-bold text-white mb-2">
          Bir Hata Oluştu
        </h2>
        <p className="text-gray-400 mb-6">
          Admin panelinde beklenmeyen bir sorun oluştu.
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <div className="mb-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-left">
            <code className="text-xs text-red-400 break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#E69419] text-white font-medium rounded-lg hover:bg-[#E69419]/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Tekrar Dene
          </button>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            Admin Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
