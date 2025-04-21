
'use client';
import React from 'react';

const ChatHistory = ({ history }) => (
  <div className="px-4 py-3 border-t border-neutral-800">
    <h4 className="text-white mb-2">Chat History</h4>
    <ul className="space-y-1 text-neutral-300 text-sm max-h-40 overflow-y-auto">
      {history.map((entry, i) => (
        <li key={i}>→ {entry}</li>
      ))}
    </ul>
  </div>
);

export default ChatHistory;
