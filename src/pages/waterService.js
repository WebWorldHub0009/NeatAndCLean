// src/data/waterServicesData.js
import pest1 from "../assets/water/fresh.avif";
import pest2 from "../assets/water/stp.avif";
import pest3 from "../assets/water/rain.webp";
import pest4 from "../assets/water/disel.avif";

const waterService = [
  {
    title: "Fresh Water Tank Cleaning Service",
    slug: "fresh-tank",
    image: pest1,
    shortDesc:
      "Ensure your family’s health with pure, clean, and safe drinking water. Our fresh water tank cleaning eliminates dirt, algae, and bacteria for a hygienic supply.",
    detailedDesc: `
      Our Fresh Water Tank Cleaning Service is designed to provide households and businesses with the cleanest and safest water possible. 
      Over time, water tanks accumulate mud, algae, rust, and harmful microorganisms that can contaminate your supply. 
      Our expert team uses **eco-friendly solutions**, high-pressure jet cleaning, and advanced vacuuming methods to ensure 
      your tank is thoroughly cleaned without any chemical residue.
    `,
    sections: {
      process: [
        "Inspection of the water tank to assess contamination.",
        "Complete drainage of the tank.",
        "Mechanical scrubbing to remove dirt, mud, and algae.",
        "High-pressure jet cleaning for walls and base.",
        "Vacuuming and sludge removal.",
        "UV treatment and anti-bacterial disinfection.",
        "Refilling and final quality check."
      ],
      benefits: [
        "Pure and safe drinking water.",
        "Prevents bacterial growth and contamination.",
        "Increases water storage life and quality.",
        "Eco-friendly & safe cleaning process."
      ],
    },
  },
  {
    title: "STP Tank Cleaning Service",
    slug: "stp-tank",
    image: pest2,
    shortDesc:
      "Professional cleaning of STP (Sewage Treatment Plant) tanks to ensure efficiency and compliance with safety standards.",
    detailedDesc: `
      STP tanks play a crucial role in wastewater treatment, but sludge and chemical buildup can affect efficiency. 
      Our STP Tank Cleaning Service uses **industrial-grade equipment**, sludge removal pumps, and anti-corrosion treatment to restore 
      the tank’s efficiency and extend its operational life. We also ensure safe disposal of waste as per government norms.
    `,
    sections: {
      process: [
        "Sludge removal with high-power suction machines.",
        "Cleaning and desilting of tank walls and floors.",
        "Deodorization and chemical-free disinfection.",
        "Inspection of inlets/outlets for blockages.",
        "Safe disposal of sludge as per environmental regulations."
      ],
      benefits: [
        "Improves STP performance and efficiency.",
        "Prevents foul smell and contamination.",
        "Ensures compliance with pollution control standards.",
        "Extends lifespan of STP systems."
      ],
    },
  },
  {
    title: "Rainwater Harvesting Tank Cleaning Solution",
    slug: "rain-harvesting",
    image: pest3,
    shortDesc:
      "Maximize the efficiency of your rainwater harvesting system with professional tank cleaning to remove dirt, silt, and impurities.",
    detailedDesc: `
      Rainwater harvesting systems often collect debris, silt, and organic matter, which can contaminate stored water. 
      Our Rainwater Harvesting Tank Cleaning Service ensures **crystal-clear water storage**, preventing clogging and improving 
      system performance. We use specialized eco-cleaning techniques to maintain water purity without harming the environment.
    `,
    sections: {
      process: [
        "Removal of leaves, mud, and organic matter.",
        "Deep cleaning of tank walls and base.",
        "High-pressure jet cleaning and sludge extraction.",
        "Installation check for filters and inlets.",
        "Eco-friendly disinfection treatment."
      ],
      benefits: [
        "Improves water quality for reuse.",
        "Prevents blockages in harvesting systems.",
        "Extends tank and filter life.",
        "Promotes sustainable water usage."
      ],
    },
  },
  {
    title: "Diesel Tank Cleaning Service",
    slug: "diesel-tank",
    image: pest4,
    shortDesc:
      "Maintain the purity and efficiency of stored diesel with our specialized diesel tank cleaning solutions.",
    detailedDesc: `
      Diesel tanks often suffer from **sludge, water contamination, and microbial growth**, which reduce fuel efficiency and damage engines. 
      Our Diesel Tank Cleaning Service uses **high-precision filtration, dewatering, and vacuum cleaning** methods to restore fuel purity. 
      We ensure minimum downtime and maximum operational safety.
    `,
    sections: {
      process: [
        "Inspection of fuel quality and contamination level.",
        "Safe draining of diesel (stored separately).",
        "Sludge and microbial removal from tank walls.",
        "High-pressure jet cleaning and drying.",
        "Polishing and filtration of diesel before reuse."
      ],
      benefits: [
        "Improves fuel efficiency and reduces engine wear.",
        "Prevents microbial growth in diesel tanks.",
        "Extends the lifespan of fuel storage tanks.",
        "Compliant with safety and environmental norms."
      ],
    },
  },
];

export default waterService;
