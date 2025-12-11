import React from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Products } from "./sections/Products";
import { Testimonials} from "./sections/Testimonials";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
