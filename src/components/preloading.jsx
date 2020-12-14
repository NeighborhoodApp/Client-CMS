import React from 'react';

export default function Preloading() {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span className="text-red-500 opacity-75 top-1/2 -left-10 my-0 mx-auto block relative w-0 h-0">
        <i className="fas fa-spinner fa-pulse fa-5x"></i>
      </span>
    </div>
  );
}
