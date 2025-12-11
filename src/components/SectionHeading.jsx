import React from "react";

export const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2
      className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
    <div
      className={`h-1 w-24 mx-auto rounded mb-4 ${
        light ? "bg-blue-300" : "bg-blue-600"
      }`}
    ></div>
    <p className={`text-lg ${light ? "text-blue-100" : "text-gray-600"}`}>
      {subtitle}
    </p>
  </div>
);
