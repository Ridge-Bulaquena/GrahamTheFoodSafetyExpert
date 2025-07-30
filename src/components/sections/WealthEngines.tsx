import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Video } from 'lucide-react';

const WealthEngines = () => {
  const engines = [
    {
      icon: BookOpen,
      title: "Books",
      description: "Comprehensive guides on food safety compliance, risk management, and profit optimization strategies.",
      features: ["Industry Best Practices", "Case Studies", "Implementation Guides"],
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-gray-200 dark:border-gray-700",
      ctaText: "Explore Books",
      ctaColor: "bg-gradient-to-r from-gray-700 to-gray-800"
    },
    {
      icon: GraduationCap,
      title: "Courses",
      description: "Interactive online training programs designed to transform your food safety knowledge into profit.",
      features: ["Video Modules", "Interactive Quizzes", "Certification"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
      borderColor: "border-blue-200 dark:border-blue-700",
      ctaText: "Browse Courses",
      ctaColor: "bg-gradient-to-r from-blue-600 to-blue-700"
    },
    {
      icon: Video,
      title: "Consultations",
      description: "One-on-one expert guidance to implement food safety strategies that drive revenue and growth.",
      features: ["Custom Strategy", "Implementation Support", "Ongoing Coaching"],
      color: "from-green-600 to-green-700",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
      borderColor: "border-green-200 dark:border-green-700",
      ctaText: "Book a Consultation",
      ctaColor: "bg-gradient-to-r from-green-600 to-green-700"
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
            Graham's 3
            <span className="text-gray-700 dark:text-gray-300"> Wealth Engines</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your path to food safety wealth. From books to courses to personalized consultations, 
            Graham has the expertise to transform your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full border-2 ${engine.borderColor} ${engine.bgColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${engine.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <engine.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {engine.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {engine.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {engine.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center justify-center"
                        >
                          <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className={`w-[220px] rounded-full ${engine.ctaColor} hover:shadow-lg text-white font-semibold`}
                    size="lg"
                  >
                    {engine.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WealthEngines;