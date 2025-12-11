import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { TestimonialCard } from "../components/TestimonialCard";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  const list = [
    { name: "Priya Sharma", location: "Indirapuram", text: "Milk quality is amazing, real malai forms!" },
    { name: "Sumit Kumar", location: "Bihar", text: "Very pure and fresh milk. Recommended!" },
    { name: "Amit Kushwaha", location: "India", text: "Service is fast and very reliable." },
    { name: "Rahul Verma", location: "Noida Sector 62", text: "Love the pause subscription option!" },
    { name: "Amit Patel", location: "Greater Kailash", text: "Delivered before I wake up. Great!" },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <SectionHeading
          title="What Our Customers Say"
          subtitle="Thousands of happy families trust Pure Doodhwala."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {list.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};
