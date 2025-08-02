import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, TrendingUp, Building } from 'lucide-react';

const GovernmentWhitepaper = () => {
  return (
    <section className="unified-section">
      <div className="unified-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="descriptor-text mb-4"
          >
            GOVERNMENT WHITEPAPER
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
              The Economic Impact
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
            >
              of Clean Kitchens
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="body-text mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            A comprehensive analysis of how food safety compliance drives economic growth, 
            reduces healthcare costs, and creates sustainable business opportunities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h3 
              className="name-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
            >
              Economic Benefits
            </motion.h3>
            <motion.p 
              className="text-[#848DAB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              How food safety drives revenue growth and market expansion
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Building className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h3 
              className="name-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              viewport={{ once: true }}
            >
              Policy Recommendations
            </motion.h3>
            <motion.p 
              className="text-[#848DAB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Strategic frameworks for government and industry collaboration
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h3 
              className="name-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Implementation Guide
            </motion.h3>
            <motion.p 
              className="text-[#848DAB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
            >
              Step-by-step roadmap for food safety transformation
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center"
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
            transition={{ duration: 0.4, delay: 2.0, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Download Whitepaper
            </span>
            <div className="shine-effect"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentWhitepaper;