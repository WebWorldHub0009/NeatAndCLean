import React from "react";
import {
  FaHandsHelping,
  FaClipboardList,
  FaMousePointer,
  FaBug,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Provide Us With The Details",
    description:
      "Let us know your availability and the problem you're facing. Our team customizes a service plan that fits your timeline.",
    icon: <FaHandsHelping className="text-4xl text-[#2F855A]" />,
    extra: "Getting started is as easy as a call or a quick click.",
  },
  {
    id: 2,
    title: "Pick The Suitable Plan",
    description:
      "Our technician visits the site, inspects thoroughly, and helps you choose the most effective and affordable solution.",
    icon: <FaClipboardList className="text-4xl text-[#2F855A]" />,
    extra: "One-time or recurring treatments — we’ve got you covered.",
  },
  {
    id: 3,
    title: "Book In Just A Few Clicks",
    description:
      "Confirm your plan and schedule online instantly. You'll get a WhatsApp/SMS and email confirmation.",
    icon: <FaMousePointer className="text-4xl text-[#2F855A]" />,
    extra: "No paperwork, no waiting. Hassle-free booking process.",
  },
  {
    id: 4,
    title: "Safe & Effective Treatment",
    description:
      "Our certified experts carry out the treatment with eco-friendly solutions, leaving your place safe and pest-free.",
    icon: <FaBug className="text-4xl text-[#C53030]" />,
    extra: "We provide after-care tips and ongoing support if needed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-green-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-[#2F855A] font-semibold uppercase tracking-widest">
          Neat & Clean Pest Control
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          How Our Process Works
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          From your first call to long-lasting protection, we make pest control
          simple, safe, and stress-free.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group border border-gray-200 rounded-2xl p-8 bg-white shadow-md 
                       hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            {/* Number Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-[#2F855A] 
                              text-[#2F855A] font-bold text-base group-hover:bg-[#2F855A] group-hover:text-white transition-all duration-300">
                <span className="group-hover:hidden">{idx + 1}</span>
                <FaCheck className="hidden group-hover:block text-white text-sm" />
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-4">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center font-semibold text-xl mb-3 text-gray-800">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3 leading-relaxed">
              {step.description}
            </p>

            {/* Extra */}
            <p className="text-center text-gray-500 text-xs italic">
              {step.extra}
            </p>

            {/* Hover Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6">
              <div className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to="/contact">
                  <button className="w-full cursor-pointer rounded-xl bg-[#2F855A] text-white text-sm py-2 hover:bg-[#276749] transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-5 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Protect your home and business with our trusted, eco-friendly pest
          solutions. We’re just a call away!
        </p>
        <Link to="/contact">
          <button className="bg-[#2F855A] cursor-pointer text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#276749] transition">
            Book Your Inspection Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
