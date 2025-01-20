'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/cart'; // Import your Zustand store

interface SingleProduct {
  id: number; // Added `id` to identify the product
  name: string;
  imageUrl?: string;
  price: number;
  description?: string;
}

export default function SingleProduct({
  id,
  name,
  imageUrl,
  price,
  description,
}: SingleProduct) {

  const [quantity, setQuantity] = useState(1); // State for quantity input
  const { addItem } = useCartStore(); // Zustand store methods

  // Handle adding to cart with the selected quantity
  const handleAddToCart = () => {
    const product = { id, name, price }; // Create a product object
    for (let i = 0; i < quantity; i++) {
      addItem(product); // Add the product `quantity` times
    }
  };

  // Handle increasing quantity
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => (prev < 10 ? prev + 1 : prev)); // Limit to max 10
  };

  // Handle decreasing quantity
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev)); // Limit to min 1
  };

  return (
    
    <section className="single-product-container">
      {/* Product Image */}
      <div className="product-img">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="product-image"
          priority
        />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h2>{name}</h2>
        <h4>From: ${price.toFixed(2)}</h4>
        <p>{description}</p>
      </div>

      {/* Product Customization Options */}
      <div className="product-choosing">
        {/* Sizing Options */}
        <div className="sizing">
          <h3>Sizes:</h3>
          <ul>
            <li>Round 0.5lb (Serves 3-5)</li>
            <li>Round 1.5lb (Serves 6-8)</li>
            <li>Round 2.5lb (Serves 10-12)</li>
          </ul>
        </div>

        {/* Flavor Selection */}
        {/* <div className="flavors">
          <h3>Flavors:</h3>
          <select>
            {flavors.map((flavor, index) => (
              <option key={index} value={flavor}>
                {flavor}
              </option>
            ))}
          </select>
        </div> */}

        {/* Color Scheme Selection */}
        {/* <div className="color-scheme">
          <h3>Color Scheme:</h3>
          <select>
            {colorScheme.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      {/* Add to Cart Section */}
      <div className="cart">
        <div className="qty">
          <button onClick={handleDecreaseQuantity}>-</button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
  );
}