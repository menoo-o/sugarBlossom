'use client'

import React from 'react';
import { useCartStore } from '@/cart';
import Link from 'next/link';

// Define the array of products
const items = [
    { id: 1, name: "Cake", price: 10 },
    { id: 2, name: "Cookie", price: 5 },
    { id: 3, name: "Donut", price: 3 },
  ];


const Shop: React.FC = () => {
  const addItems = useCartStore((state) => state.addItems);


  const hydrated = useCartStore((state) => state.hydrated);

  if (!hydrated) {
    // Optionally show a loading state while hydration is incomplete
    return <p>Loading...</p>;
  }


  return (
    <div >
      <h1 >Cakes Section</h1>

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


      <h3>
      <Link href='/cart'>View Cart</Link>
      </h3> <br /><br />
 


    </div>
  );
};

export default Shop;
