import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import grahamPortrait from '@/assets/graham-051.png';

const HeroSection2 = () => {
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
      className="min-h-screen unified-section relative overflow-hidden flex items-center justify-center"
    >
      {/* Centered Box Container - Max Width 1250px */}
      <div className="unified-container">
        
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
              className="descriptor-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              FOOD SAFETY SPECIALIST, RESTAURATEUR, SANITATION EXPERT
            </motion.div>

            {/* Name */}
            <motion.h2 
              className="name-text mb-4"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              GRAHAM PONSARAN
            </motion.h2>

            {/* Main Headline */}
            <motion.h1 
              className="headline-gradient text-5xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[150px] 3xl:text-[170px] 4xl:text-[190px] mb-6"
            >
              {/* First Line */}
              <motion.div
                initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
              >
                Elevate Your
              </motion.div>
              
              {/* Second Line */}
              <motion.div
                initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.75,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
              >
                Food Safety Standards
              </motion.div>
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              className="body-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.25,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              Achieve full regulatory compliance and unlock greater market opportunities with Graham's expert-led training and consulting.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 1.65,
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
                  delay: 1.65,
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
                  delay: 1.75,
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

export default HeroSection2; 