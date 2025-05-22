
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
