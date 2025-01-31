import Link from "next/link";
import Image from "next/image";




export default async function ProductPage({
    params,
}: {
    params: Promise <{ category: string; productName: string }>; // Use `productName` instead of `productId`
}) {
    const { category, productName } = await params;

    try {
        // Log params for debugging
        console.log('Params:', params);

        // Construct the API URL
        const apiUrl = `http://localhost:3000/api/collections/${category}/products/${productName}`;
        console.log('API URL:', apiUrl);

        // Fetch product details from the API
        const response = await fetch(apiUrl);

        // Log API response for debugging
        console.log('API Response:', response);

        // Check if the response is OK
        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(errorData.error || 'Failed to fetch product details');
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('API Data:', data);

        const { product } = data;

        // Handle missing product
        if (!product) {
            return <div>Product not found.</div>;
        }

        return (
            <div>
                <h1>{product.name}</h1>
                <Image 
                    src={product.imageUrl}
                   alt={product.name}
                   className="product-img"
                    width={200}
                    height={200}
                                            />

                <p className="text-gray-600 mt-4">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>

                <Link href='/collections'>back to collections</Link>
            </div>
        );
    } catch (error) {
        console.error('Error fetching product details:', error);
        return <div>Failed to load product details. Please try again later.</div>;
    }
}