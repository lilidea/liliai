"use client";
import React from 'react';
import { Check } from 'lucide-react';

export default function DebugPage() {
    return (
        <div className="p-10 bg-gray-200 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Debug Page VERSION 4</h1>

            <div className="mb-4 bg-white p-4">
                <h3 className="font-bold">Lucide Icon Check</h3>
                <Check size={48} className="text-green-500" />
            </div>
        </div>
    );
}
