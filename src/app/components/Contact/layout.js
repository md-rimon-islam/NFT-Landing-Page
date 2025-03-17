import Footer from '@/components/Footer';
import React from 'react';

export default function ContactFolderLayout({ children }) {
  return (
    <div>
      <main className="relative overflow-hidden">
        {children}
      </main>
      
    </div>
  );
}