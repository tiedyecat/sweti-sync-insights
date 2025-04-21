
'use client';
import React from 'react';

const TeamSelector = ({ selected, setSelected }) => {
  const members = ['Derek', 'Amy', 'Brian', 'View All'];

  return (
    <div className="px-4 py-2">
      <label className="text-sm text-neutral-400">Select Team Member</label>
      <select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        className="mt-1 block w-full bg-neutral-900 text-white border border-neutral-700 px-3 py-2 rounded"
      >
        {members.map(member => (
          <option key={member} value={member}>
            {member}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeamSelector;
