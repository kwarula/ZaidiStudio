
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <img
              src="/logos/ZaidiStudio_white_logo.png"
              alt="ZaidiStudio logo"
              className="h-10 w-auto mb-4 sm:mb-6"
              style={{ maxWidth: 180 }}
            />
            <p className="text-gray-400 mb-4 sm:mb-6">AI automation solutions for ambitious Kenyan businesses</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/zaidistudio" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/company/zaidistudio" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a href="https://facebook.com/zaidistudio" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 mt-6 sm:mt-0">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">AI Automation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Workflow Optimization</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Custom AI Agents</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Integration Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 mt-6 sm:mt-0">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/starter-kit" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">AI Starter Kit</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Templates</Link></li>
              <li><Link to="/dojo" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">AI Dojo</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 mt-6 sm:mt-0">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm sm:text-base">Nairobi, Kenya</li>
              <li className="text-gray-400 text-sm sm:text-base">info@zaidilabstudio.com</li>
              <li className="text-gray-400 text-sm sm:text-base">+254 722 135 913</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">© {currentYear} ZaidiStudio. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base text-center sm:text-left">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base text-center sm:text-left">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
