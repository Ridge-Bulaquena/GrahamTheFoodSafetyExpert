import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useInView } from 'react-intersection-observer';
import { Star, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';

const ProofAuthority = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const recallCost = useAnimatedCounter(inView ? 2500000 : 0, 2000);
  const lawsuits = useAnimatedCounter(inView ? 150 : 0, 2000);
  const settlements = useAnimatedCounter(inView ? 5000000 : 0, 2000);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Owner",
      company: "Golden Dragon",
      content: "Graham's food safety strategies helped us increase our average check by 23% while reducing compliance costs by 40%. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Supply Chain Director",
      company: "FreshCo Foods",
      content: "We secured a $2.5M contract with a major hotel chain thanks to Graham's certification program. His expertise is unmatched.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Food Safety Consultant",
      company: "SafeServe Solutions",
      content: "Graham's courses transformed my career. I now earn 3x more consulting fees and have a waiting list of clients.",
      rating: 5
    }
  ];

  const logos = [
    { name: "FDA", src: "/fda-logo.png" },
    { name: "ISO", src: "/iso-logo.png" },
    { name: "Michelin Guide", src: "/michelin-logo.png" },
    { name: "BBB", src: "/bbb-logo.png" },
    { name: "Shangri-La", src: "/shangri-la-logo.png" },
    { name: "Discovery Shores", src: "/discovery-shores-logo.png" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
            Proof &
            <span className="bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent"> Authority</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real numbers, real results, real authority. See why industry leaders trust Graham's expertise.
          </p>
        </motion.div>

        {/* Recall Cost Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  📊 Recall Cost Calculator
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The real cost of food safety failures
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <DollarSign className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    ${recallCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Average Recall Cost
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {lawsuits}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Lawsuits Filed Daily
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${settlements.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Average Settlement
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
                      {logo.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {logo.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofAuthority;