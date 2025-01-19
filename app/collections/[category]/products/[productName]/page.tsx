'use client'; // Mark this component as a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SingleProduct from '@/components/SingleDisplay/SingleProduct'; // Import the SingleProduct component

interface ProductPageParams {
    category: string;
    productName: string;
}

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    flavors?: string[];
    colorScheme?: string[];
}

interface ApiResponse {
    product: Product;
}

export default function ProductPage({ params }: { params: Promise<ProductPageParams> }) {
    const [resolvedParams, setResolvedParams] = useState<ProductPageParams | null>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Resolve the params Promise
        params.then((resolved) => {
            setResolvedParams(resolved);
        }).catch((err) => {
            console.error('Error resolving params:', err);
            setError('Failed to resolve route parameters.');
        });
    }, [params]);

    useEffect(() => {
        if (!resolvedParams) return;

        const fetchProduct = async () => {
            try {
                const { category, productName } = resolvedParams;
                const apiUrl = `http://localhost:3000/api/collections/${category}/products/${productName}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch product details');
                }

                const data: ApiResponse = await response.json();
                setProduct(data.product);
            } catch (err) {
                console.error('Error fetching product details:', err);
                setError(err instanceof Error ? err.message : 'Failed to load product details.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [resolvedParams]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <SingleProduct
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
                flavors={product.flavors}
                colorScheme={product.colorScheme}
            />
            <Link href='/collections' className="text-blue-500 hover:underline">
                Back to Collections
            </Link>
        </div>
    );
}