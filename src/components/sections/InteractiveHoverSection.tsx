import React from 'react';
import dividerIcon from '../../assets/graham-ponsaran-homepage-divider-01.png';

const InteractiveHoverComponent: React.FC = () => {
  return (
    <div className="relative group w-[400px]">
      {/* Hover card container */}
      <div className="relative w-full">
        {/* Top panel - slides down from above icon */}
        <div className="absolute bottom-[50%] left-1/2 transform -translate-x-1/2 w-4/5 h-[10%] opacity-0 translate-y-4 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-[280px] bg-gradient-to-tr from-[#c1c8d1] to-[#fefffb] rounded-tl-[20px] rounded-tr-[20px] border border-gray-300 shadow-lg px-8 py-8 pb-8 z-0">
          <div className="bg-gradient-to-tr from-[#c1c8d1] to-[#fefffb] rounded-md h-48 mb-4 flex items-center justify-center">
            <img 
              src={dividerIcon} 
              alt="Placeholder" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Center PNG icon with horizontal separator line */}
        <div className="relative z-10 w-full flex justify-center">
          <img 
            src={dividerIcon} 
            alt="Divider Icon" 
            className="w-full h-24 object-contain"
          />
        </div>

        {/* Bottom panel - slides up from below icon */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-4/5 h-[10%] opacity-0 -translate-y-4 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-[200px] bg-gradient-to-br from-[#a9b1bd] to-[#dbe4e3] rounded-bl-[20px] rounded-br-[20px] border border-gray-300 shadow-lg px-8 py-8 pt-12 pb-10 z-0">
          <div className="text-center">
            <p className="text-gray-700 text-base mb-4 leading-relaxed text-left font-['Poppins'] font-normal">
              Discover our comprehensive food safety solutions and expert guidance for your business.
            </p>
            <div className="flex justify-center">
              <a 
                href="#" 
                className="inline-block bg-gradient-to-br from-white to-gray-100 text-gray-700 px-6 py-3 rounded-[220px] text-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:from-gray-50 hover:to-gray-200 transition-all duration-200 font-medium font-['Poppins']"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveHoverSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First column - Interactive Hover Component */}
            <div className="flex justify-center items-center">
              <InteractiveHoverComponent />
            </div>
            
            {/* Second column */}
            <div className="flex justify-center items-center">
              <InteractiveHoverComponent />
            </div>
            
            {/* Third column */}
            <div className="flex justify-center items-center">
              <InteractiveHoverComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHoverSection; 