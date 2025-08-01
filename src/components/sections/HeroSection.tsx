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
    }, 4000);

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
                      letterSpacing: '3px'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2,
                      ease: "easeOut"
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
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    GRAHAM PONSARAN
                  </motion.h2>

                  {/* Main Headline */}
                  <motion.h1 
                    className="text-6xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[160px] 3xl:text-[180px] 4xl:text-[200px] font-normal mb-5 md:mb-6 leading-[0.85]"
                    style={{ fontFamily: 'League Gothic Condensed, sans-serif' }}
                  >
                    {/* First Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
                      initial={{ opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" }}
                      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.4,
                        ease: "easeOut"
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
                        delay: 2.2,
                        ease: "easeOut"
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
                      delay: 3.0,
                      ease: "easeOut"
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
                      letterSpacing: '3px'
                    }}
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
                    className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#1A1B1D] mb-3 md:mb-4"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      letterSpacing: '4px'
                    }}
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
                    className="text-6xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[160px] 3xl:text-[180px] 4xl:text-[200px] font-normal mb-5 md:mb-6 leading-[0.85]"
                    style={{ fontFamily: 'League Gothic Condensed, sans-serif' }}
                  >
                    {/* First Line */}
                    <motion.div
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
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
                      className="text-transparent bg-clip-text bg-gradient-to-br from-[#C7D0D3] to-[#6D7284]"
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
                    className="text-lg md:text-xl text-[#1A1B1D] max-w-[700px] leading-relaxed mt-4 md:mt-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
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
                      className="px-8 py-4 bg-white/80 backdrop-blur-md border border-white/20 text-[#1A1B1D] font-semibold rounded-full shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.65,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      REGISTER FOR TRAINING
                    </motion.button>

                    {/* Second Button */}
                    <motion.button
                      className="px-8 py-4 bg-white/60 backdrop-blur-md border border-white/30 text-[#1A1B1D] font-semibold rounded-full shadow-lg hover:bg-white/80 hover:shadow-xl transition-all duration-300 text-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.75,
                        ease: [0.22, 0.61, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW CONSULTING SERVICES
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
                opacity: { duration: 0.8, delay: currentSlide === 1 ? 2.8 : 1.0, ease: "easeOut" },
                scale: { duration: 0.8, delay: currentSlide === 1 ? 2.8 : 1.0, ease: "easeOut" },
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