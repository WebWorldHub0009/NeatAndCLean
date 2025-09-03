// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaBug,
  FaCertificate,
  FaProductHunt,
  FaContao,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

import footerBg from "../assets/home/bg1.avif"; // your background image

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Pest control services
const services = [
  { title: "General Pest Control Treatment", slug: "general-pest-control" },
  { title: "Rodent Control Services", slug: "rodent-control" },
  { title: "Piping System Termite Treatment", slug: "termite-treatment" },
  { title: "Mosquitoes Control Services", slug: "mosquito-control" },
  { title: "Ants Control Services", slug: "ants-control" },
  { title: "Bed Bugs Treatment", slug: "bed-bugs-treatment" },
  { title: "Garden Treatment Services", slug: "garden-treatment" },
  { title: "Fogging", slug: "fogging" },
  { title: "Sanitisation", slug: "sanitisation" },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-12 pb-12 px-6 md:px-16 font-[poppins] text-black overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-5xl text-[#3CB371] mb-2">Neat & Clean</h4>
          <p className="leading-relaxed text-black">
            Neat & Clean Pest Control provides expert pest management services, keeping your home and workplace safe, hygienic, and pest-free.
          </p>

          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com/neatandcleanpestcontrol", FaFacebookF],
              ["https://api.whatsapp.com/send/?phone=919818090963&text&type=phone_number&app_absent=0", FaWhatsapp],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3CB371] hover:text-[#C62828] transition duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="mailto:admin@neatandcleanpestcontrol.com"
              className="inline-flex items-center gap-2 bg-[#3CB371] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#1B4332] transition duration-300"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-4xl mb-4 text-[#3CB371]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaBug />],
                 ["Contact Us", "/contact", <FaContao />],
              ["Water Tank Cleaning", "/watertank", <FaCertificate />],
              ["Our Products", "/product", <FaProductHunt />],
              ["Certificates", "/certificates", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-black hover:text-[#3CB371] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails Section */}
          <h4 className="font-semibold text-4xl mt-6 mb-2 text-[#3CB371]">Emails</h4>
          <ul className="space-y-2">
            {["admin@neatandcleanpestcontrol.com"].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-black hover:text-[#3CB371] transition duration-300"
                >
                  <FaEnvelope className="text-[#3CB371]" /> {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-4xl mb-4 text-[#3CB371]">Our Services</h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaBug className="text-[#3CB371]" />
                <Link
                  to={`/services/${slug}`}
                  className="text-black hover:text-[#3CB371] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-4xl mb-4 text-[#3CB371]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-black">
            H.No. 56, Ground Floor, Anupam Building, Kalu Sarai, <br />
            New Delhi, Delhi - 110016, India
          </address>

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-[#3CB371]" />
            <a href="tel:+911146170188" className="hover:text-[#C62828] transition duration-300">+91-11-46170188</a>
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-[#3CB371]" />
            <a href="tel:+919818090963" className="hover:text-[#C62828] transition duration-300">+91-9818090963</a>
          </p>

          <div className="mb-4 flex justify-center items-center">
            <div className="relative right-6">

            <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-black border-t border-black pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Neat & Clean Pest Control. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#3CB371] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
