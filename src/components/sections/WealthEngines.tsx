import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Video } from 'lucide-react';

const WealthEngines = () => {
  const engines = [
    {
      icon: BookOpen,
      title: "Books",
      description: "Comprehensive guides on food safety compliance, risk management, and profit optimization strategies.",
      features: ["Industry Best Practices", "Case Studies", "Implementation Guides"],
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gradient-to-r from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      ctaText: "Explore Books",
      ctaColor: "bg-gradient-to-r from-gray-700 to-gray-800"
    },
    {
      icon: GraduationCap,
      title: "Courses",
      description: "Interactive online training programs designed to transform your food safety knowledge into profit.",
      features: ["Video Modules", "Interactive Quizzes", "Certification"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      ctaText: "Browse Courses",
      ctaColor: "bg-gradient-to-r from-blue-600 to-blue-700"
    },
    {
      icon: Video,
      title: "Consultations",
      description: "One-on-one expert guidance to implement food safety strategies that drive revenue and growth.",
      features: ["Custom Strategy", "Implementation Support", "Ongoing Coaching"],
      color: "from-green-600 to-green-700",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100",
      borderColor: "border-green-200",
      ctaText: "Book a Consultation",
      ctaColor: "bg-gradient-to-r from-green-600 to-green-700"
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
            WEALTH ENGINES
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
              Graham's 3
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
            >
              Wealth Engines
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="body-text mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Choose your path to food safety wealth. From books to courses to personalized consultations, 
            Graham has the expertise to transform your business.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full border-2 ${engine.borderColor} ${engine.bgColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 rounded-2xl p-8`}>
                <div className="text-center">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${engine.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <engine.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="name-text mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {engine.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="body-text text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {engine.description}
                  </motion.p>
                  
                  <div className="mb-6">
                    <motion.h4 
                      className="font-semibold text-[#1A1B1D] mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      What You'll Get:
                    </motion.h4>
                    <ul className="space-y-2">
                      {engine.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 + index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-[#848DAB] flex items-center justify-center"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#848DAB] mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                                                       <motion.button 
                    className="relative px-4 py-2.5 glass-button w-[220px]"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '1px'
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{engine.ctaText}</span>
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

export default WealthEngines;