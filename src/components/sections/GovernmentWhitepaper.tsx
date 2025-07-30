import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Download, TrendingUp, Building } from 'lucide-react';

const GovernmentWhitepaper = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FileText className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Government Whitepaper</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            The Economic Impact of
            <span className="text-gray-300"> Clean Kitchens</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive analysis of how food safety compliance drives economic growth, 
            reduces healthcare costs, and creates sustainable business opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Economic Benefits</h3>
            <p className="text-gray-300">
              How food safety drives revenue growth and market expansion
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Policy Recommendations</h3>
            <p className="text-gray-300">
              Strategic frameworks for government and industry collaboration
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Implementation Guide</h3>
            <p className="text-gray-300">
              Step-by-step roadmap for food safety transformation
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            className="w-[220px] rounded-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-200 text-gray-900 font-semibold px-8 py-4 text-lg shadow-2xl"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download "The Economic Impact of Clean Kitchens"
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentWhitepaper;