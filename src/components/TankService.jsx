import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";


import pest1 from "../assets/water/fresh.avif";
import pest2 from "../assets/water/stp.avif";
import pest3 from "../assets/water/rain.webp";
import pest4 from "../assets/water/disel.avif";

const services = [
  { title: "Fresh WaterTank Cleaning Service", slug: "fresh-tank", image: pest1 },
  { title: "STP Tank Cleaning Service", slug: "stp-tank", image: pest2 },
  { title: "Rainwater Harvesting Tank Cleaning Solution", slug: "rain-harvesting", image: pest3 },
  { title: "Diesel Tank Cleaning Service", slug: "diesel-tank", image: pest4 },
];

export default function TankService() {
  return (
    <section className="relative bg-[#0B1D16] font-[poppins] py-10 overflow-hidden">
     

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-cursive1 text-5xl md:text-6xl text-[#3CB371] tracking-wide">
            Our Water Tank Cleaning <span className="text-[#FFFFFF]">Services</span>
          </h2>
          <p className="mt-2 font-body text-[#F5F5F5] leading-relaxed text-base md:text-md">
            At <span className="text-[#3CB371]">Neat & Clean Pest Control</span>, we provide
            effective and eco-friendly pest control and water tank solutions for your home, office, and outdoor spaces.
            Our services are tailored to ensure safety, hygiene, and complete peace of mind.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/watertank/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-black/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

                  <div className="absolute top-8 left-8 font-cursive2 text-white text-7xl opacity-20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-cursive2 text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-300 mt-2 opacity-90">
                      Safe, effective & eco-friendly pest control solutions.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
          @keyframes bubbleFloat {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
          .animate-bubbleGlow {
            animation: bubbleFloat infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
