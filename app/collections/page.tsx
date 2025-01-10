'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: string;
  descrip: string;
  imageUrl: string;
}

export default function Collections() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/getCollections');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Shop</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {products.map((product) => (

          <div key={product.id} style={{ border: '1px solid #ddd', padding: '16px' }}>

            <Image 
               priority
               src={product.imageUrl}
               alt={product.name}
               id={product.id}
               width={200}
               height= {300}

            />

            <h2>{product.name}</h2>
            <p>{product.descrip}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
