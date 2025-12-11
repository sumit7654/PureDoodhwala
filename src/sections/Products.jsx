import React from "react";
import { Droplet } from "lucide-react";
import { Button } from "../components/Button";

export const Products = () => {
  const products = [
    {
      name: "Pure Cow Milk",
      price: "₹60/L",
      color: "bg-blue-100",
      text: "text-blue-800",
    },
    {
      name: "Full Cream Buffalo Milk",
      price: "₹75/L",
      color: "bg-orange-100",
      text: "text-orange-800",
    },
    {
      name: "Low Fat Milk",
      price: "₹60/L",
      color: "bg-green-100",
      text: "text-green-800",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Product Range
          </h2>

          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Limited product range ensures high quality control & purity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-gray-800 hover:-translate-y-2 transform transition-all"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${p.color}`}
                >
                  <Droplet className={`w-8 h-8 ${p.text}`} />
                </div>

                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-2">Starting from</p>

                <div className="text-2xl font-bold text-blue-600">
                  {p.price}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm opacity-80 mt-8 mb-4">
            *Prices may vary by location & plan.
          </p>

          <Button variant="outline" className="px-8">
            View All Products in App
          </Button>
        </div>
      </div>
    </section>
  );
};
