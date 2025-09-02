import React from "react";
import why1 from "../assets/home/h5.jpg"; // replace with pest control related images
import why2 from "../assets/home/h6.jpg";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0B1D16] text-white py-8 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-4xl sm:text-6xl md:text-8xl text-[#3CB371] font-cursive2 font-[poppins] tracking-widest mb-2">
        WHY <span className="inline-block">NEAT & CLEAN</span>
      </h2>

      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center border-t border-b border-white py-10">
        {/* Image */}
        <div className="order-1 md:order-1">
          <img
            src={why1}
            alt="Expert Pest Control"
            className="w-full h-[250px] sm:h-[300px] object-cover rounded-md"
          />
        </div>

        {/* Text */}
        <div className="order-2 md:order-2 text-[#F5F5F5] leading-relaxed">
          <p className="font-body">
            At <span className="text-[#3CB371]">Neat & Clean Pest Control</span>, 
            we protect your home and business with eco-friendly, effective solutions. 
            Our team specializes in eliminating pests while ensuring safety for your family, pets, and the environment. 
            We combine the latest technology with proven techniques to keep your spaces hygienic and pest-free. 
            From inspections to preventive care, every step is handled with precision and care.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center border-b border-white py-5 mt-5">
        {/* Text */}
        <div className="order-2 md:order-3 text-[#F5F5F5] leading-relaxed">
          <p className="font-body">
            With years of experience, our trained professionals ensure every treatment is thorough and lasting. 
            We believe pest control is not just about removal, but creating safe, clean, and healthy environments. 
            Choosing us means choosing reliability, trust, and unmatched service quality. 
            We tailor solutions to your unique needs, preventing future infestations and maintaining peace of mind. 
            The result is a home or workplace that’s not only pest-free but truly hygienic and comfortable.
          </p>
        </div>

        {/* Image */}
        <div className="order-1 md:order-4">
          <img
            src={why2}
            alt="Safe & Effective Pest Solutions"
            className="w-full h-[250px] sm:h-[300px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
