
import React from 'react';
import { RESTAURANT_NAME, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4 playfair-display">{RESTAURANT_NAME}</h3>
        <p className="mb-6 text-stone-400">Authentic Nepali Cuisine in Qatar</p>
        <div className="flex justify-center space-x-6 mb-8">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={link.icon} />
              </svg>
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. All Rights Reserved.
        </p>
        <p className="text-xs text-stone-600 mt-1">
          Designed with <span className="text-red-500">&hearts;</span> for Nepali Flavors
        </p>
      </div>
    </footer>
  );
};

export default Footer;
