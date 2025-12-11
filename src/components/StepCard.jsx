import React from "react";

export const StepCard = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center max-w-xs mx-auto">
    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
