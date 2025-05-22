
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title, titleClassName = '', subtitle, subtitleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-stone-800 mb-4 playfair-display ${titleClassName}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-center text-stone-600 mb-10 md:mb-12 max-w-2xl mx-auto ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
