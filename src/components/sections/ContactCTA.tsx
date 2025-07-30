import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Calendar, MessageCircle, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Phone Consultation",
      description: "Speak directly with Graham about your specific challenges",
      action: "Call Now: (555) 123-4567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "Schedule Strategy Session",
      description: "Book a 30-minute strategy session to discuss your goals",
      action: "Book Free Session",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      description: "Get detailed written analysis of your situation",
      action: "Send Email",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const urgencyIndicators = [
    "Limited consultation slots available this month",
    "Free strategy sessions filling up quickly",
    "Next available opening in 2 weeks",
    "Priority booking for serious inquiries"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-4">
            🚀 Ready to Transform Your Business?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Transformation Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 500+ businesses that have transformed their food safety compliance into profitable competitive advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Choose Your Preferred Contact Method</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                            <div className="flex items-center text-yellow-400 text-sm font-semibold">
                              {method.action}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Urgency Indicators */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-red-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-red-400" />
                    Limited Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {urgencyIndicators.map((indicator, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Guarantee */}
            <motion.div variants={itemVariants}>
              <div className="bg-green-900/30 border border-green-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">100% Satisfaction Guarantee</h4>
                </div>
                <p className="text-green-300 text-sm">
                  If you're not completely satisfied with your consultation, we'll refund every penny. 
                  No questions asked.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Get Your Free Strategy Session
                </CardTitle>
                <p className="text-gray-400">
                  Fill out the form below and we'll contact you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your biggest food safety challenge
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      placeholder="Describe your current situation and what you'd like to achieve..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-4 text-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get My Free Strategy Session
                    </Button>
                  </motion.div>

                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>No spam. Your information is 100% secure.</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Don't Wait - Transform Your Business Today
            </h3>
            <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
              Every day you delay is money left on the table. Join the 500+ businesses already profiting from strategic food safety.
            </p>
            <div className="text-2xl font-bold text-black">
              Call Now: (555) 123-4567
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;