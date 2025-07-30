import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Shield, TrendingUp, Users, Award, CheckCircle, ExternalLink } from 'lucide-react';

const GovernmentWhitepaper = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whitepaperHighlights = [
    {
      icon: Shield,
      title: "Regulatory Compliance Framework",
      description: "Complete breakdown of FDA, USDA, and state requirements with implementation timelines"
    },
    {
      icon: TrendingUp,
      title: "Economic Impact Analysis",
      description: "$2.1B annual savings potential through strategic food safety implementation"
    },
    {
      icon: Users,
      title: "Industry Best Practices",
      description: "Case studies from 500+ successful implementations across various food sectors"
    },
    {
      icon: Award,
      title: "Certification Pathways",
      description: "Strategic roadmap to premium certifications that command 25-40% price premiums"
    }
  ];

  const keyFindings = [
    "Companies implementing strategic food safety see 300% average ROI within 18 months",
    "Proactive compliance reduces regulatory violations by 95% and eliminates recall risks",
    "Premium certifications enable access to high-value markets worth $50B+ annually",
    "Trained staff reduce operational costs by 40% through improved efficiency",
    "Strategic food safety positioning creates sustainable competitive advantages"
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="orange" className="mb-4">
            📋 Official Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Government 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Whitepaper</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official research document revealing the $50 billion opportunity in strategic food safety implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Whitepaper Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-t-lg mb-6"></div>
              
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Strategic Food Safety Implementation</h3>
                  <p className="text-sm text-gray-600">Official Government Research Document</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-orange-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>127 Pages</span>
                <span>Updated 2024</span>
                <span>Official Document</span>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg"
            >
              $2.1B Savings
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg"
            >
              300% ROI
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Exclusive Research Reveals Hidden Profit Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This comprehensive government research document exposes the massive financial opportunities 
                hidden within food safety compliance. Graham contributed as a lead researcher and industry expert.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whitepaperHighlights.map((highlight, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{highlight.title}</h4>
                        <p className="text-xs text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Key Findings */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Research Findings:</h4>
              <div className="space-y-3">
                {keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{finding}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Download Complete Whitepaper</h4>
                    <p className="text-sm text-gray-600">127-page comprehensive research document</p>
                  </div>
                  <Badge variant="gold">FREE</Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 mb-4">Endorsed by leading government agencies and industry organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xl font-bold text-gray-400">U.S. Department of Agriculture</div>
            <div className="text-xl font-bold text-gray-400">Food and Drug Administration</div>
            <div className="text-xl font-bold text-gray-400">National Restaurant Association</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentWhitepaper;