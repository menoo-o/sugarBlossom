import React from 'react';
import Image from 'next/image';
import './single.css'

interface SingleProduct {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  flavors?: string[]; // Changed to an array for multiple flavors
  colorScheme?: string[]; // Changed to an array for multiple color schemes
}

export default function SingleProduct({
  name,
  imageUrl,
  price,
  description,
  flavors = [], // Default to an empty array
  colorScheme = [], // Default to an empty array
}: SingleProduct) {
  return (
    <section className="single-product-container">
      {/* Product Image */}
      <div className="product-img">
        <Image
          src={imageUrl}
          alt={name}
          width={300} // Increased size for better visibility
          height={300}
          className="product-image"
          priority // Prioritize loading for better performance
        />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h2>{name}</h2>
        <h4>From: ${price.toFixed(2)}</h4> {/* Format price to 2 decimal places */}
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
        <div className="flavors">
          <h3>Flavors:</h3>
          <select>
            {flavors.map((flavor, index) => (
              <option key={index} value={flavor}>
                {flavor}
              </option>
            ))}
          </select>
        </div>

        {/* Color Scheme Selection */}
        <div className="color-scheme">
          <h3>Color Scheme:</h3>
          <select>
            {colorScheme.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}