import React from 'react';

export default function Title({ title, color }) {
  return (
    <div className="w-1/2 max-w-xs mx-auto text-4xl font-medium text-center transform my-gradient -skew-y-2">
      <h3 className={`text-${color && color}`}>{title}</h3>
    </div>
  );
}
