
'use client';
import React from 'react';

const suggestions = [
  'Which ads are underperforming?',
  'Top performing age groups?',
  'Any sudden cost spikes?',
  'Show me creative CTRs'
];

const QuerySuggestions = ({ onSelect }) => (
  <div className="px-4 py-3">
    <h4 className="text-white text-md mb-2 font-medium">Quick Queries</h4>
    <div className="flex flex-wrap gap-2">
      {suggestions.map((text, i) => (
        <button
          key={i}
          onClick={() => onSelect(text)}
          className="bg-neutral-800 text-sm text-white px-3 py-1 rounded hover:bg-neutral-700"
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

export default QuerySuggestions;
