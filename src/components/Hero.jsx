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
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
          Double Your Conversion Rate in 30 Days
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          Through customized AI-powered automation solutions tailored for your business
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6" 
          onClick={() => setIsFormOpen(true)}
          disabled={hasJoinedWaitlist}
        >
          {hasJoinedWaitlist ? "You're on the Waitlist!" : "Book My Free Consultation"}
        </Button>
        <div className="mt-12">
          <p className="text-lg font-semibold mb-4">Trusted by 500+ satisfied clients</p>
          <div className="flex justify-center space-x-8">
            {/* Replace with actual client logos */}
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} onWaitlistJoined={handleWaitlistJoined} />
    </section>
  );
};

export default Hero;