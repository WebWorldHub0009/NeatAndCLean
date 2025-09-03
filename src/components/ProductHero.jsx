// src/components/ProductHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Bug, Droplet, Sparkles } from "lucide-react";
import bgImage from "../assets/home/h6.jpg"; // ✅ update path

const ProductHero = () => {
  const highlights = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Safe & Certified" },
    { icon: <Bug className="w-6 h-6" />, text: "Powerful Action" },
    { icon: <Droplet className="w-6 h-6" />, text: "Eco-Friendly" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Premium Quality" },
  ];

  return (
    <section
      className="relative w-full h-[75vh] flex items-center justify-center text-white font-[poppins]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-700 bg-clip-text text-transparent">
            Premium Pest Control Products
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Advanced eco-safe formulations ensuring your environment stays{" "}
          <span className="text-emerald-400 font-semibold">hygienic, safe, and pest-free</span>.
        </motion.p>

        {/* 🔥 Sleek Horizontal Highlights (Not Cards) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-base sm:text-lg font-medium hover:text-emerald-400 transition"
            >
              <span className="text-emerald-400">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* Sleek Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <p className="text-gray-400 text-sm tracking-[0.25em] uppercase">
            Trusted by Thousands • Redefining Pest Control Standards
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
