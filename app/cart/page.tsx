'use client'

import React from 'react';
import { useCartStore } from '@/cart';



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



      {/* Render the cart items if items exists in the cart */}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              <div>
                <p >{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>

              <div>
                <button
                  onClick={() => addItems(product.id)} >
                  +
                </button>

                <button
                  onClick={() => delItems(product.id)}>
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
      <div>
        Total: ${total}
      </div>
    </div>
  );
};

export default Cart;