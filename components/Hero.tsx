
import React from 'react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/nepalrestaurant/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 playfair-display">
          Experience Authentic Nepali Flavors
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10">
          Discover a culinary journey to the heart of the Himalayas, right here in Qatar.
        </p>
        <Button href="#menu" variant="primary" size="lg">
          Explore Our Menu
        </Button>
      </div>
    </section>
  );
};

export default Hero;
