import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, MessageCircle, Star, Clock, Users } from 'lucide-react';

const WealthEngines = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const engines = [
    {
      icon: BookOpen,
      title: "Premium Food Safety Guides",
      subtitle: "Comprehensive Knowledge Library",
      description: "Access Graham's complete collection of industry-leading food safety manuals, compliance checklists, and profit optimization strategies.",
      features: [
        "15+ Professional Guides",
        "Government Compliance Templates",
        "ROI Calculation Tools",
        "Industry Best Practices"
      ],
      price: "$297",
      originalPrice: "$497",
      badge: "Best Seller",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "Online Certification Courses",
      subtitle: "Master Food Safety Excellence",
      description: "Comprehensive online training programs that transform you into a certified food safety expert with proven methodologies.",
      features: [
        "12-Week Intensive Program",
        "Live Q&A Sessions",
        "Official Certification",
        "Lifetime Access"
      ],
      price: "$1,997",
      originalPrice: "$2,997",
      badge: "Most Popular",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: MessageCircle,
      title: "1-on-1 Expert Consultations",
      subtitle: "Personalized Business Transformation",
      description: "Direct access to Graham's expertise with customized strategies for your specific business challenges and opportunities.",
      features: [
        "Private Strategy Sessions",
        "Custom Action Plans",
        "Ongoing Support",
        "Guaranteed Results"
      ],
      price: "$5,000",
      originalPrice: "$7,500",
      badge: "Premium",
      color: "from-orange-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
            🚀 Wealth Building System
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Graham's 3 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Wealth Engines</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path to food safety mastery and business transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Popular Badge */}
              {engine.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge 
                    variant={engine.badge === "Most Popular" ? "gold" : "orange"}
                    className="px-4 py-1"
                  >
                    {engine.badge}
                  </Badge>
                </div>
              )}

              <Card className="h-full bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${engine.color} flex items-center justify-center mx-auto mb-6`}>
                    <engine.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    {engine.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">
                    {engine.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {engine.description}
                  </p>

                  <div className="space-y-3">
                    {engine.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center py-6 border-t border-gray-700">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{engine.price}</span>
                      <span className="text-lg text-gray-500 line-through">{engine.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-400">One-time investment</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${engine.color} hover:opacity-90 text-white font-semibold py-3`}
                    >
                      Get Started Now
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-700 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WealthEngines;