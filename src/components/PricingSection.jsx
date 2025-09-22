import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round(80 * (productCount / 50));
  const businessPrice = Math.round(150 * (productCount / 50));

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Global Impacts Section */}
        <motion.h2
          variants={textVariant(0.3)}
          className="text-4xl font-bold mb-6 text-gray-800"
        >
          Intelligon <span className="text-purple-600 font-bold">Global Impacts</span>
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We're proud of the trust we've built with our clients, our dedicated team, and our continued success in the industry. Here are some quick facts about us:
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-3xl font-bold text-blue-500">30+</p>
            <p className="text-sm text-gray-600 mt-2">Clients Globally</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-3xl font-bold text-pink-500">5K</p>
            <p className="text-sm text-gray-600 mt-2">Projects Delivered Annually</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-3xl font-bold text-green-500">50K</p>
            <p className="text-sm text-gray-600 mt-2">Annual Completes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-3xl font-bold text-orange-500">30+</p>
            <p className="text-sm text-gray-600 mt-2">Countries Traffic Worldwide</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeIn('up', 1.0)} className="mt-8">
          <p className="text-lg text-gray-700 mb-4">Ready to get started?</p>
          <motion.button
            variants={fadeIn('up', 1.1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;