import React, { useEffect, useRef } from "react";
import "./Slide3FoodSafety.css";
import ShinyButton from "./ShinyButton";

export default function Slide3FoodSafety({ onTransition }) {
  const ref = useRef();
  // Handles slide timing and transition after all animations
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onTransition) onTransition();
    }, 5000); // stay 5s then transition
    return () => clearTimeout(timeout);
  }, [onTransition]);
  // Handles prefers-reduced-motion fallback for transition
  useEffect(() => {
    if (!ref.current) return;
    ref.current.classList.add("show");
    return () => ref.current.classList.remove("show");
  }, []);

  return (
    <div className="slide3-hero" ref={ref}>
      <div className="slide3-content">
        <div className="slide3-info-col">
          <div className="slide3-descriptor ani-fade-up">FOOD SAFETY SPECIALIST, RESTAURATEUR, SANITATION EXPERT</div>
          <div className="slide3-name ani-fade-scale">GRAHAM PONSARAN</div>
          <div className="slide3-headlines">
            <span className="slide3-headline-line ani-reveal">FOOD SAFETY TRAINING</span>
            <span className="slide3-headline-line ani-reveal delay2">SERVICES</span>
          </div>
          <div className="slide3-support ani-fade-up delay3">
            With constant and sometimes confusing changes in regulations and certification standards, keeping your team trained is more critical than ever. Graham understands today’s business challenges and offers practical food safety training tailored to all levels—from production-floor staff to senior management.
          </div>
          <div className="slide3-buttons">
            <ShinyButton className="slide3-btn ani-btn">REGISTER FOR TRAINING</ShinyButton>
            <ShinyButton className="slide3-btn ani-btn delay-btn">VIEW CONSULTING SERVICES</ShinyButton>
          </div>
        </div>
        <div className="slide3-img-col">
          {/* Add floating imagery/illustration here if needed */}
        </div>
      </div>
    </div>
  );
}