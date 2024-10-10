import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';
import { Link } from 'react-router-dom';

const Header = () => {
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
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-blue-600">ZaidiStudio</div>
      <nav className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
        <Link to="/#faq" className="text-gray-600 hover:text-blue-600">FAQs</Link>
        <Button 
          variant={hasJoinedWaitlist ? "secondary" : "default"} 
          onClick={() => setIsFormOpen(true)}
          disabled={hasJoinedWaitlist}
        >
          {hasJoinedWaitlist ? 'Joined Waitlist' : 'Book Free Consultation'}
        </Button>
      </nav>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} onWaitlistJoined={handleWaitlistJoined} />
    </header>
  );
};

export default Header;