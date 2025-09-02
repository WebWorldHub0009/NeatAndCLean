// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaCertificate,
  FaEnvelope,
  FaReadme,
  FaEnvelopeOpen,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/neatclean-logo.png";

const navItemsLeft = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
];

const navItemsRight = [
    { name: "Water Tank Cleaning", path: "/watertank", icon: <FaCertificate className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/arvind.kumar.649735/",
  instagram: "https://www.instagram.com",
  whatsapp: "https://api.whatsapp.com/send/?phone=919818090963&text&type=phone_number&app_absent=0",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 hover:text-[#3CB371] ${
      pathname === path ? "text-[#C62828] font-semibold" : "text-[#1C1C1C]"
    }`;

  return (
    <>
      {/* Top Header — desktop only */}
      <div className="hidden md:block bg-[#1B4332] text-white text-xs md:text-sm py-2 px-4 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <p className="flex items-center gap-2">
            <FaEnvelopeOpen /> LICENSE NUMBER : 10229
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> GST NUMBER : 07BKMPK4054P1ZK
          </p>
          <p className="flex items-center gap-2">
            <FaReadme /> ISO REG. NUMBER : 9001:20015
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-4 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Items */}
          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase">
            {navItemsLeft.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={navLinkClasses(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <Link to="/" className="flex justify-center items-center">
            <img
              src={""} // TODO: replace with logo
              alt="Neat & Clean Pest Control Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Right Items */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase">
              {navItemsRight.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3 ml-6 text-[#1C1C1C]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3CB371]"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      twitter: FaTwitter,
                      youtube: FaYoutube,
                      linkedin: FaLinkedinIn,
                      skype: FaSkype,
                      whatsapp: FaWhatsapp,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#1C1C1C]">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
          </div>
        </div>

        {/* Mobile Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex"
            >
              {/* Slide-out */}
              <motion.div
                ref={panelRef}
                className="w-72 h-full bg-white shadow-xl px-6 py-4 flex flex-col"
              >
                {/* Mobile brand row */}
                <div className="flex justify-between items-center">
                  <img src={""} alt="Logo" className="h-7" />
                  <FaTimes
                    className="text-xl text-[#1C1C1C] cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>

                {/* Compact Top Header inside menu */}
                

                <hr className="my-4" />

                {/* Mobile Nav Items */}
                <nav className="flex flex-col gap-3 text-sm">
                  {[...navItemsLeft, ...navItemsRight].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2 ${
                        pathname === item.path
                          ? "font-semibold text-[#C62828]"
                          : "text-[#1C1C1C]"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Quick actions */}
                <div className="mt-6">
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold py-2 shadow hover:opacity-95 transition"
                  >
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                </div>
                <div className="mt-4 rounded-xl border border-gray-100 bg-gradient-to-r from-[#E6F4EA]/70 to-white p-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 border border-gray-200 text-[11px] font-medium text-[#1B4332]">
                      <FaEnvelopeOpen className="text-[#3CB371]" />
                      License: 10229
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 border border-gray-200 text-[11px] font-medium text-[#1B4332]">
                      <FaEnvelope className="text-[#3CB371]" />
                      GST: 07BKMPK4054P1ZK
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 border border-gray-200 text-[11px] font-medium text-[#1B4332]">
                      <FaReadme className="text-[#3CB371]" />
                      ISO: 9001:20015
                    </span>
                  </div>
                </div>

                {/* Mobile Social */}
                <div className="mt-auto pt-4 border-t text-xs">
                  <div className="flex gap-3 mt-3 text-lg text-[#1C1C1C]">
                    {Object.entries(socialLinks).map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3CB371]"
                      >
                        {React.createElement(
                          {
                            facebook: FaFacebookF,
                            instagram: FaInstagram,
                            twitter: FaTwitter,
                            youtube: FaYoutube,
                            linkedin: FaLinkedinIn,
                            skype: FaSkype,
                            whatsapp: FaWhatsapp,
                          }[k]
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Overlay */}
              <div
                className="flex-1 bg-black/10 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernNavbar;
