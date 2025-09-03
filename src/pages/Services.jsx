import React from "react";
import { Link } from "react-router-dom";
import ServicesHero from "../components/ServiceHero";
import ServicesSection from "../components/ServiceSection";
import { Shield, Droplet, Sparkles, Star } from "lucide-react";

const extraServices = [
  {
    title: "Advanced Pest Protection",
    description:
      "A fusion of herbal techniques and modern science that forms a lasting, eco-friendly shield around your spaces.",
    icon: <Shield className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Premium Water Tank Cleaning",
    description:
      "Deep cleaning with high-pressure jets and antibacterial treatment to ensure crystal-clear, safe water every day.",
    icon: <Droplet className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Next-Gen Disinfection",
    description:
      "World-class disinfection eliminating 99.9% germs, viruses, and bacteria — protecting families and businesses alike.",
    icon: <Sparkles className="w-10 h-10 text-amber-400" />,
  },
  {
    title: "Trusted by Thousands",
    description:
      "10+ years of excellence, trusted by households and industries for unmatched hygiene and protection.",
    icon: <Star className="w-10 h-10 text-rose-400" />,
  },
];

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />

      {/* 🔥 Premium Sleek Section (No Motion) */}
      <section className="relative bg-[#0B0F0E] text-white py-20 font-[Poppins] overflow-hidden">
        {/* Background Accent Lights */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[160px]" />
        </div>

        <div className="relative z-10 container mx-auto text-center px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Clients Trust{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Neat & Clean
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            More than just services, we deliver{" "}
            <span className="text-emerald-400 font-semibold">
              safety, purity, and peace of mind
            </span>
            . Every solution is designed with precision, care, and world-class
            standards.
          </p>

          {/* Services Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {extraServices.map((service, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-white/5 backdrop-blur-md p-8 border border-white/10 shadow-md hover:border-emerald-400/30 hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex justify-center">{service.icon}</div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                {/* Desc */}
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <Link to="/contact">
              <button className="px-8 py-3 cursor-pointer bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full text-base font-semibold text-black shadow-md hover:shadow-emerald-400/30 hover:scale-105 transition-transform">
                Experience Premium Care 🚀
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
