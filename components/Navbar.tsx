
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESTAURANT_NAME } from '../constants';
import { NavLink } from '../types';

const NepaliFlagIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 1000 1200" className="mr-2 fill-current text-red-600">
    <polygon points="100,100 800,500 100,500" className="text-red-600" />
    <polygon points="100,550 800,950 100,950" className="text-red-600" />
    <polygon points="100,100 100,950 150,950 150,100" className="text-blue-800" />
    {/* Simplified crescent and star - actual flag is more complex */}
    <circle cx="250" cy="350" r="80" className="text-white" />
    <polygon points="220,700 250,620 280,700 320,700 285,750 300,820 250,780 200,820 215,750 180,700" className="text-white"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center text-2xl font-bold playfair-display">
            <NepaliFlagIcon />
            <span className={`${isScrolled ? 'text-stone-800' : 'text-white'}`}>{RESTAURANT_NAME}</span>
          </a>
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-stone-700 hover:text-red-600' : 'text-stone-100 hover:text-amber-300'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-stone-700 hover:text-red-600' : 'text-stone-100 hover:text-amber-300'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-700 hover:bg-red-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
