// src/components/AboutSection.jsx
import React from "react";
import { FaLeaf, FaShieldAlt, FaBug } from "react-icons/fa";
import aboutImg from "../assets/home/about.jpg";

export default function AboutSection() {
  return (
    <section className="relative bg-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-[pippins] text-[#1B4332] leading-snug">
            Protecting Your Home, <br /> Crafting a Pest-Free Future
          </h2>

          <p className="text-gray-600 text-lg">
            At <span className="font-semibold text-red-700">Neat & Clean Pest Control</span>, 
            we believe in delivering safe, sustainable, and long-lasting pest solutions. 
            With eco-friendly methods and certified professionals, we ensure your family’s 
            health and comfort while keeping unwanted pests away.
          </p>

          {/* Sleek Promise Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F4EA] text-[#1B4332] mb-3 group-hover:scale-110 transition">
                <FaShieldAlt className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1B4332]">Certified Safety</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Family-safe treatments, trusted & approved standards.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F4EA] text-[#1B4332] mb-3 group-hover:scale-110 transition">
                <FaLeaf className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1B4332]">Eco-Friendly</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Sustainable, plant-based solutions safe for nature.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEE2E2] text-[#C62828] mb-3 group-hover:scale-110 transition">
                <FaBug className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1B4332]">Pest-Free Guarantee</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Long-lasting protection with a complete guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Neat & Clean Pest Control"
            className="rounded-xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-4 md:px-6 py-2 md:py-3 border border-gray-200 flex items-center gap-2 md:gap-3 text-xs sm:text-sm md:text-base font-medium">
            <FaShieldAlt className="text-[#3CB371] text-sm md:text-lg" />
            <span className="text-gray-800 whitespace-nowrap">
              10+ Years of Trusted Protection
            </span>
          </div>
        </div>
      </div>

      {/* Highlight Text Below */}
      <div className="text-center mt-12 max-w-4xl mx-auto">
        <p className="text-lg md:text-md   text-gray-700 leading-relaxed">
          With a proven record of protecting thousands of homes and businesses, 
          <span className="text-red-700 font-semibold"> Neat & Clean Pest Control </span> 
          combines advanced technology, certified expertise, and customer-first 
          solutions to ensure a healthier, pest-free environment for you. 
        </p>
      </div>
    </section>
  );
}
