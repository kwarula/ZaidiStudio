import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false);

  useEffect(() => {
    const joined = localStorage.getItem('hasJoinedWaitlist') === 'true';
    setHasJoinedWaitlist(joined);
  }, []);

  const handleWaitlistJoined = () => {
    setHasJoinedWaitlist(true);
  };

  return (
    <section className="relative text-center py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
          Unlock Effortless Growth for Your Business with Smart Automation!
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
          ZaidiStudio empowers your business with tailor-made AI & automation solutions—so you can focus on what truly matters: growing your brand and making an impact.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6" 
          onClick={() => setIsFormOpen(true)}
          disabled={hasJoinedWaitlist}
        >
          {hasJoinedWaitlist ? 'You're on the Waitlist!' : 'Join the Waitlist'}
        </Button>
      </div>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} onWaitlistJoined={handleWaitlistJoined} />
    </section>
  );
};

export default Hero;