import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Truck, Scale } from 'lucide-react';

const ProfitOpportunities = () => {
  const opportunities = [
    {
      icon: Utensils,
      title: "Restaurateurs",
      subtitle: "Turn Compliance Into Customers.",
      description: "Transform food safety from a cost center into your biggest competitive advantage. Attract health-conscious diners and premium pricing.",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
      icon: Truck,
      title: "Suppliers",
      subtitle: "Win Big Contracts with Clean Standards.",
      description: "Leverage superior food safety protocols to secure major contracts with restaurants, hotels, and government agencies.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
      borderColor: "border-blue-200 dark:border-blue-700"
    },
    {
      icon: Scale,
      title: "Consumers",
      subtitle: "Profit from Whistleblowing & Lawsuits.",
      description: "Learn how to identify violations, document evidence, and claim rewards for exposing food safety violations.",
      color: "from-green-600 to-green-700",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
      borderColor: "border-green-200 dark:border-green-700"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
            How You Can Profit from
            <span className="text-gray-700 dark:text-gray-300"> Food Safety</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're a restaurant owner, supplier, or consumer, there are millions to be made 
            by mastering food safety compliance and enforcement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className={`h-full border-2 ${opportunity.borderColor} ${opportunity.bgColor} hover:shadow-2xl transition-all duration-300`}>
                <CardHeader className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${opportunity.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {opportunity.title}
                  </CardTitle>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent`}>
                    {opportunity.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <Button 
                    className={`w-[220px] rounded-full bg-gradient-to-r ${opportunity.color} hover:shadow-lg text-white font-semibold`}
                    size="lg"
                  >
                    Learn More
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

export default ProfitOpportunities;