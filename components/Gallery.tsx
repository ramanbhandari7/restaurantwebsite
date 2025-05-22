
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import Section from './common/Section';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  return (
    <Section 
      id="gallery" 
      title="Visual Feast"
      subtitle="A glimpse into the vibrant world of Himalayan Aroma - our food, our ambiance, our spirit."
      className="bg-stone-100"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image: GalleryImage) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 group">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
