import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of a product
interface Products {
  id: number;
  name: string;
  price: number;
}

// Define the shape of the cart
interface Cart {
  products: (Products & { quantity: number })[]; // Array of Products with an additional quantity property
  hydrated: boolean; // Track hydration state
  addItems: (id: number) => void;
  delItems: (id: number) => void;
  total: () => number; // Total price of the cart
  setHydrated: (hydrated: boolean) => void; // Function to set hydration state
}

// Define the array of products
const items: Products[] = [
  { id: 1, name: "Cake", price: 10 },
  { id: 2, name: "Cookie", price: 5 },
  { id: 3, name: "Donut", price: 3 },
];

// Create the Zustand store
export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      products: [],
      hydrated: false, // Initial hydration state

      // Add an item to the cart
      addItems: (id) =>
        set((state) => {
          // Find the product in the `items` array
          const productToAdd = items.find((item) => item.id === id);

          if (!productToAdd) {
            // If the product is not found, return the current state
            console.error(`Product with id ${id} not found.`);
            return state;
          }

          // Check if the product already exists in the cart
          const existingProduct = state.products.find((product) => product.id === id);

          return {
            products: existingProduct
              ? state.products.map((product) =>
                  product.id === id
                    ? { ...product, quantity: product.quantity + 1 } // Increment quantity
                    : product
                )
              : [
                  ...state.products,
                  { ...productToAdd, quantity: 1 }, // Add new product with quantity 1
                ],
          };
        }),

      // Delete an item from the cart
      delItems: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
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
      name: "cart-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true); // Set hydrated to true once hydration completes
      },
    }
  )
);