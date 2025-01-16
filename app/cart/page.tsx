'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/cart'; // Import your Zustand store

const Cart: React.FC = () => {
  const products = useCartStore((state) => state.products);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore((state) => state.total());
  const hydrated = useCartStore((state) => state.hydrated);

  if (!hydrated) {
    // Optionally show a loading state while hydration is incomplete
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Render the cart items if items exist in the cart */}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <p>{product.name}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
              </div>

              <div>
                <button onClick={() => addItem(product)}>+</button>
                <button onClick={() => removeItem(product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Display the total */}
      <div>Total: ${total.toFixed(2)}</div>

      <br /> <Link href='/single'>back to shopping</Link>
    </div>
  );
};

export default Cart;