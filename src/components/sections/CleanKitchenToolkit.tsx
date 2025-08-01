import React from 'react';
import { motion } from 'framer-motion';
import { Radio, BarChart3, Search } from 'lucide-react';

const CleanKitchenToolkit = () => {
  const tools = [
    {
      icon: Radio,
      title: "Recall Radar",
      description: "Real-time alerts for food safety recalls, contamination warnings, and supplier issues that could impact your business.",
      features: ["Instant Notifications", "Risk Assessment", "Action Plans"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-red-50 to-pink-50"
    },
    {
      icon: BarChart3,
      title: "Clean Kitchen Scorecard",
      description: "Comprehensive assessment tool that evaluates your food safety practices and provides actionable improvement strategies.",
      features: ["Custom Scoring", "Benchmark Analysis", "Progress Tracking"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50"
    },
    {
      icon: Search,
      title: "Supplier Transparency Scanner",
      description: "Deep-dive analysis of your suppliers' food safety records, certifications, and compliance history.",
      features: ["Background Checks", "Certification Verification", "Risk Scoring"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50"
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
            CLEAN KITCHEN TOOLKIT
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
              The Clean Kitchen
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
            >
              Toolkit
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="body-text mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Three powerful tools that give you the intelligence, assessment, and transparency 
            you need to turn food safety into a competitive advantage.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
              className={`${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl ${tool.bgColor} border-2 border-gray-200`}
            >
              <div className="flex-1">
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <tool.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="name-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {tool.title}
                </motion.h3>
                
                <motion.p 
                  className="body-text mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {tool.description}
                </motion.p>
                
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                      <span className="text-[#1A1B1D] font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="w-64 h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-2 border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mx-auto mb-4`}>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#1A1B1D] mb-2">
                      {tool.title}
                    </div>
                    <div className="text-sm text-[#848DAB]">
                      Interactive Demo
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                               <motion.button 
            className="relative px-4 py-2.5 glass-button w-[220px]"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '11px',
              letterSpacing: '1px'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Try the Toolkit Free</span>
            <div className="shine-effect"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanKitchenToolkit;