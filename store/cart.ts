import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of a product
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  flavor: string;
  size: string;
}

// Define the shape of the cart
interface Cart {
  products: (Product & { quantity: number })[]; // Array of Products with an additional quantity property
  hydrated: boolean; // Track hydration state
  addItem: (product: Product, flavor:string, size:string) => void; // Add a product to the cart
  removeItem: (id: string) => void; // Remove a product from the cart
  total: () => number; // Calculate the total price of the cart
  setHydrated: (hydrated: boolean) => void; // Function to set hydration state
}

// Create the Zustand store
export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      products: [],
      hydrated: false, // Initial hydration state

      // Add a product to the cart
      addItem: (product,) =>
        set((state) => {
          // Check if the product already exists in the cart
          const existingProduct = state.products.find((p) => p.id === product.id);

          return {
            products: existingProduct
              ? state.products.map((p) =>
                  p.id === product.id
                    ? { ...p, quantity: p.quantity + 1 } // Increment quantity
                    : p
                )
              : [
                  ...state.products,
                  { ...product, quantity: 1 }, // Add new product with quantity 1
                ],
          };
        }),

      // Remove a product from the cart
      removeItem: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      // Calculate the total price of the cart
      total: () =>
        get().products.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        ),

      // Set hydration state
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: 'cart-storage', // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true); // Set hydrated to true once hydration completes
      },
    }
  )
);