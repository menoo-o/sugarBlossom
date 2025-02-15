// types/product.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    flavor: string;
    size: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }