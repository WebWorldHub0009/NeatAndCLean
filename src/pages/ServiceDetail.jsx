// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import serviceData from "../pages/serviceData"; 

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-white font-[poppins]">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] via-[#111] to-black text-white font-[poppins]">
      {/* 🔥 Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={`${service.image}`} 
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {service.intro}
          </p>
        </motion.div>
      </section>

      {/* 🔥 Center Heading */}
      <section className="py-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {service.mainHeading}
        </motion.h2>
      </section>

      {/* 🔥 Image + Description */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 lg:px-20 py-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={`${service.image}`}
            alt={service.title}
            className="rounded-xl h-[400px] w-full shadow-xl"
          />
          <div className="absolute -bottom-6 -left-2 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            Premium Care
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* 🔥 Highlights */}
      <section className="py-10 bg-gradient-to-b from-black to-[#0f0f0f] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Key Highlights of {service.title}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {service.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="flex items-start gap-4 bg-[#111] p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition"
              >
                <CheckCircle className="text-emerald-500 w-6 h-6 mt-1" />
                <p className="text-gray-200 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
