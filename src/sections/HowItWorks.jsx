import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { StepCard } from "../components/StepCard";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Fresh Milk in 3 Steps"
          subtitle="Getting started is extremely easy."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <StepCard
            number="1"
            title="Download & Subscribe"
            description="Choose your milk type & set your daily quantity."
          />

          <StepCard
            number="2"
            title="We Source Fresh"
            description="Milk is collected early morning from trusted farms."
          />

          <StepCard
            number="3"
            title="Doorstep Delivery"
            description="Delivered before you wake up — every single day."
          />
        </div>
      </div>
    </section>
  );
};
