
'use client';
import React from 'react';

const Header = () => (
  <header className="w-full px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Agency Logo" className="h-10 w-10" />
      <h1 className="text-xl font-bold tracking-wide text-white">SWETI SYNC INSIGHTS</h1>
    </div>
  </header>
);

export default Header;
