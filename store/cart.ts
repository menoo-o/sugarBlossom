import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Cart } from '@/lib/types/product';

export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      products: [],
      hydrated: false,

      addItem: (product, flavor, size) =>
        set((state) => {
          // Check if an item with the same id, flavor, and size exists
          const existingProduct = state.products.find(
            (p) => p.id === product.id && p.flavor === flavor && p.size === size
          );

          return {
            products: existingProduct
              ? state.products.map((p) =>
                  p.id === product.id && p.flavor === flavor && p.size === size
                    ? { ...p, quantity: p.quantity + 1 } // Increase quantity
                    : p
                )
              : [
                  ...state.products,
                  { ...product, flavor, size, quantity: 1 }, // Add new unique variant
                ],
          };
        }),

      removeItem: (id, flavor, size) =>
        set((state) => ({
          products: state.products.filter(
            (p) => !(p.id === id && p.flavor === flavor && p.size === size)
          ),
        })),

      total: () =>
        get().products.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        ),

      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);