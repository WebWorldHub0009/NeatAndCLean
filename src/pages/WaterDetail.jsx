// src/pages/WaterDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import waterServices from "../pages/waterService";
import TankService from "../components/TankService";

const WaterDetail = () => {
  const { slug } = useParams();
  const service = waterServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-600 font-[Poppins]">
        Service not found!
      </div>
    );
  }

  return (
    <>
    <div className="bg-gray-50 text-gray-900 font-[Poppins]">
      {/* 🔹 Hero Section */}
    <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600">
  {/* Hollow SVG Circles */}
  <svg
    className="absolute -top-10 -left-10 w-96 h-96 opacity-20 animate-pulse"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
  >
    <circle
      cx="100"
      cy="100"
      r="80"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="60"
      stroke="white"
      strokeWidth="1"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="40"
      stroke="white"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>

  <svg
    className="absolute bottom-0 right-0 w-[28rem] h-[28rem] opacity-25 animate-spin-slow"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
  >
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="white"
      strokeWidth="1"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke="white"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>

  {/* Glassmorphic Overlay */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl">
    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent drop-shadow-lg">
      {service.title}
    </h1>
    <p className="mt-6 text-lg md:text-2xl text-gray-100 italic">
      "Clean Tanks, Healthy Water, Safe Living"
    </p>
  </div>
</section>
      {/* 🔹 Detail Section */}
      <section className="container mx-auto py-10 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 border-l-4 border-green-500 pl-4">
            About Our {service.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {service.description}
          </p>
          <p className="text-gray-600 text-2xl leading-relaxed">
            {service.detailedDesc}
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={service.image}
            alt={service.title}
            className="rounded-3xl h-[400px] w-full object-cover shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-32 h-[4px] bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full" />

      {/* 🔹 Process & Benefits */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Process */}
          <div className="space-y-6 bg-white rounded-2xl shadow-lg p-10 border border-green-200 hover:shadow-green-200/60 transition-shadow">
            <h2 className="text-3xl font-bold text-green-800 border-b-2 border-green-500 pb-3">
              Our Cleaning Process
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✅ Step 1: Initial Inspection & Tank Drainage</li>
              <li>✅ Step 2: Sludge & Dirt Removal</li>
              <li>✅ Step 3: High-Pressure Jet Cleaning</li>
              <li>✅ Step 4: Anti-Bacterial & Eco-Safe Treatment</li>
              <li>✅ Step 5: Final Rinse & Quality Check</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-6 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-10 hover:shadow-green-400/70 transition-shadow">
            <h2 className="text-3xl font-bold border-b-2 border-green-300 pb-3">
              Why Choose Us?
            </h2>
            <ul className="space-y-4 text-lg">
              <li>🌿 Eco-friendly cleaning materials</li>
              <li>💧 100% bacteria & sludge removal</li>
              <li>⚡ Advanced tools & trained professionals</li>
              <li>🏆 Reliable, fast & cost-effective solutions</li>
              <li>🛡️ Safe & hygienic water for your family</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Call To Action */}
      <section className="py-10 bg-gradient-to-r from-green-700 to-green-900 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-extrabold">Book Your Tank Cleaning Today!</h2>
          <p className="text-lg text-gray-200">
            Ensure safe, hygienic water for your family and business with{" "}
            <span className="text-green-300 font-semibold">
              Neat & Clean Pest Control
            </span>
            .
          </p>
          <a
            href="tel:+919818090963"
            className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-xl hover:bg-green-200 hover:scale-105 transition-transform duration-500"
          >
            📞 Call Us Now
          </a>
        </div>
      </section>
    </div>
     </>
  );
};

export default WaterDetail;
