'use client';
import React from 'react';

export default function Project({ index, title, manageModal }: any) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="flex w-full justify-between items-center p-4 border-t-2 border-t-gray-300 cursor-pointer transition-all"
    >
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
