
'use client';
import React from 'react';

const InsightCard = ({ label, value }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded p-4 w-full">
    <h3 className="text-sm text-neutral-400">{label}</h3>
    <p className="text-xl font-semibold text-white">{value}</p>
  </div>
);

export default InsightCard;
