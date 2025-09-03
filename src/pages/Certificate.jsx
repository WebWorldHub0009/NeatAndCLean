// src/pages/Certificate.jsx
import React from "react";
import CertificateHero from "../components/CertificateHero";
import { FaFilePdf, FaEye, FaDownload } from "react-icons/fa";

// ✅ Import your certificate PDFs (place them in src/assets/certificates/)
import cert1 from "../assets/doc/1.pdf";
import cert2 from "../assets/doc/2.pdf";
import cert3 from "../assets/doc/3.pdf";
import cert4 from "../assets/doc/4.pdf";
import cert5 from "../assets/doc/5.pdf";
import cert6 from "../assets/doc/6.pdf";
import cert7 from "../assets/doc/7.pdf";
import cert8 from "../assets/doc/8.pdf";

const Certificate = () => {
  const certificates = [
    { name: "Udyam Certification", file: cert1 },
    { name: "Pest Control Certificate", file: cert2 },
    { name: "Certification Of Participation", file: cert3 },
    { name: "ISO Certificate", file: cert4 },
    { name: "Certification Of Participation", file: cert5 },
    { name: "Certificate of Product Traning", file: cert6 },
    { name: "Udyam2 Certification", file: cert7 },
    { name: "Gst Certificate", file: cert8 },
  ];

  return (
    <div className="font-[Poppins]">
      {/* Hero Section */}
      <CertificateHero />

      {/* Certificates Section */}
      <section className="relative py-10 px-6 bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Trusted by industry leaders and government authorities — view or
            download our certifications to verify our authenticity & commitment.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-emerald-400/40 transition transform hover:-translate-y-2 p-6 flex flex-col items-center text-center"
              >
                {/* PDF Icon */}
                <FaFilePdf className="text-red-500 text-5xl mb-4" />

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {cert.name}
                </h3>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full shadow hover:bg-emerald-600 transition flex items-center gap-2"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="px-4 py-2 border border-emerald-500 text-emerald-600 rounded-full hover:bg-emerald-500 hover:text-white transition flex items-center gap-2"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
