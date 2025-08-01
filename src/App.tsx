import React, { useState, useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import HeroSection2 from './components/sections/HeroSection2';
import ProfitOpportunities from './components/sections/ProfitOpportunities';
import WealthEngines from './components/sections/WealthEngines';
import ProofAuthority from './components/sections/ProofAuthority';
import CleanKitchenToolkit from './components/sections/CleanKitchenToolkit';
import GovernmentWhitepaper from './components/sections/GovernmentWhitepaper';
import ContactCTA from './components/sections/ContactCTA';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <HeroSection />
      <HeroSection2 />
      <ProfitOpportunities />
      <WealthEngines />
      <ProofAuthority />
      <CleanKitchenToolkit />
      <GovernmentWhitepaper />
      <ContactCTA />
    </div>
  );
}

export default App;