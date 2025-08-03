import React from 'react';
import dividerIcon from '../../assets/graham-ponsaran-homepage-divider-01.png';

const InteractiveHoverComponent: React.FC = () => {
  return (
    <div className="relative group">
      {/* Wrapper div containing the icon and panels */}
      <div className="relative flex flex-col items-center">
        {/* Top panel - slides up on hover */}
        <div className="absolute bottom-full mb-4 opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-white rounded-lg shadow-lg p-4 w-64 z-10">
          <div className="bg-gray-200 rounded-md h-32 mb-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>
        </div>

        {/* Center icon with horizontal line separators */}
        <div className="relative z-20">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img 
              src={dividerIcon} 
              alt="Divider Icon" 
              className="w-8 h-8 object-contain"
            />
          </div>
          {/* Horizontal line separators */}
          <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-gray-300 transform -translate-x-full -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-8 h-0.5 bg-gray-300 transform translate-x-full -translate-y-1/2"></div>
        </div>

        {/* Bottom panel - slides down on hover */}
        <div className="absolute top-full mt-4 opacity-0 transform -translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 bg-white rounded-lg shadow-lg p-4 w-64 z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column - Interactive Hover Component */}
          <div className="flex justify-center items-center">
            <InteractiveHoverComponent />
          </div>
          
          {/* Second column */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Column 2</h3>
              <p className="text-gray-600">Content for the second column goes here.</p>
            </div>
          </div>
          
          {/* Third column */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Column 3</h3>
              <p className="text-gray-600">Content for the third column goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHoverSection; 