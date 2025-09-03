// src/components/CertificatesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/home/cer.jpg"; 

const CertificatesHero = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center text-white font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          <span className="text-[#3CB371]">Certified & Trusted</span>
          <br />
          Excellence in Pest Control
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-1 w-28 mx-auto bg-gradient-to-r from-[#3CB371] to-[#2E8B57] rounded-full mb-6"
        ></motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
        >
          We hold industry-recognized certifications that guarantee safe, effective,
          and eco-friendly pest management. With{" "}
          <span className="text-[#3CB371] font-semibold">government approvals</span> 
          and{" "}
          <span className="text-[#3CB371] font-semibold">ISO standards</span>,  
          Neat & Clean Pest Control ensures complete peace of mind for your home & business.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CertificatesHero;
