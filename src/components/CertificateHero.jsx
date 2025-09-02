import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/pest-bg.jpg"; // ✅ Replace with a clean pest-control background
import logo from "../assets/nc-logo.png"; // ✅ Add Neat & Clean Pest Control logo

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen md:min-h-0 md:h-[85vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Neat & Clean Pest Control"
          className="mx-auto mb-5 w-28 md:w-32 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          <span className="text-[#3CB371]">Clean. Safe. Pest-Free.</span>
          <br />
          <span className="text-white">
            Protecting Homes & Businesses with{" "}
            <span className="text-[#3CB371]">Neat & Clean Pest Control</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-200 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
          Say goodbye to cockroaches, termites, rodents, mosquitoes & more.  
          With <span className="text-[#3CB371] font-semibold">eco-friendly treatments</span> and{" "}
          <span className="text-[#3CB371] font-semibold">expert technicians</span>,  
          we keep your space healthy, hygienic & completely pest-free.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="tel:+917011129058"
            className="px-6 py-3 bg-[#3CB371] text-white font-semibold rounded-full shadow-xl hover:bg-[#2E8B57] hover:scale-105 transition-all duration-500"
          >
            📞 Call for Free Inspection
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-[#3CB371] text-[#3CB371] font-semibold rounded-full hover:bg-[#3CB371] hover:text-white hover:scale-105 transition-all duration-500"
          >
            Explore Services →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
