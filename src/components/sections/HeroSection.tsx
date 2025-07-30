import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, DollarSign, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="gold" className="mb-6 text-sm px-4 py-2">
            🏆 #1 Food Safety Expert in North America
          </Badge>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent">
              Millions to Be Made from Food Safety
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Food safety isn't just compliance. It's the world's biggest untapped wealth generator. 
            Learn how Graham Ponsaran helps restaurants, suppliers, governments, and even consumers 
            turn safety into profit.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="gold" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold shadow-2xl bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black"
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
              className="px-8 py-4 text-lg font-semibold shadow-2xl bg-gradient-to-r from-orange to-red-500 hover:from-red-500 hover:to-orange text-white"
            >
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
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