// src/components/WhatWeOffer.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import pest1 from "../assets/home/h1.avif";
import pest2 from "../assets/home/h2.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offers = [
  {
    title: "General Pest Control Treatment",
    slug: "general-pest-control",
    image: pest1,
    desc: "Comprehensive solutions to eliminate common household pests and keep your space hygienic.",
  },
  {
    title: "Rodent Control Services",
    slug: "rodent-control",
    image: pest2,
    desc: "Effective methods to remove and prevent rats and mice infestations from your property.",
  },
  {
    title: "Piping System Termite Treatment",
    slug: "termite-treatment",
    image: pest1,
    desc: "Advanced anti-termite piping systems to protect your property from structural damage.",
  },
  {
    title: "Mosquito Control Services",
    slug: "mosquito-control",
    image: pest2,
    desc: "Safe, eco-friendly treatments to eliminate mosquitoes and reduce the risk of diseases.",
  },
  {
    title: "Ants Control Services",
    slug: "ants-control",
    image: pest1,
    desc: "Specialized treatments to stop ants at the source and prevent future colonies.",
  },
  {
    title: "Bed Bugs Treatment",
    slug: "bed-bugs-treatment",
    image: pest2,
    desc: "Targeted solutions to eliminate bed bugs and ensure a restful, pest-free sleep.",
  },
  {
    title: "Garden Treatment Services",
    slug: "garden-treatment",
    image: pest1,
    desc: "Eco-safe garden treatments that protect plants from pests without harming the environment.",
  },
  {
    title: "Fogging",
    slug: "fogging",
    image: pest2,
    desc: "Large-scale fogging services for quick, effective mosquito and insect control.",
  },
  {
    title: "Sanitisation",
    slug: "sanitisation",
    image: pest1,
    desc: "Professional sanitisation to eliminate harmful germs, viruses, and bacteria.",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveIndex(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, vertical: false, verticalSwiping: false },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <section className="relative py-16 px-6 md:px-20 font-[poppins] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FFF4] via-[#E6F4EA] to-[#F9FFF9]"></div>

      {/* Left Decorative Half-Blob */}
      <svg
        className="absolute top-10 -left-32 w-[350px] h-[350px] text-[#3CB371]/10 -z-0"
        fill="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M43.4,-74.4C56.4,-66.2,68.1,-56.1,73.9,-43.3C79.7,-30.5,79.6,-15.2,77.5,-0.6C75.3,14.1,71.2,28.3,63.2,40.7C55.2,53,43.3,63.6,29.5,71.3C15.7,79,-0.1,83.8,-14.6,81.1C-29.1,78.5,-42.3,68.3,-52.4,56.1C-62.5,43.9,-69.5,29.8,-73.7,13.8C-78,-2.2,-79.6,-20.2,-71.9,-32.9C-64.1,-45.7,-47,-53.2,-32.1,-61.3C-17.1,-69.4,-4.3,-78,8.5,-79.7C21.2,-81.3,42.3,-75.6,43.4,-74.4Z" />
      </svg>

      {/* Decorative Glow Bottom Left */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#097439]/5 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#1B4332]">
            What{" "}
            <span className="bg-gradient-to-r from-[#3CB371] to-[#1B4332] bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>
          <p className="text-[#3D5A40] mb-6 max-w-md text-lg">
            Neat & Clean Pest Control offers eco-friendly, reliable, and
            effective pest management solutions across Delhi. From homes to
            businesses, we ensure a pest-free, safe, and healthy environment for
            all.
          </p>
          <button className="px-6 py-2.5 bg-gradient-to-r cursor-pointer from-[#3CB371] to-[#1B4332] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
            Book a Service
          </button>
        </div>

        {/* Right Section - Vertical Slider */}
        <Slider {...settings} className="space-y-4">
          {offers.map((offer, i) => {
            const isActive = i === activeIndex % offers.length;
            return (
              <div key={i} className="px-2">
                <div
                  className={`flex items-center gap-4 rounded-xl p-5 min-h-[140px] transition-all duration-500 relative hover:scale-[1.02] hover:shadow-xl ${
                    isActive
                      ? "bg-gradient-to-r from-[#3CB371]/15 to-[#1B4332]/15 border-l-4 border-[#3CB371]"
                      : "bg-white shadow-md"
                  }`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#1B4332]">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-[#3D5A40]">{offer.desc}</p>
                  </div>
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3CB371] to-[#1B4332] rounded-l-xl"></div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
