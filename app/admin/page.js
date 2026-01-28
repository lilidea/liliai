import React from 'react';
import AdminChatWidget from './components/AdminChatWidget';

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto h-[calc(100vh-20px)] flex flex-col">
       {/* Chat Widget Only - Full Focus */}
       <div className="flex-1 h-full">
            <AdminChatWidget />
       </div>
    </div>
  );
}
