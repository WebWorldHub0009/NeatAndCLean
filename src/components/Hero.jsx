// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaShieldAlt, FaBug } from "react-icons/fa";
import img1 from "../assets/home/h1.avif";
import img2 from "../assets/home/h2.avif";
import img3 from "../assets/home/h3.jpg";
import img4 from "../assets/home/h4.jpg";
import img5 from "../assets/home/h5.jpg";
import img6 from "../assets/home/h6.jpg";

export default function HeroSection() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="relative bg-gradient-to-br from-[#E6F4EA] via-white to-[#D1FAE5] px-6 md:px-12 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-[poppins] md:text-6xl font-bold leading-tight text-[#1B4332]">
            Keep Your Home <br />{" "}
            <span className="text-[#3CB371]">Neat & Pest-Free</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-lg">
            Professional, eco-friendly pest control solutions to keep your
            space clean, safe, and worry-free. Trusted by families & businesses
            alike.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#3CB371] cursor-pointer hover:bg-[#1B4332] text-white px-6 py-2 rounded-full  shadow-lg transition">
              Get Free Quote
            </button>
            <button className="border cursor-pointer border-[#3CB371] text-[#1B4332] hover:bg-[#F5F5F5] px-6 py-2 rounded-full  transition">
              Our Services
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 pt-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#3CB371]" />
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-[#3CB371]" />
              Eco-Friendly
            </div>
            <div className="flex items-center gap-2">
              <FaBug className="text-[#C62828]" />
              100% Pest Removal
            </div>
          </div>
        </motion.div>

        {/* Right Side Auto Scrolling Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl shadow-lg h-96"
        >
          <div className="absolute top-0 left-0 w-full h-full flex animate-scroll gap-4">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`pest-control-${index}`}
                className="rounded-2xl object-cover w-72 h-96 flex-shrink-0 shadow-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Promise Line Below Slider */}
      <div className="text-right mt-2">
        <p className="text-lg md:text-sm  text-[#1B4332] ml-3">
           Our Promise: Safe, Eco-Friendly & <span className="text-red-700"> Guaranteed </span>
        Pest-Free Living
        </p>
      </div>

      {/* Green gradient overlay for premium effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3CB371]/5 via-transparent to-[#1B4332]/5 pointer-events-none"></div>

      {/* CSS for infinite scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
