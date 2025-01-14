import Image from 'next/image';
import Link from 'next/link';
interface Product {
  id: string;
  name: string;
  imageUrl: string;
}

export default async function Collections() {
  // Fetch data at build time (SSG)
  const response = await fetch('http://localhost:3000/api/getCollections', {
    cache: 'force-cache', // Ensures SSG behavior
    next: { revalidate: 3600 }, // Optional: Revalidate every hour (ISR)
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const { products } = await response.json();

  return (
    <div>
      <h1>Collections</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {products.map((product: Product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '16px' }}>
            <Link href={`/collections/${product.name}`}>
              <Image
                priority
                src={product.imageUrl}
                alt={product.name}
                id={product.id}
                width={200}
                height={300}
              />
            </Link>            
            
            <h2>{product.name}</h2>
           
          </div>
        ))}

      </div>
    </div>
  );
}