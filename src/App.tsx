import React from 'react';
import HeroSection from './components/sections/HeroSection';
import HeroSection3 from './components/sections/HeroSection3';
import ProfitOpportunities from './components/sections/ProfitOpportunities';
import WealthEngines from './components/sections/WealthEngines';
import ProofAuthority from './components/sections/ProofAuthority';
import CleanKitchenToolkit from './components/sections/CleanKitchenToolkit';
import GovernmentWhitepaper from './components/sections/GovernmentWhitepaper';
import ContactCTA from './components/sections/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#EAEEF4]">
      <HeroSection />
      <HeroSection3 />
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