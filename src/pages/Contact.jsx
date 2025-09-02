import React from "react";
import ContactHero from "../components/ContactHero";
import bg from "../assets/home/ncbg.jpg";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F7F5F2] text-[#1C1C1C] mt-1 font-body">
        {/* Left Panel: Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-[#faf7f7] px-8 py-16 shadow-2xl"
        >
          <h2 className="text-4xl font-[poppins] font-bold mb-6 pb-3 inline-block border-b-4 border-[#3CB371] text-[#3CB371]">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#5E5E5E] mb-10 font-body leading-relaxed">
            At{" "}
            <span className="font-[poppins] text-xl text-[#3CB371]">
              Neat & Clean Pest Control
            </span>{" "}
            we ensure pest-free, hygienic, and safe environments with expert
            care and eco-friendly solutions.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold mb-1 font-[poppins] text-[#3CB371]">Contact Person</h4>
              <p className="font-body">👤 Neat & Clean Pest Control Team</p>
              <p>📞 +91-11-46170188</p>
              <p>📞 +91-9818090963</p>
            </div>

            <div>
              <h4 className="font-semibold font-[poppins] mb-1 text-[#3CB371]">Email</h4>
              <p>✉️ admin@neatandcleanpestcontrol.com</p>
            </div>
            <div>
              <h4 className="font-semibold font-[poppins] mb-1 text-[#3CB371]">Office Address</h4>
              <p className="leading-relaxed">
                H.No. 56, Ground Floor, Anupam Building, Kalu Sarai, <br />
                New Delhi, Delhi - 110016, India
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-[#3CB371] transition-colors cursor-pointer"
                />
              )
            )}
          </div>
        </motion.div>

        {/* Right Panel: Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/80" />

          {/* Form */}
          <form
            action="https://formsubmit.co/admin@neatandcleanpestcontrol.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3 className="text-2xl font-cursive2 font-bold text-[#3CB371] mb-6 border-b-2 border-[#3CB371] inline-block">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />

              {/* Services Dropdown */}
              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Service
                </option>
                <option value="General Pest Control" className="text-black">
                  General Pest Control Treatment
                </option>
                <option value="Rodent Control" className="text-black">
                  Rodent Control Services
                </option>
                <option value="Termite Treatment" className="text-black">
                  Piping System Termite Treatment
                </option>
                <option value="Mosquito Control" className="text-black">
                  Mosquitoes Control Services
                </option>
                <option value="Ants Control" className="text-black">
                  Ants Control Services
                </option>
                <option value="Bed Bugs Treatment" className="text-black">
                  Bed Bugs Treatment
                </option>
                <option value="Garden Treatment" className="text-black">
                  Garden Treatment Services
                </option>
                <option value="Fogging" className="text-black">
                  Fogging
                </option>
                <option value="Sanitisation" className="text-black">
                  Sanitisation
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#3CB371] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3CB371] text-white py-3 font-body font-semibold rounded-full hover:bg-[#2E8B57] transition duration-300 shadow-lg"
            >
              Send Message
            </button>

            {/* Formsubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.neatandcleanpestcontrol.com/"
            />
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
