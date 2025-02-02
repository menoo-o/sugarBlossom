'use client'; // Mark this as a Client Component

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgspercake: string[]; // Array of image URLs
}

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import formatCollectionName from '@/utils/formatName';
import './single.css'

export default function ProductPage() {
  // Use useParams to get route parameters
  const params = useParams();
  
  const { category, productName } = params as { category: string; productName: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const servingSize = [
    { id: 1, size: "4", servingCapacity: "Serves 3-4 persons", multiplier: 1 }, // Base price
    { id: 2, size: "7", servingCapacity: "Serves 8-12 persons", multiplier: 2 },
    { id: 3, size: "10", servingCapacity: "Serves 18-26 persons", multiplier: 2.5 },
    { id: 4, size: "13", servingCapacity: "Serves 34-50 persons", multiplier: 3 },
  ];


  useEffect ( () => {
    if (!category || !productName) {
      setError('Invalid category or product name.');
      setIsLoading(false);
      return;
    }

    // Fetch product data based on category and productName
    fetchProductData(category, productName);
  }, [category, productName]); // Add category and productName as dependencies

  const fetchProductData = async (category: string, productName: string) => {
    try {
      const apiUrl = `http://localhost:3000/api/collections/${category}/products/${productName}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      if (!data.product) {
        setError('Product not found.');
        return;
      }

      setProduct(data.product);

  
      setMainImage(data.product.imgspercake?.[0] || null);
    } catch (err) {
      setError('Failed to fetch product data.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="error-message">Product not found.</div>;
  }



  return (
    <div className="product-display-container">

      {/* Product Details */}
      <div className="product-details">
        <div className='imgs-container'>
            {/* Main Product Image */}
        <div className="product-image-container single">
        {mainImage && (
            <Image
              src={mainImage}
              alt={`${product.name} - Cake Image`}
              className="main-product-img"
              width={560} // Double the display size for Retina screens
              height={600} // Double the display size for Retina screens
              quality={100} // Ensure maximum quality
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
              priority
            />
          )}
        </div>

        {/* Additional Product Images */}
        <div className="additional-images-container">
          {product.imgspercake.map((imgUrl: string, index: number) => (
            <div
              key={index}
              className="additional-image-wrapper"
              onClick={() => setMainImage(imgUrl)} // Update main image on click
            >
              <Image
                src={imgUrl}
                alt={`${product.name} -Cake Image ${index + 1}`}
                className="additional-img"
                width={95} // Smaller size for additional images
                height={95}
                quality={100} // Ensure maximum quality
              />
            </div>
          ))}
        </div>
        </div>
      

        {/* Product Information */}
        <div className="product-info">

           <div className="product-header">
               <h1 className="product-name">{formatCollectionName(product.name)}</h1>
               <span className='product-price'>From: ${(product.price * (servingSize.find(option => option.id === selectedSize)?.multiplier || 1)).toFixed(2)}</span>

            </div>    

          <p className="product-description">{product.description}</p>
          
          {/* product sizing */}
      
          <div className="serving-size-container">
            {servingSize.map((option) => (
              <div
                key={option.id}
                className={`serving-option ${
                  selectedSize === option.id ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(option.id)}
              >
                <div className="circle">{option.size}&#8243;</div>
                <p className="serving-text">{option.servingCapacity}</p>
              </div>
            ))}
           </div>


          {/* Call-to-Action Button */}
          {/* <button className="add-to-cart-button">Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
}