import React from 'react';
import dividerIcon from '../../assets/graham-ponsaran-homepage-divider-01.png';

const InteractiveHoverComponent: React.FC = () => {
  return (
    <div className="relative group w-full">
      {/* Hover card container */}
      <div className="relative w-full">
        {/* Top panel - expands upward on hover */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-tr from-[#c1c8d1] to-[#fefffb] rounded-lg shadow-lg p-4 pb-16 z-0">
          <div className="bg-white/50 rounded-md h-32 mb-3 flex items-center justify-center">
            <img 
              src={dividerIcon} 
              alt="Placeholder" 
              className="w-16 h-16 object-contain"
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

        {/* Bottom panel - expands downward on hover */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 opacity-0 -translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-br from-[#a9b1bd] to-[#dbe4e3] rounded-lg shadow-lg p-4 pt-16 z-0">
          <p className="text-gray-700 text-sm mb-3">
            Discover our comprehensive food safety solutions and expert guidance for your business.
          </p>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="inline-block bg-[#708d81] text-white px-5 py-2.5 rounded-lg text-sm hover:bg-[#5a7267] transition-colors duration-200"
            >
              Learn More
            </a>
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