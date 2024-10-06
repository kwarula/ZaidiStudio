import React, { useState } from 'react';
import { Button } from './ui/button';
import WaitlistForm from './WaitlistForm';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-blue-600">ZaidiStudio</div>
      <Button variant="outline" onClick={() => setIsFormOpen(true)}>Join Waitlist</Button>
      <WaitlistForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </header>
  );
};

export default Header;