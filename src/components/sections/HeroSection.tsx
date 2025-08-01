import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import grahamPortrait from '@/assets/graham-portrait.png';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]); // 0.6x scroll speed
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-advance slides every 4 seconds with transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev === 1 ? 2 : 1);
        setIsTransitioning(false);
      }, 300); // Transition duration
    }, 8000); // 8 seconds total: 3 seconds for animations + 5 seconds pause

    return () => clearInterval(interval);
  }, []);

  // Transition variants for motion blur effect
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      filter: prefersReducedMotion ? 'none' : 'blur(0px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: prefersReducedMotion ? 'none' : 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      filter: prefersReducedMotion ? 'none' : 'blur(8px)',
    }),
  };

  const transition = {
    x: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 30,
      duration: prefersReducedMotion ? 0.3 : 0.6
    },
    opacity: { 
      duration: prefersReducedMotion ? 0.3 : 0.4,
      ease: [0.22, 0.61, 0.36, 1] as const
    },
    filter: { 
      duration: prefersReducedMotion ? 0 : 0.3,
      ease: [0.22, 0.61, 0.36, 1] as const
    }
  };

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
            <AnimatePresence mode="wait" custom={currentSlide}>
              {currentSlide === 1 ? (
                // Slide 1 Content
                <motion.div
                  key="slide1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="w-full"
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
                      duration: 0.6, 
                      delay: 0.2,
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
                      duration: 0.7, 
                      delay: 0.4,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                  >
                    GRAHAM PONSARAN
                  </motion.h2>

                  {/* Main Headline */}
                  <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[150px] 3xl:text-[170px] 4xl:text-[190px] font-normal mb-5 md:mb-6 leading-[0.85]"
                    style={{ fontFamily: 'League Gothic Condensed, sans-serif' }}
                  >
                    {/* First Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                      initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                    >
                      Millions to be Made
                    </motion.div>
                    
                    {/* Second Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                      initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.75,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                    >
                      from Food Safety
                    </motion.div>
                  </motion.h1>

                  {/* Descriptive Paragraph */}
                  <motion.p 
                    className="text-lg md:text-xl text-[#1A1B1D] max-w-[700px] leading-relaxed mt-4 md:mt-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.95,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                  >
                    Food safety isn't just compliance. It's the world's biggest untapped wealth generator. 
                    Learn how Graham Ponsaran helps restaurants, suppliers, governments, and even consumers 
                    turn safety into profit.
                  </motion.p>
                </motion.div>
              ) : (
                // Slide 2 Content
                <motion.div
                  key="slide2"
                  custom={-1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="w-full"
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
                      duration: 0.6, 
                      delay: 0.2,
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
                      duration: 0.7, 
                      delay: 0.4,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                  >
                    GRAHAM PONSARAN
                  </motion.h2>

                  {/* Main Headline */}
                  <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-[110px] 2xl:text-[150px] 3xl:text-[170px] 4xl:text-[190px] font-normal mb-5 md:mb-6 leading-[0.85]"
                    style={{ fontFamily: 'League Gothic Condensed, sans-serif' }}
                  >
                    {/* First Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                      initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                    >
                      Elevate Your
                    </motion.div>
                    
                    {/* Second Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                      initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.75,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                    >
                      Food Safety Standards
                    </motion.div>
                  </motion.h1>

                  {/* Subhead */}
                  <motion.p 
                    className="text-lg md:text-xl text-[#1A1B1D] max-w-[700px] leading-relaxed mt-4 md:mt-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.95,
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
                      duration: 0.6, 
                      delay: 1.15,
                      ease: [0.22, 0.61, 0.36, 1]
                    }}
                  >
                    {/* First Button */}
                    <motion.button
                      className="relative px-6 py-3 bg-gradient-to-b from-white to-[#B4BBC2] text-[#1A1B1D] font-bold uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg overflow-hidden backdrop-blur-sm border border-white/30"
                      style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)'
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.15,
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
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                          transform: 'translateX(-100%) skewX(-20deg)',
                          width: '60%',
                          height: '100%'
                        }}
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.1, 0.25, 1],
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        whileHover={{
                          x: ['-100%', '200%'],
                          transition: {
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1]
                          }
                        }}
                      />
                    </motion.button>

                    {/* Second Button */}
                    <motion.button
                      className="relative px-6 py-3 bg-gradient-to-b from-white to-[#B4BBC2] text-[#1A1B1D] font-bold uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg overflow-hidden backdrop-blur-sm border border-white/30"
                      style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)'
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.25,
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
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                          transform: 'translateX(-100%) skewX(-20deg)',
                          width: '60%',
                          height: '100%'
                        }}
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 1,
                          ease: [0.25, 0.1, 0.25, 1],
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        whileHover={{
                          x: ['-100%', '200%'],
                          transition: {
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1]
                          }
                        }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
                opacity: { duration: 0.8, delay: currentSlide === 1 ? 0.6 : 0.6, ease: [0.22, 0.61, 0.36, 1] },
                scale: { duration: 0.8, delay: currentSlide === 1 ? 0.6 : 0.6, ease: [0.22, 0.61, 0.36, 1] },
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

export default HeroSection;