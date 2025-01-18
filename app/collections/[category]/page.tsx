// app/collections/[category]/page.tsx
import Link from "next/link";
import Image from "next/image";


export default async function CategoryPage({ params }: { params: Promise <{ category: string }> }) {
    const { category } = await params;

    try {
        // Fetch products for the category from the API
        const response = await fetch(`http://localhost:3000/api/collections/${category}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch products');
        }

        const { products } = data;

        return (
            <div className="category-container">
                <h1>{category} Cakes</h1>
                <div className="product-container">
                    {products.map((product: any) => (
                        <div key={product.id} className="product card">
                            <Image 
                                src={product.imageUrl}
                                alt={product.name}
                                className="product-img"
                                width={200}
                                height={200}
                            />
                            
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-descrip">{product.description}</p>
                            <p className="product-price">${product.price}</p>

                            <Link
                               href={`/collections/${category}/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                                className="product-single-display-link"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return <div>Failed to load products. Please try again later.</div>;
    }
}