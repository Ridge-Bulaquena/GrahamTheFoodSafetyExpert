import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import grahamPortrait from '@/assets/graham-portrait.png';

const HeroSection = () => {
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

  // Mouse hover parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !portraitRef.current) return;
    
    const rect = portraitRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const deltaX = (mouseX - centerX) / 50; // ±10px max
    const deltaY = (mouseY - centerY) / 50;
    
    portraitRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (portraitRef.current) {
      portraitRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#EAEEF4] relative overflow-hidden"
      style={{ backgroundColor: '#EAEEF4' }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-16">
          
                     {/* Left Column - Text Content */}
           <motion.div 
             className="flex-1 max-w-2xl lg:max-w-none flex flex-col justify-center"
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
                         {/* Top Descriptor */}
             <motion.div 
               className="hero-descriptor mb-3 md:mb-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
               FOOD SAFETY SPECIALIST, RESTAURATEUR, SANITATION EXPERT
             </motion.div>

             {/* Name */}
             <motion.h2 
               className="hero-name mb-4 md:mb-6"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
             >
               GRAHAM PONSARAN
             </motion.h2>

            {/* Main Headline */}
            <motion.h1 
              className="hero-headline text-6xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[160px] 3xl:text-[180px] 4xl:text-[200px] mb-6 md:mb-8 leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>Millions to be Made</div>
              <div>from Food Safety</div>
            </motion.h1>

                         {/* Descriptive Paragraph */}
             <motion.p 
               className="hero-paragraph max-w-[700px]"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
             >
               Food safety isn't just compliance. It's the world's biggest untapped wealth generator. 
               Learn how Graham Ponsaran helps restaurants, suppliers, governments, and even consumers 
               turn safety into profit.
             </motion.p>
          </motion.div>

                     {/* Right Column - Portrait Image */}
           <motion.div 
             className="flex-1 flex justify-center items-center relative"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
            <div className="relative">
              {/* SVG Shadow */}
              <motion.svg
                className="absolute inset-0 w-full h-full svg-shadow"
                style={{ 
                  filter: 'blur(50px)',
                  opacity: 0.13,
                  transform: 'scale(1.1) translateY(20px)'
                }}
                viewBox="0 0 400 600"
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.13 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <defs>
                  <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6D7284" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#6D7284" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <ellipse 
                  cx="200" 
                  cy="300" 
                  rx="120" 
                  ry="200" 
                  fill="url(#shadowGradient)"
                />
              </motion.svg>

                             {/* Portrait Image */}
               <motion.div
                 ref={portraitRef}
                 className="relative z-10"
                 style={{
                   y: prefersReducedMotion ? 0 : y,
                 }}
                 animate={prefersReducedMotion ? {} : {
                   y: [0, -11, 0],
                   scale: [1, 1.015, 1],
                 }}
                 transition={prefersReducedMotion ? {} : {
                   duration: 10,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
               >
                                 <motion.img
                   src={grahamPortrait}
                   alt="Graham Ponsaran - Food Safety Expert"
                   className="w-80 h-auto md:w-96 lg:w-[500px] xl:w-[600px] max-w-full rounded-lg"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 0.5 }}
                 />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;