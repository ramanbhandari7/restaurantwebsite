
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <AboutUs />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
      <style>
        {`
          .playfair-display {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
    </div>
  );
};

export default App;
