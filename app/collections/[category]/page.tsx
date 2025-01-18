// app/collections/[category]/page.tsx
import Link from "next/link";


export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;

    try {
        // Fetch products for the category from the API
        const response = await fetch(`http://localhost:3000/api/collections/${category}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch products');
        }

        const { products } = data;

        return (
            <div>
                <h1>{category} Cakes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-md">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
                            <Link
                                href={`/collections/${category}/products/${product.id}`}
                                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
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