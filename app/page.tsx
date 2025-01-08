'use client'

import React from 'react';
import { useCartStore } from '@/cart';

// Define the array of products
const items = [
  { id: 1, name: "Cake", price: 10 },
  { id: 2, name: "Cookie", price: 5 },
  { id: 3, name: "Donut", price: 3 },
];

const Cart: React.FC = () => {
  const products = useCartStore((state) => state.products);
  const addItems = useCartStore((state) => state.addItems);
  const delItems = useCartStore((state) => state.delItems);
  const total = useCartStore((state) => state.total());
  const hydrated = useCartStore((state) => state.hydrated);

  if (!hydrated) {
    // Optionally show a loading state while hydration is incomplete
    return <p>Loading...</p>;
  }


  return (
    <div >
      <h1 >Shopping Cart</h1>

      {/* Display available products with "Add to Cart" buttons */}
      <div >
        <h2>Available Products</h2>
        <ul >
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <p >{item.name}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button
                onClick={() => addItems(item.id)} // Add item to cart
                
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the cart items */}
      {products.length > 0 ? (
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              
            >
              <div>
                <p >{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => addItems(product.id)} // Increment quantity
                
                >
                  +
                </button>
                <button
                  onClick={() => delItems(product.id)} // Remove item
                
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Display the total */}
      <div className="mt-6 text-lg font-bold">
        Total: ${total}
      </div>
    </div>
  );
};

export default Cart;