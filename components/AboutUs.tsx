
import React from 'react';
import Section from './common/Section';

const AboutUs: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="Our Story"
      subtitle="More than just a restaurant, Himalayan Aroma is a celebration of Nepali culture and cuisine."
      className="bg-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://picsum.photos/seed/nepalteam/600/400" 
            alt="Himalayan Aroma Team or Interior" 
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 text-stone-700 space-y-4">
          <p className="text-lg leading-relaxed">
            Welcome to Himalayan Aroma, your gateway to the authentic tastes and warm hospitality of Nepal, nestled in the vibrant heart of Qatar. Our journey began with a simple passion: to share the rich culinary heritage of Nepal with the world.
          </p>
          <p className="leading-relaxed">
            At Himalayan Aroma, we believe in cooking from the heart. Our chefs, hailing from various regions of Nepal, bring generations of traditional recipes and techniques to your table. We use only the freshest, locally sourced ingredients whenever possible, combined with exotic spices imported directly from the Himalayan foothills to create dishes that are both authentic and innovative.
          </p>
          <p className="leading-relaxed">
            Our mission is to provide an unforgettable dining experience that tantalizes your taste buds and transports you to the majestic landscapes of Nepal. Whether you're craving the comforting warmth of Dal Bhat, the spicy kick of Sekuwa, or the delicate flavors of Momos, we have something to delight every palate.
          </p>
          <p className="leading-relaxed">
            Join us at Himalayan Aroma for a meal, and leave with memories. Namaste!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
