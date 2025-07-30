import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, CheckCircle, FileText, Calculator, Shield, Users, Clock, Star } from 'lucide-react';

const CleanKitchenToolkit = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tools = [
    {
      icon: FileText,
      title: "HACCP Implementation Guide",
      description: "Complete step-by-step guide to implementing HACCP systems that pass inspections every time",
      features: ["7 Principles Breakdown", "Documentation Templates", "Verification Checklists"],
      value: "$197"
    },
    {
      icon: Calculator,
      title: "ROI Calculator Spreadsheet",
      description: "Calculate the exact financial impact of food safety improvements on your bottom line",
      features: ["Cost-Benefit Analysis", "Risk Assessment", "Profit Projections"],
      value: "$97"
    },
    {
      icon: Shield,
      title: "Compliance Audit Checklist",
      description: "Never fail an inspection again with this comprehensive audit preparation toolkit",
      features: ["FDA Requirements", "State Regulations", "Local Codes"],
      value: "$147"
    },
    {
      icon: Users,
      title: "Staff Training Modules",
      description: "Ready-to-use training materials that transform your team into food safety experts",
      features: ["Video Tutorials", "Quiz Templates", "Certification Tracking"],
      value: "$247"
    },
    {
      icon: Clock,
      title: "Emergency Response Protocols",
      description: "Crisis management templates for recalls, contamination, and regulatory issues",
      features: ["Response Flowcharts", "Communication Templates", "Legal Compliance"],
      value: "$127"
    },
    {
      icon: Star,
      title: "Premium Certification Roadmap",
      description: "Strategic guide to obtaining high-value certifications that command premium pricing",
      features: ["Certification Comparison", "Implementation Timeline", "Cost Analysis"],
      value: "$177"
    }
  ];

  const totalValue = tools.reduce((sum, tool) => sum + parseInt(tool.value.replace('$', '')), 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
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
            🛠️ Exclusive Toolkit
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Clean Kitchen 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Toolkit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional-grade tools and templates used by industry leaders to maintain perfect compliance and maximize profits
          </p>
          
          <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-full px-8 py-4">
            <span className="text-2xl font-bold text-yellow-400">${totalValue} Value</span>
            <span className="text-gray-400">→</span>
            <span className="text-3xl font-bold text-white">FREE</span>
            <span className="text-sm text-gray-400">with any program</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                    <tool.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {tool.title}
                  </CardTitle>
                  <div className="text-right">
                    <Badge variant="gold" className="text-xs">
                      {tool.value} Value
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Preview Tool
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-black mb-4">
            Get The Complete Toolkit FREE
          </h3>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            When you enroll in any of Graham's programs, you'll receive the entire Clean Kitchen Toolkit at no additional cost - a ${totalValue} value!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
              >
                Claim Your Toolkit Now
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanKitchenToolkit;