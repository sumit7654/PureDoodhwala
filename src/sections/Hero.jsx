import React from "react";
import { Smartphone, Menu, ShieldCheck, Truck } from "lucide-react";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Right blue block */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 hidden md:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Text Area */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
              #1 Farm-to-Home Delivery App
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Fresh Milk, <br />
              <span className="text-blue-600">Pure Life.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the taste of purity with Pure Doodhwala. We deliver
              100% organic fresh milk directly from farms.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button>
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
              </Button>

              <Button variant="secondary">Learn More →</Button>
            </div>

            {/* Trusted Images */}
            <div className="mt-8 flex items-center text-gray-500 text-sm">
              <div className="flex -space-x-2 mr-4 isolate">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&q=80",
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              <p>Trusted by 10,000+ families</p>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-72 h-[550px] bg-gray-900 rounded-[3rem] border-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>

              <div className="w-full h-full bg-blue-50">
                <div className="bg-blue-600 p-6 pt-12 text-white">
                  <div className="flex justify-between mb-4">
                    <Menu />
                    <span className="font-bold">Pure Doodhwala</span>
                    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                  </div>
                  <p>Good Morning!</p>
                  <h3 className="text-xl font-bold">Time for fresh milk?</h3>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Smartphone />
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute top-20 -right-10 bg-white p-4 rounded-xl shadow-lg hidden lg:flex">
              <ShieldCheck className="text-green-500 w-8 h-8 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Quality</p>
                <p className="font-bold">100% Pure</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute bottom-40 -left-10 bg-white p-4 rounded-xl shadow-lg hidden lg:flex">
              <Truck className="text-blue-500 w-8 h-8 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Delivery</p>
                <p className="font-bold">By 8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
