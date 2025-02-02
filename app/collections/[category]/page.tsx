// app/collections/[category]/page.tsx
import Link from "next/link";
import Image from "next/image";
import formatCollectionName from "@/utils/formatName";
import './products.css'


export default async function CategoryPage({ params }: { params: Promise <{ category: string }> }) {
    const { category } = await params;

    try {
        // Fetch products for the category from the API
        const response = await fetch(`http://localhost:3000/api/collections/${category}`, 
        {
            cache: 'force-cache',
            next: { revalidate: 36000 },
        }
    );
        const data = await response.json();
        console.log(data)

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch products');
        }

        const { products } = data;

        

        return (
            <div className="category-container">
                <h1>{formatCollectionName(category)}</h1>
                <div className="product-container">
                    {products.map((product: any) => (
                        <div key={product.id} className="product card">
                            <div className="product-img-container">
                            <Link
                               href={`/collections/${category}/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                                className="product-single-display-link"
                                prefetch={true}
                                
                            >
                                <Image 
                                    src={product.imgspercake}
                                    alt={product.name}
                                    className="product-img"
                                    width={560} // Double the display size for Retina screens
                                    height={600} // Double the display size for Retina screens
                                    quality={100} // Ensure maximum quality
                                    sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
                                />
                            </Link>
                            </div>
                           

                    <div className="product-info">
                            <Link  href={`/collections/${category}/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                                className="product-single-display-link"
                                prefetch={true}
                                >
                            <h2 className="product-name">{formatCollectionName(product.name)}</h2>
                            </Link>
                            <p className="product-price">From: ${product.price}</p>
                        </div>
                                            
        
                           
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