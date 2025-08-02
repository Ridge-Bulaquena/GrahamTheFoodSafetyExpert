import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="unified-section" ref={ref}>
      <div className="unified-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="descriptor-text mb-4"
          >
            PROOF & AUTHORITY
          </motion.div>
          
          <motion.h2 
            className="headline-gradient text-5xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[150px] 3xl:text-[170px] 4xl:text-[190px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Proof &
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
            >
              Authority
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="body-text mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Real numbers, real results, real authority. See why industry leaders trust Graham's expertise.
          </motion.p>
        </motion.div>

        {/* Recall Cost Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <motion.h3 
                className="text-2xl font-bold text-[#1A1B1D] mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                📊 Recall Cost Calculator
              </motion.h3>
              <motion.p 
                className="text-[#848DAB]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                The real cost of food safety failures
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <DollarSign className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-600 mb-2">
                  ${recallCost.toLocaleString()}
                </div>
                <div className="text-sm text-[#848DAB]">
                  Average Recall Cost
                </div>
              </motion.div>
              
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {lawsuits}
                </div>
                <div className="text-sm text-[#848DAB]">
                  Lawsuits Filed Daily
                </div>
              </motion.div>
              
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${settlements.toLocaleString()}
                </div>
                <div className="text-sm text-[#848DAB]">
                  Average Settlement
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-[#1A1B1D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-full bg-gray-50 hover:shadow-2xl transition-all duration-300 rounded-2xl p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#848DAB] mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-[#1A1B1D]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#848DAB]">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-[#1A1B1D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 + index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-[#848DAB] font-semibold text-sm">
                      {logo.name}
                    </span>
                  </div>
                  <div className="text-xs text-[#848DAB]">
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