import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';
import { Star, Lightbulb, Heart, Palette, Hotel, Banknote, Briefcase, CreditCard, Users } from 'lucide-react';

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
    <section className="relative text-center py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900 leading-tight">
          Double Your Conversion Rate in 30 Days
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Through customized AI-powered automation solutions tailored for your business
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300" 
          onClick={() => setIsFormOpen(true)}
          disabled={hasJoinedWaitlist}
          aria-label={hasJoinedWaitlist ? "You're already on the waitlist" : "Book your free consultation"}
        >
          {hasJoinedWaitlist ? "You're on the Waitlist!" : "Book My Free Consultation"}
        </Button>
        <div className="mt-16">
          <p className="text-xl font-semibold mb-6 text-gray-800">Trusted by 500+ satisfied clients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <Hotel className="w-16 h-16 text-blue-600" aria-label="Hospitality industry" />
            <Banknote className="w-16 h-16 text-green-600" aria-label="Banking industry" />
            <Briefcase className="w-16 h-16 text-gray-600" aria-label="Business services" />
            <CreditCard className="w-16 h-16 text-purple-600" aria-label="Financial services" />
            <Users className="w-16 h-16 text-orange-600" aria-label="Client representation" />
          </div>
          <div className="flex justify-center" aria-label="5 star rating">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} onWaitlistJoined={handleWaitlistJoined} />
    </section>
  );
};

export default Hero;
