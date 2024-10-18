import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="relative text-center py-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-blue-900"
        >
          Double Your Conversion Rate in 30 Days
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 text-gray-600"
        >
          Through customized AI-powered automation solutions tailored for your business
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-6 py-3" 
            onClick={() => setIsFormOpen(true)}
            disabled={hasJoinedWaitlist}
            aria-label={hasJoinedWaitlist ? "You're already on the waitlist" : "Book your free consultation"}
          >
            {hasJoinedWaitlist ? "You're on the Waitlist!" : "Book My Free Consultation"}
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <p className="text-lg font-semibold mb-3">Trusted by 500+ satisfied clients</p>
          <div className="flex justify-center space-x-6 mb-3">
            {/* Replace with actual client logos */}
            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-gray-300 rounded-full" aria-label="Client logo"></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-gray-300 rounded-full" aria-label="Client logo"></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-gray-300 rounded-full" aria-label="Client logo"></motion.div>
          </div>
          <div className="flex justify-center" aria-label="5 star rating">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} onWaitlistJoined={handleWaitlistJoined} />
    </section>
  );
};

export default Hero;