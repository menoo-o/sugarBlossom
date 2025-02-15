export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string,
  imgspercake: string[],
  flavors: string[]; // List of available flavors
  variants? : string[];
  sizes?: number[]; // List of available sizes (Now a number[])
}

export interface CartItem extends Product {
  quantity: number;
  flavor: string; // Selected flavor
  size?: number; // Selected size (Now a number)
}

export interface Cart {
  products: CartItem[]; // Array of cart items
  hydrated: boolean;
  addItem: (product: Product, flavor: string, size: number) => void;
  removeItem: (id: string, flavor: string, size: number) => void;
  total: () => number;
  setHydrated: (hydrated: boolean) => void;
}
