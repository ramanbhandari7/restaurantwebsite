
import { MenuItem, NavLink, GalleryImage } from './types';

export const RESTAURANT_NAME = "Himalayan Aroma";

export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "momo",
    name: "Chicken Momo",
    description: "Steamed dumplings filled with seasoned minced chicken, served with a tangy tomato-based dipping sauce.",
    price: "QAR 35",
    imageUrl: "https://picsum.photos/seed/nepalimomo/400/300",
    category: "Appetizers",
  },
  {
    id: "dalbhat",
    name: "Dal Bhat Tarkari",
    description: "Traditional Nepali platter with lentil soup, steamed rice, seasonal vegetable curry, and a side of pickle.",
    price: "QAR 55",
    imageUrl: "https://picsum.photos/seed/dalbhat/400/300",
    category: "Main Course",
  },
  {
    id: "sekuwa",
    name: "Mutton Sekuwa",
    description: "Spicy grilled mutton skewers marinated in Nepali herbs and spices, served with puffed rice.",
    price: "QAR 65",
    imageUrl: "https://picsum.photos/seed/sekuwa/400/300",
    category: "Main Course",
  },
  {
    id: "chowmein",
    name: "Vegetable Chowmein",
    description: "Stir-fried noodles with mixed vegetables and a savory Nepali-style sauce.",
    price: "QAR 40",
    imageUrl: "https://picsum.photos/seed/chowmein/400/300",
    category: "Vegetarian",
  },
  {
    id: "selroti",
    name: "Sel Roti",
    description: "Sweet, ring-shaped rice bread, a traditional Nepali delicacy, perfect with tea or as a dessert.",
    price: "QAR 25 (3 pcs)",
    imageUrl: "https://picsum.photos/seed/selroti/400/300",
    category: "Desserts & Breads",
  },
  {
    id: "chiya",
    name: "Masala Chiya",
    description: "Aromatic Nepali milk tea infused with ginger, cardamom, cloves, and other warming spices.",
    price: "QAR 15",
    imageUrl: "https://picsum.photos/seed/chiya/400/300",
    category: "Drinks",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", src: "https://picsum.photos/seed/nepalifood1/600/400", alt: "Delicious Nepali Cuisine" },
  { id: "g2", src: "https://picsum.photos/seed/restaurantinterior/600/400", alt: "Restaurant Ambiance" },
  { id: "g3", src: "https://picsum.photos/seed/nepalispices/600/400", alt: "Aromatic Spices" },
  { id: "g4", src: "https://picsum.photos/seed/nepalidish2/600/400", alt: "Authentic Nepali Dish" },
];

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }, // Example Heroicon path
  { name: "Instagram", href: "#", icon: "M12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2ZM12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14ZM16.5 7.5C16.5 7.77614 16.2761 8 16 8C15.7239 8 15.5 7.77614 15.5 7.5C15.5 7.22386 15.7239 7 16 7C16.2761 7 16.5 7.22386 16.5 7.5Z" }, // Simplified Instagram-like icon path
  { name: "Twitter", href: "#", icon: "M22 4s-.7 2.1-2.3 3.1c1.1-.6 2-1.6 2.6-2.9C21.5 5 20.1 5.8 18.5 6.3 17.2 4.9 15.4 4 13.4 4c-3.9 0-7 3.1-7 7 0 .5.1 1 .2 1.5-5.8-.3-10.9-3.1-14.3-7.3-.6 1-.9 2.2-.9 3.5 0 2.4 1.2 4.6 3.1 5.8-.9 0-1.8-.3-2.6-.7v.1c0 3.4 2.4 6.2 5.6 6.8-.6.2-1.2.2-1.8.1-.1 0-.3 0-.4-.1.9 2.8 3.5 4.8 6.6 4.9-2.4 1.9-5.4 3-8.7 3-.6 0-1.1 0-1.7-.1 3.1 2 6.8 3.2 10.7 3.2 12.9 0 19.9-10.7 19.9-19.9v-.9c1.4-1 2.5-2.2 3.5-3.6z" } // Example Heroicon path
];
