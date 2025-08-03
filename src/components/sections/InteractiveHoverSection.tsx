import React from 'react';
import dividerIcon from '../../assets/graham-ponsaran-homepage-divider-01.png';

const InteractiveHoverComponent: React.FC = () => {
  return (
    <div className="relative group w-full">
      {/* Wrapper div containing the icon and panels */}
      <div className="relative flex flex-col items-center w-full">
        {/* Top panel - slides up on hover */}
        <div className="absolute bottom-full mb-4 opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-white rounded-lg shadow-lg p-4 w-full z-10">
          <div className="bg-gray-200 rounded-md h-32 mb-3 flex items-center justify-center">
            <img 
              src={dividerIcon} 
              alt="Placeholder" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Center icon - using PNG directly */}
        <div className="relative z-20 w-full flex justify-center">
          <img 
            src={dividerIcon} 
            alt="Divider Icon" 
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Bottom panel - slides down on hover */}
        <div className="absolute top-full mt-4 opacity-0 transform -translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-white rounded-lg shadow-lg p-4 w-full z-10">
          <p className="text-gray-700 text-sm mb-3">
            Discover our comprehensive food safety solutions and expert guidance for your business.
          </p>
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200"
          >
            Learn More
          </a>
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