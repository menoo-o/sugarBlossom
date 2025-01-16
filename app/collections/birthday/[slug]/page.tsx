'use client'; // Mark this as a client component

import React, { useEffect, useState } from 'react';
import SingleProduct from '@/components/SingleDisplay/SingleProduct';

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  flavors?: string[];
  colorScheme?: string[];
}

export default function BirthdaySlugPage({ params }: Props) {
  const { slug } = params; // No need to use `await` here

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch product data on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/getBirthdayCakes?slug=${slug}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch product with slug ${slug}`);
        }

        const { product } = await response.json();
        setProduct(product);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Show an error message
  }

  if (!product) {
    return <p>Product not found.</p>; // Fallback UI if product is not found
  }

  return (
    <div>
      {/* Render the SingleProduct component with the fetched data */}
      <SingleProduct
        id={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
        description={product.description}
        // flavors={product.flavors}
        // colorScheme={product.colorScheme}
      />
    </div>
  );
}