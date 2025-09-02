// src/components/HeroAbout.jsx
import React from "react";
import heroBg from "../assets/home/about3.jpg";
import { Link } from "react-router-dom";

export default function HeroAbout() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C1C1C]/40 z-0"></div>

      {/* Watermark */}
      <h1 className="absolute text-[8rem] sm:text-[8rem] font-extrabold text-[#F9F9F910] top-1/4 left-1/4 pointer-events-none uppercase tracking-widest italic">
        NEAT & CLEAN
      </h1>

      {/* Left-Bottom Content */}
      <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-12 max-w-full sm:max-w-md text-left z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[poppins] text-[#076b34] leading-tight">
          Protecting Your Home
        </h2>
        <p className="mt-3 text-[#E5F5E0] text-base sm:text-lg md:text-xl font-[poppins] leading-relaxed max-w-full">
          Over 10+ years of delivering eco-friendly, trusted pest control across Delhi, ensuring complete hygiene and safety.
        </p>
        <Link to="/services">
          <button className="mt-3 px-6 py-3 cursor-pointer font-[poppins] rounded-3xl bg-gradient-to-r from-[#3CB371] to-[#1B4332] text-white font-semibold shadow-2xl hover:from-[#1B4332] hover:to-[#3CB371] transition-all duration-300">
            Explore Services
          </button>
        </Link>
      </div>

      {/* Right-Top Content */}
      <div className="absolute top-6 sm:top-12 right-4 sm:right-12 text-right z-10 max-w-full sm:max-w-md">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-[poppins] font-bold text-[#f9f9f9]">
          Trusted & Reliable
        </h3>
        <p className="mt-3 text-[#F5F5F5] text-sm sm:text-base md:text-lg leading-relaxed font-[poppins] max-w-full">
          Serving thousands of homes and businesses with comprehensive pest solutions including termites, mosquitoes, rodents, and more.
        </p>
        <Link to="/contact">
          <button className="mt-4 px-6 py-3 rounded-3xl font-[poppins] cursor-pointer border-2 border-[#3CB371] text-[#3CB371] font-semibold hover:bg-[#3CB371] hover:text-white transition-all duration-300">
            Book a Service
          </button>
        </Link>
      </div>
    </section>
  );
}
