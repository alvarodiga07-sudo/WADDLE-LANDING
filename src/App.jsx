import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StickyCTA from './components/StickyCTA';
import ItineraryModal from './components/ItineraryModal';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Demo from './components/sections/Demo';
import WizardDemo from './components/sections/WizardDemo';
import Features from './components/sections/Features';
import Market from './components/sections/Market';
import WhyNow from './components/sections/WhyNow';
import Traction from './components/sections/Traction';
import Investment from './components/sections/Investment';
import Contact, { Footer } from './components/sections/Contact';

export default function App() {
  const [demoId, setDemoId] = useState(null);

  return (
    <div className="relative">
      <Navbar />
      <StickyCTA />

      <main>
        <Hero onCountrySelect={setDemoId} />
        <Problem />
        <Solution />
        <Demo onCountrySelect={setDemoId} />
        <WizardDemo />
        <Features />
        <Market />
        <WhyNow />
        <Traction />
        <Investment />
        <Contact />
      </main>

      <Footer />

      <ItineraryModal demoId={demoId} onClose={() => setDemoId(null)} />
    </div>
  );
}
