import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { DollarSign, TrendingUp, Shield, Users, Award, Target } from 'lucide-react';

const ProfitOpportunities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const revenue = useAnimatedCounter(inView ? 250000 : 0, 2000);
  const savings = useAnimatedCounter(inView ? 150000 : 0, 2000);
  const compliance = useAnimatedCounter(inView ? 99 : 0, 2000);

  const opportunities = [
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Turn compliance costs into profit centers through strategic food safety consulting",
      value: "$50K-$200K",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Market Expansion",
      description: "Access premium markets with certified food safety credentials",
      value: "300% Growth",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Eliminate costly recalls and legal issues with proactive safety measures",
      value: "$500K+ Saved",
      color: "from-purple-400 to-indigo-600"
    },
    {
      icon: Users,
      title: "Team Efficiency",
      description: "Streamline operations with trained staff and optimized processes",
      value: "40% Faster",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: Award,
      title: "Certification Premium",
      description: "Command higher prices with recognized food safety certifications",
      value: "25% Premium",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Target,
      title: "Competitive Edge",
      description: "Outperform competitors with superior food safety standards",
      value: "Market Leader",
      color: "from-pink-400 to-rose-600"
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="orange" className="mb-4">
            💰 Profit Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Compliance Into 
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> Cash Flow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how food safety expertise transforms from a cost center into your most profitable business advantage
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">
              ${revenue.toLocaleString()}
            </div>
            <div className="text-gray-600">Average Revenue Increase</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              ${savings.toLocaleString()}
            </div>
            <div className="text-gray-600">Cost Savings Per Year</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {compliance}%
            </div>
            <div className="text-gray-600">Compliance Success Rate</div>
          </div>
        </motion.div>

        {/* Opportunity Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${opportunity.color} flex items-center justify-center mb-4`}>
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${opportunity.color} text-white font-semibold text-sm`}>
                    {opportunity.value}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitOpportunities;