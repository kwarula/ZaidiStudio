
import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from './ui/button';
import { X } from 'lucide-react';

const MobileMenu = ({ open, onOpenChange, hasJoinedWaitlist, onOpenWaitlistForm }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[85vw] max-w-[300px] sm:w-[400px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl font-bold text-blue-600">ZaidiStudio</SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => onOpenChange(false)}
            aria-label="Close mobile menu"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-6 sm:mt-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 text-base sm:text-lg py-2" onClick={() => onOpenChange(false)}>Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 text-base sm:text-lg py-2" onClick={() => onOpenChange(false)}>Services</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 text-base sm:text-lg py-2" onClick={() => onOpenChange(false)}>About</Link>
          <Link to="/templates" className="text-gray-600 hover:text-blue-600 text-base sm:text-lg py-2" onClick={() => onOpenChange(false)}>Templates</Link>
          <Link to="/#faq" className="text-gray-600 hover:text-blue-600 text-base sm:text-lg py-2" onClick={() => onOpenChange(false)}>FAQs</Link>
          <Button 
            variant={hasJoinedWaitlist ? "secondary" : "default"} 
            onClick={() => {
              onOpenWaitlistForm();
              onOpenChange(false);
            }}
            disabled={hasJoinedWaitlist}
            className="mt-4 py-5 text-sm sm:text-base"
            size="lg"
          >
            {hasJoinedWaitlist ? 'Joined Waitlist' : 'Book Free Consultation'}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
