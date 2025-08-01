import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import grahamPortrait from '@/assets/graham-portrait.png';

const HeroSection3 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]); // 0.6x scroll speed
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#EAEEF4] relative overflow-hidden flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: '#EAEEF4' }}
    >
      {/* Centered Box Container - Max Width 1250px */}
      <div className="w-full max-w-[1250px] mx-auto">
        
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex-1 max-w-2xl lg:max-w-none flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top Descriptor */}
            <motion.div 
              className="text-sm md:text-base font-normal text-[#848DAB] uppercase tracking-wider mb-3 md:mb-4"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                letterSpacing: '1px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.0,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              FOOD SAFETY SPECIALIST, RESTAURATEUR, SANITATION EXPERT
            </motion.div>

            {/* Name */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#1A1B1D] mb-3 md:mb-4"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '4px'
              }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              GRAHAM PONSARAN
            </motion.h2>

            {/* Main Headline - Reduced by 10px as requested */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[140px] 3xl:text-[160px] 4xl:text-[180px] font-normal mb-5 md:mb-6 leading-[0.85]"
              style={{ fontFamily: 'League Gothic Condensed, sans-serif' }}
            >
              {/* First Line */}
              <motion.div
                className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
              >
                FOOD SAFETY TRAINING
              </motion.div>
              
              {/* Second Line */}
              <motion.div
                className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.55,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
              >
                SERVICES
              </motion.div>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              className="text-lg md:text-xl text-[#1A1B1D] max-w-[650px] lg:max-w-[700px] leading-relaxed mt-4 md:mt-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.75,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              With constant and sometimes confusing changes in regulations and certification standards, keeping your team trained is more critical than ever. Graham understands today's business challenges and offers practical food safety training tailored to all levels—from production-floor staff to senior management.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.95,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              {/* First Button */}
              <motion.button
                className="relative px-4 py-2.5 glass-button w-[220px]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '1px'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.95,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">REGISTER FOR TRAINING</span>
                <div className="shine-effect"></div>
              </motion.button>

              {/* Second Button */}
              <motion.button
                className="relative px-4 py-2.5 glass-button w-[220px]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '1px'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.05,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">VIEW CONSULTING SERVICES</span>
                <div className="shine-effect"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait Image */}
          <motion.div 
            className="flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Portrait Image */}
            <motion.div
              ref={portraitRef}
              className="relative z-0"
              style={{
                y: prefersReducedMotion ? 0 : y,
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: prefersReducedMotion ? 0 : [0, -12, 0],
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.0, ease: "easeOut" },
                scale: { duration: 0.8, delay: 1.0, ease: "easeOut" },
                y: prefersReducedMotion ? {} : {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.img
                src={grahamPortrait}
                alt="Graham Ponsaran - Food Safety Expert"
                className="w-80 h-auto md:w-96 lg:w-[550px] xl:w-[650px] max-w-full rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;