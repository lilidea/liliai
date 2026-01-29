"use client";
import React from 'react';
import { SiteProvider } from '@/app/context/SiteContext';
import AdminSidebar from './components/AdminSidebar';

export default function AdminLayout({ children }) {
    return (
        <SiteProvider>
            <div className="flex h-screen bg-gray-50/50 text-gray-900 font-sans overflow-hidden">

                {/* Admin Sidebar */}
                <AdminSidebar />

                {/* Main Content */}
                <main className="flex-1 overflow-auto relative custom-scrollbar">

                    <div className="relative z-0">
                        {children}
                    </div>
                </main>

            </div>
        </SiteProvider>
    );
}
