
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-stone-800 mb-2 playfair-display">{item.name}</h3>
        <p className="text-stone-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
            <p className="text-lg font-bold text-red-600">{item.price}</p>
            <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">{item.category}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
