import React from 'react';

export function Card({ children }) {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      {children}
    </div>
  );
}