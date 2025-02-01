import Link from "next/link";
import Image from "next/image";
import './single.css'
import formatCollectionName from "@/utils/formatName";


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
            <div className="product-display-container">
            {/* Back to Collections Link */}
            <Link href="/collections" className="back-to-collections-link">
              &larr; Back to Collections
            </Link>
      
            {/* Product Details */}
            <div className="product-details">
              {/* Product Image */}
              <div className="product-image-container">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-img"
                  priority
                  width={560} // Double the display size for Retina screens
                  height={600} // Double the display size for Retina screens
                  quality={100} // Ensure maximum quality
                  sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
                />
              </div>
      
              {/* Product Information */}
              <div className="product-info">
                <h1 className="product-name">{formatCollectionName(product.name)}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-description">Want to add a personal touch? Check out all of our personalised cake options <span className="span-ele">here</span>!</p>
                <p className="product-price">${product.price}</p>
      
                {/* Call-to-Action Button */}
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        );
    } catch (error) {
        console.error('Error fetching product details:', error);
        return <div>Failed to load product details. Please try again later.</div>;
    }
}