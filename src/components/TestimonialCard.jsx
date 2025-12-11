import React from "react";
import { Star } from "lucide-react";

export const TestimonialCard = ({ name = "", location = "", text = "" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">

      {/* Stars */}
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 italic mb-6 text-sm">
        "{text}"
      </p>

      {/* User */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold mr-3">
          {name ? name.charAt(0) : "?"}
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
      </div>

    </div>
  );
};
