import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: " Amplify Voices",
      description: "We ensure diverse perspectives are heard and valued in every research project."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: " Build Trust",
      description: "We create a secure and rewarding environment for participants and partners alike."
    },
    {
      icon: "🟢", // Replace with your actual icon component or image
      title: " Drive Innovation",
      description: "We support academic and commercial research with reliable, actionable data."
    },
    {
      icon: "🟠", // Replace with your actual icon component or image
      title: "  Ensure Transparency",
      description: "We maintain clear communication and ethical standards throughout every research engagement."
    }
    
  ];

  return (
    <section id="about" className="w-full bg-blue-200 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-2xl text-purple-600 font-medium mb-2"
            >
              ACHIEVE MORE
            </motion.div>
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-xl font-bold text-gray-900"
            >
              At Opinion Payout, our mission is to empower research through ethical data collection and inclusive participation.
              We believe that every opinion matters—and when shared responsibly, it can shape better decisions, products, and policies.

            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-4"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-2xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-xl text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;