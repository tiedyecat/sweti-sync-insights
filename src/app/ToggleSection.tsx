
'use client';
import React, { useState } from 'react';

const ToggleSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="px-4 py-2 border-b border-neutral-800">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <span className="text-sm text-neutral-400">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default ToggleSection;
