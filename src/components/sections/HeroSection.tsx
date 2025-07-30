import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, DollarSign, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingIcons = [
    { Icon: DollarSign, delay: 0, x: 100, y: 50, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: Shield, delay: 0.5, x: -80, y: 80, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: CheckCircle, delay: 1, x: 120, y: -60, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: TrendingUp, delay: 1.5, x: -100, y: -40, color: 'text-gray-400 dark:text-gray-600' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            className={`absolute opacity-10 ${color}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index * 15)}%`,
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
                      <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-normal mb-6 leading-tight"
              style={{ fontFamily: 'League Gothic, sans-serif' }}
            >
              <span className="text-gray-900 dark:text-white">
                Millions to Be Made from Food Safety
              </span>
            </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Food safety isn't just compliance. It's the world's biggest untapped wealth generator. 
            Learn how Graham Ponsaran helps restaurants, suppliers, governments, and even consumers 
            turn safety into profit.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="gold" 
              size="lg" 
              className="w-[220px] rounded-full px-8 py-4 text-lg font-semibold shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 text-white"
            >
              Get Your Free Food Safety Wealth Checklist
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="orange" 
              size="lg" 
              className="w-[220px] rounded-full px-8 py-4 text-lg font-semibold shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white"
            >
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: "500+", label: "Businesses Transformed" },
            { number: "$50M+", label: "Revenue Generated" },
            { number: "25+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;