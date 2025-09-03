import React from "react";
import waterTankBg from "../assets/home/water.jpg"; 

const WaterTankHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center font-[Poppins]"
      style={{
        backgroundImage: `url(${waterTankBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Premium <span className="text-[#3CB371]">Water Tank Cleaning</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Ensure pure, safe, and hygienic water for your family and workplace.  
          With advanced techniques and eco-friendly solutions,  
          Neat & Clean Pest Control guarantees **crystal-clear tanks** free from contamination.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 cursor-pointer bg-[#3CB371] hover:bg-[#2E8B57] text-white font-medium text-lg rounded-full shadow-xl transition-all duration-300">
            Get a Free Inspection
          </button>
        
        </div>
      </div>

      {/* Bottom Left Badge */}
      <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-5 py-3 rounded-lg border border-white/20 text-white text-sm md:text-base shadow-lg">
        ✅ 100% Safe | 🛡️ Certified Experts | 💧 Hygienic Guarantee
      </div>

      {/* Top Right Highlight */}
      <div className="absolute top-6 right-6 bg-[#3CB371] px-5 py-2 rounded-full text-white font-semibold shadow-lg text-sm md:text-base">
        #1 Trusted Water Tank Cleaning Service
      </div>
    </section>
  );
};

export default WaterTankHero;
