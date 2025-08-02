import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Truck, Scale } from 'lucide-react';

const ProfitOpportunities = () => {
  const opportunities = [
    {
      icon: Utensils,
      title: "Restaurateurs",
      subtitle: "Turn Compliance Into Customers.",
      description: "Transform food safety from a cost center into your biggest competitive advantage. Attract health-conscious diners and premium pricing.",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gradient-to-r from-gray-50 to-gray-100",
      borderColor: "border-gray-200"
    },
    {
      icon: Truck,
      title: "Suppliers",
      subtitle: "Win Big Contracts with Clean Standards.",
      description: "Leverage superior food safety protocols to secure major contracts with restaurants, hotels, and government agencies.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: Scale,
      title: "Consumers",
      subtitle: "Profit from Whistleblowing & Lawsuits.",
      description: "Learn how to identify violations, document evidence, and claim rewards for exposing food safety violations.",
      color: "from-green-600 to-green-700",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="unified-section">
      <div className="unified-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="descriptor-text mb-4"
          >
            PROFIT OPPORTUNITIES
          </motion.div>
          
          <motion.h2 
            className="headline-gradient text-5xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[150px] 3xl:text-[170px] 4xl:text-[190px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              How You Can
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
            >
              Profit from Food Safety
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="body-text mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Whether you're a restaurant owner, supplier, or consumer, there are millions to be made 
            by mastering food safety compliance and enforcement.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`h-full border-2 ${opportunity.borderColor} ${opportunity.bgColor} hover:shadow-2xl transition-all duration-300 rounded-2xl p-8`}>
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${opportunity.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="name-text mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {opportunity.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-lg font-semibold bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent mb-4`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {opportunity.subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="body-text text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {opportunity.description}
                  </motion.p>
                  
                                                       <motion.button 
                    className="relative px-4 py-2.5 glass-button w-[220px]"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '1px'
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="shine-effect"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitOpportunities;