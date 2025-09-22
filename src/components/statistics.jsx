import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round(80 * (productCount / 50));
  const businessPrice = Math.round(150 * (productCount / 50));

  const stats = [
    { value: "30+", label: "Clients Globally", color: "text-blue-500" },
    { value: "5K", label: "Projects Delivered Annually", color: "text-pink-500" },
    { value: "50K", label: "Annual Completes", color: "text-green-500" },
    { value: "30+", label: "Countries Traffic Worldwide", color: "text-orange-500" },
  ];

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="pt-20 md:pt-40 md:pb-10 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Global Impacts Section */}
        <motion.h2
          variants={textVariant(0.3)}
          className="text-4xl font-bold mb-6 text-gray-800"
        >
          Opinion Payout{" "}
          <span className="text-purple-600 font-bold">Global Impacts</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We're proud of the trust we've built with our clients, our dedicated
          team, and our continued success in the industry. Here are some quick
          facts about us:
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          className="grid grid-cols-2 md:mx-20 md:grid-cols-2 gap-6 mb-20"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105"
            >
              <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
              <p className="text-sm text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
