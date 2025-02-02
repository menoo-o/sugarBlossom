'use client'; // Mark this as a Client Component

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
  // Use useParams to get route parameters
  const params = useParams();
  const { category, productName } = params as { category: string; productName: string };

  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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
      {/* Back to Collections Link */}
      <Link href="/collections" className="back-to-collections-link">
        &larr; Back to Collections
      </Link>

      {/* Product Details */}
      <div className="product-details">
        {/* Main Product Image */}
        <div className="product-image-container">
        {mainImage && (
            <Image
              src={mainImage}
              alt={`${product.name} - Main Image`}
              className="main-product-img"
              width={400}
              height={400}
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
                alt={`${product.name} - Image ${index + 1}`}
                className="additional-img"
                width={100} // Smaller size for additional images
                height={100}
              />
            </div>
          ))}
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>

          {/* Call-to-Action Button */}
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}