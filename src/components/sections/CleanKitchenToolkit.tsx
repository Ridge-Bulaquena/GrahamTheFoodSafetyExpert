import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Radio, BarChart3, Search } from 'lucide-react';

const CleanKitchenToolkit = () => {
  const tools = [
    {
      icon: Radio,
      title: "Recall Radar",
      description: "Real-time alerts for food safety recalls, contamination warnings, and supplier issues that could impact your business.",
      features: ["Instant Notifications", "Risk Assessment", "Action Plans"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      icon: BarChart3,
      title: "Clean Kitchen Scorecard",
      description: "Comprehensive assessment tool that evaluates your food safety practices and provides actionable improvement strategies.",
      features: ["Custom Scoring", "Benchmark Analysis", "Progress Tracking"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: Search,
      title: "Supplier Transparency Scanner",
      description: "Deep-dive analysis of your suppliers' food safety records, certifications, and compliance history.",
      features: ["Background Checks", "Certification Verification", "Risk Scoring"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
            The Clean Kitchen
            <span className="bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent"> Toolkit</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three powerful tools that give you the intelligence, assessment, and transparency 
            you need to turn food safety into a competitive advantage.
          </p>
        </motion.div>

        <div className="space-y-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl ${tool.bgColor} border-2 border-gray-200 dark:border-gray-700`}
            >
              <div className="flex-1">
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <tool.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {tool.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="w-64 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mx-auto mb-4`}>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tool.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
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
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black font-semibold px-8 py-4 text-lg shadow-2xl"
            size="lg"
          >
            Try the Toolkit Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanKitchenToolkit;