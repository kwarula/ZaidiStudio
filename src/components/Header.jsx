import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ConsultationForm from './ConsultationForm';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, LogOut } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasRequestedConsultation, setHasRequestedConsultation] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const requested = localStorage.getItem('hasRequestedConsultation') === 'true';
    setHasRequestedConsultation(requested);
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const handleConsultationRequested = () => {
    setHasRequestedConsultation(true);
    localStorage.setItem('hasRequestedConsultation', 'true');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-blue-600">ZaidiStudio</div>
      <nav className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
        <Link to="/templates" className="text-gray-600 hover:text-blue-600">Templates</Link>
        <Link to="/#faq" className="text-gray-600 hover:text-blue-600">FAQs</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
            <Button 
              variant="ghost"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Button 
              variant={hasRequestedConsultation ? "secondary" : "default"} 
              onClick={() => setIsFormOpen(true)}
              disabled={hasRequestedConsultation}
            >
              {hasRequestedConsultation ? 'Consultation Requested' : 'Request Consultation'}
            </Button>
          </>
        )}
      </nav>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <MobileMenu
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        hasRequestedConsultation={hasRequestedConsultation}
        onOpenConsultationForm={() => setIsFormOpen(true)}
      />
      <ConsultationForm 
        open={isFormOpen} 
        onOpenChange={setIsFormOpen} 
        onConsultationRequested={handleConsultationRequested} 
      />
    </header>
  );
};

export default Header;