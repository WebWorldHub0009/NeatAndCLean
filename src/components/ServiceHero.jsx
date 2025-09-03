// src/components/ServiceHero.jsx
import React from "react";
import {
  FaBug,
  FaShieldAlt,
  FaLeaf,
  FaPumpSoap,
} from "react-icons/fa";
import bgImage from "../assets/home/ncbg.jpg"; // Replace with a pest-control related bg if possible

export default function ServiceHero() {
  const services = [
    { icon: <FaBug />, text: "Advanced Pest Elimination" },
    { icon: <FaShieldAlt />, text: "Long-lasting Protection" },
    { icon: <FaLeaf />, text: "Eco-friendly Solutions" },
    { icon: <FaPumpSoap />, text: "Safe & Hygienic Methods" },
  ];

  return (
    <section
      className="relative w-full h-[90vh] text-white font-[poppins] flex"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-green-900/60"></div>

      {/* 🔹 Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-end w-full h-full p-6 sm:p-10 md:p-16">
        {/* Left Content */}
        <div className="max-w-3xl text-left mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Neat & Clean <br /> Premium Pest Control
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Protecting your home and business with{" "}
            <span className="text-green-400 font-semibold">
              safe, effective, and eco-friendly
            </span>{" "}
            pest control solutions.
          </p>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#A3E635] italic tracking-wide">
            “Clean Spaces, Healthy Living.”
          </p>
        </div>

        {/* 🔹 Services Highlights */}
        {/* ✅ Mobile: grid below | Desktop: fixed vertical right */}
        <div className="w-full mt-6 lg:mt-0 lg:w-auto lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-1 lg:gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-green-500/30 transition"
              >
                <span className="text-2xl sm:text-3xl text-green-400">
                  {item.icon}
                </span>
                <span className="text-sm sm:text-base md:text-lg font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
