import React from "react";
import { Droplet, Clock, ShieldCheck, Smartphone } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { FeatureCard } from "../components/FeatureCard";

export const Features = () => {
  const features = [
    {
      icon: Droplet,
      title: "100% Pure & Organic",
      description: "No preservatives, no mixing. Only pure farm-fresh milk.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Guaranteed delivery every morning before 7:00 AM.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Tested",
      description: "Every batch passes 24+ rigorous quality tests.",
    },
    {
      icon: Smartphone,
      title: "Easy Subscription",
      description: "Pause, resume or modify your milk in 1 click.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Why Choose Pure Doodhwala?"
          subtitle="We bring the traditional milkman service into the modern digital world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};
