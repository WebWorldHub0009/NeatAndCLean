// src/pages/Product.jsx
import React, { useState } from "react";
import ProductHero from "../components/ProductHero";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 🖼 Import product images
import sulfacImg from "../assets/product/solfac.avif";
import responsorImg from "../assets/product/responser.webp";
import premiseImg from "../assets/product/premise.avif";
import chlorImg from "../assets/product/chloro.avif";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    { name: "Sulfac", price: "₹2000.00", image: sulfacImg },
    { name: "Responsor", price: "₹650.00", image: responsorImg },
    { name: "Premise", price: "₹3000.00", image: premiseImg },
    { name: "Chlorpyriphos 50% EC", price: "₹400.00", image: chlorImg },
  ];

  return (
    <div className="font-[poppins]">
      {/* Hero Section */}
      <ProductHero />

      {/* Products Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent"
          >
            Our Premium Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Each product is carefully formulated for maximum effectiveness,
            safety, and long-term protection — trusted by professionals &
            households alike.
          </motion.p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-emerald-400/50 transition transform hover:-translate-y-3 p-6 flex flex-col items-center text-center group"
              >
                {/* Product Image */}
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-md mb-6 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-emerald-600 font-bold text-lg mb-4">
                  {product.price}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-5 py-2 bg-gradient-to-r cursor-pointer from-emerald-500 to-green-600 text-white rounded-full shadow hover:from-emerald-600 hover:to-green-700 transition-all"
                >
                  Enquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>

              {/* Product Info */}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-32 h-32 mx-auto rounded-xl object-cover shadow-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-emerald-600 font-bold text-xl mb-6">
                {selectedProduct.price}
              </p>

              {/* Buy Button */}
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 bg-gradient-to-r cursor-pointer from-emerald-500 to-green-600 text-white rounded-full shadow-md hover:from-emerald-600 hover:to-green-700 transition-all w-full"
              >
                Buy Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Product;
