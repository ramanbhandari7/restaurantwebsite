
import React from 'react';
import { MENU_ITEMS } from '../constants';
import MenuItemCard from './MenuItemCard';
import Section from './common/Section';

const MenuSection: React.FC = () => {
  return (
    <Section 
      id="menu" 
      title="Our Culinary Delights"
      subtitle="Savor the taste of Nepal with our carefully crafted dishes, made from the freshest ingredients and traditional recipes."
      className="bg-stone-100"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MENU_ITEMS.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default MenuSection;
