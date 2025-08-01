import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, ArrowRight, BookOpen, GraduationCap, Video, Shield, TrendingUp } from 'lucide-react';

const ContactCTA = () => {
  return (
    <footer className="bg-[#EAEEF4]">
      {/* Main CTA Section */}
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
              READY TO PROFIT?
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
                Ready to Turn Food
              </motion.div>
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, delay: 0.45 }}
                viewport={{ once: true }}
              >
                Safety Into Profit?
              </motion.div>
            </motion.h2>
            
            <motion.p 
              className="body-text mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Schedule your free 15-minute audit call and discover how much money you're leaving on the table.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-2xl rounded-2xl p-8">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-[#1A1B1D]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  Schedule Your Free Audit Call
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <input
                      placeholder="Your Name" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white text-[#1A1B1D]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <input
                      placeholder="Your Email" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white text-[#1A1B1D]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}
                  >
                    <input
                      placeholder="Your Business" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white text-[#1A1B1D]"
                    />
                  </motion.div>
                  <motion.button 
                    className="relative px-4 py-2.5 glass-button w-[220px]"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '1px'
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Schedule a Free 15-Minute Audit Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                    <div className="shine-effect"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A1B1D] mb-2">
                    15-Minute Free Audit
                  </h4>
                  <p className="text-[#848DAB]">
                    Quick assessment of your current food safety practices and profit opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A1B1D] mb-2">
                    Custom Action Plan
                  </h4>
                  <p className="text-[#848DAB]">
                    Personalized strategy to transform your food safety into revenue.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1A1B1D] mb-2">
                    ROI Calculator
                  </h4>
                  <p className="text-[#848DAB]">
                    See exactly how much money you can make from food safety compliance.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 bg-[#1A1B1D] text-white">
        <div className="unified-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Weekly Tips That Could Save You Millions
              </motion.h3>
              <motion.p 
                className="text-[#848DAB] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get exclusive insights on food safety compliance, profit opportunities, and industry trends.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input 
                  placeholder="Enter your email" 
                  className="flex-1 p-3 bg-white text-[#1A1B1D] border-0 rounded-lg"
                />
                <motion.button 
                  className="relative px-4 py-2.5 glass-button w-[220px]"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '1px'
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Subscribe</span>
                  <div className="shine-effect"></div>
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-[#848DAB]">graham@foodsafetyexpert.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-[#848DAB]">+1 (555) 123-4567</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Quick Links
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-4 text-yellow-500">Products</h4>
                  <ul className="space-y-2 text-sm text-[#848DAB]">
                    <li className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Books</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Courses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Consultations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Toolkit</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-4 text-yellow-500">Resources</h4>
                  <ul className="space-y-2 text-sm text-[#848DAB]">
                    <li>Media Kit</li>
                    <li>Press Releases</li>
                    <li>Speaking Engagements</li>
                    <li>Testimonials</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8 text-center"
          >
            <p className="text-[#848DAB] text-sm">
              © 2024 Graham Ponsaran. All rights reserved. | Food Safety Expert & Consultant
            </p>
          </motion.div>
        </div>
      </section>
    </footer>
  );
};

export default ContactCTA;