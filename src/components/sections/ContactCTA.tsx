import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock, ArrowRight, BookOpen, GraduationCap, Video, Shield, TrendingUp } from 'lucide-react';

const ContactCTA = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
              Ready to Turn Food Safety Into
              <span className="text-gray-700 dark:text-gray-300"> Profit?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Schedule your free 15-minute audit call and discover how much money you're leaving on the table.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Schedule Your Free Audit Call
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <input
                        placeholder="Your Name" 
                        className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Your Email" 
                        className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Your Business" 
                        className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <Button 
                      className="w-[220px] rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3"
                      size="lg"
                    >
                      Schedule a Free 15-Minute Audit Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
              </CardContent>
            </Card>
          </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    15-Minute Free Audit
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quick assessment of your current food safety practices and profit opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Custom Action Plan
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personalized strategy to transform your food safety into revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    ROI Calculator
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    See exactly how much money you can make from food safety compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Light Theme Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Weekly Tips That Could Save You Millions</h3>
              <p className="text-gray-300 mb-6">
                Get exclusive insights on food safety compliance, profit opportunities, and industry trends.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <input 
                  placeholder="Enter your email" 
                  className="flex-1 p-3 bg-white text-gray-900 border-0 rounded-lg"
                />
                <Button className="w-[220px] rounded-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white">
                  Subscribe
                </Button>
              </div>
              
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-sm text-gray-300">graham@foodsafetyexpert.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>

            {/* Dark Theme Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 text-gold">Products</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
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
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-gold">Resources</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Media Kit</li>
                    <li>Press Releases</li>
                    <li>Speaking Engagements</li>
                    <li>Testimonials</li>
                  </ul>
            </div>
          </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Graham Ponsaran. All rights reserved. | Food Safety Expert & Consultant
            </p>
        </motion.div>
      </div>
    </section>
    </footer>
  );
};

export default ContactCTA;