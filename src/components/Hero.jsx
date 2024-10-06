import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="text-center py-20 px-6 md:px-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
        Unlock Effortless Growth for Your Business with Smart Automation!
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
        ZaidiStudio empowers your business with tailor-made AI & automation solutions—so you can focus on what truly matters: growing your brand and making an impact.
      </p>
      <Button size="lg" className="text-lg px-8 py-6">
        Join the Waitlist
      </Button>
    </section>
  );
};

export default Hero;