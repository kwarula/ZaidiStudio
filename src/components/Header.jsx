import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-blue-600">ZaidiStudio</div>
      <Button variant="outline">Join Waitlist</Button>
    </header>
  );
};

export default Header;