'use client'; // Mark this as a Client Component


import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import formatCollectionName from '@/utils/formatName';
import './single.css'
import { useCartStore } from '@/store/cart';
import { Product } from '@/lib/types/product';

// Define a type for your product data

function ProductDetails() {
  // Get the dynamic parameter (productName) from the URL
  const params = useParams();
  const { productName } = params as { productName: string };
  console.log("Product Name from URL:", productName); // Debugging log

  // Local state to hold the product, main image, error message, loading state, and selected serving size
  const [productData, setProductData] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [selectedSize, setSelectedSize] = useState<number | null>(null); // size as number

  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const addToCart = useCartStore((state)=> state.addItem);  

  // Serving size options with multipliers to calculate the price
  const servingSize = [
    { id: 1, size: "4", servingCapacity: "Serves 3-4 persons", multiplier: 1 },
    { id: 2, size: "7", servingCapacity: "Serves 8-12 persons", multiplier: 2 },
    { id: 3, size: "10", servingCapacity: "Serves 18-26 persons", multiplier: 2.5 },
    { id: 4, size: "13", servingCapacity: "Serves 34-50 persons", multiplier: 3 },
  ];





  

  // Fetch product data when productName changes
  useEffect(() => {
    if (!productName) {
      setError("Invalid product name.");
      setIsLoading(false);
      return;
    }

  // Function to fetch product data from your API
  const fetchProductData = async () => {
    try {
      // Construct the API URL safely with encodeURIComponent
      const response = await fetch(`/api/products/${productName}`);
        if (!response.ok) {
          // If the API returns an error status, extract the error message and throw an error
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch product details");
        }
        // Parse the JSON response
        const data = await response.json();
     
      
      if (!data.productData) {
        setError("Product not found.");
        return;
      }

      setProductData(data.productData);
      setMainImage(data.productData.imgspercake?.[0] || null);

    } catch (err: unknown) {
      setError("Failed to fetch product data.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchProductData();
  }, [productName]);

  // Display loading, error, or the product details once data is available
  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  if (!productData) {
    return <div className="error-message">Product not found.</div>;
  }


  const handleAddToCart = () => {
    if (!selectedFlavor || selectedSize === null) {
      alert('Please select a flavor and size.');
      return;
    }
  
    addToCart(productData, selectedFlavor, selectedSize ?? 0); // Ensure size is always a number
    console.log('Cart Updated:', useCartStore.getState().products);
    alert('Product added to cart!');
  };

  



  const variant = JSON.parse(productData.variants[0]);

  return (
    <div className="product-display-container">

      <div className="product-details">
        <div className="imgs-container">
          {mainImage && (
            <Image
              src={mainImage}
              alt={`${productData.name} - Cake Image`}
              className="main-product-img"
              width={560}
              height={600}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
          
          {/* additional-images-container */}
          <div className="additional-images-container">
            {productData.imgspercake.map((imgUrl: string, index: number) => (
              <div
                key={index}
                className="additional-image-wrapper"
                onClick={() => setMainImage(imgUrl)}
              >
                <Image
                  src={imgUrl}
                  alt={`${productData.name} - Cake Image ${index + 1}`}
                  className="additional-img"
                  width={95}
                  height={95}
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>

        </div>
        <div className="product-info">

          <div className="product-header">
            <h1 className="product-name">{formatCollectionName(productData.name)}</h1>

            <span className="product-pricey">
              From: £{(productData.price * (servingSize.find((option) => option.id === selectedSize)?.multiplier || 1)).toFixed(2)}
            </span>
          </div>

          <p className="product-description">{productData.description}</p>
       
          {/* serving size */}
          <p className='select-size'>Select your Size</p>
          <div className="serving-size-container flavor-container">

            {servingSize.map((option) => (
              <div
                key={option.id}
                className={`serving-option ${selectedSize === option.id ? "selected" : ""}`}
                onClick={() => setSelectedSize(option.id)}
              >
                <div className="circle">{option.size}&#8243;</div>
                <p className="serving-text">{option.servingCapacity}</p>
              </div>
            ))}


          </div>

     
            {/* flavor container */}
            <p className='select-flavor'>Select your Flavor</p>
            <div className="flavor-container">
            {productData.flavors.map((flavor) => (
              <div
                key={flavor}
               className={`flavor ${
                selectedFlavor === flavor ? 
                'selected' : 
                ''}`}
               onClick={() => setSelectedFlavor(flavor)}
              >

              <p>{flavor}</p>
               
              </div>
            ))}
            </div>

            {/* price */}
            <span className="product-pricey">
              From: £{(productData.price * (servingSize.find((option) => option.id === selectedSize)?.multiplier || 1)).toFixed(2)}
            </span>
            <br />
            
            {/* add to cart */}
            <button 
               onClick={handleAddToCart}
            >
              
              Add to Cart
              
              </button>

            <br />
            
            <h1>Size: {variant.size}</h1>
<h2>Price: ${variant.price*2}</h2>
             <br />

 
              
        </div>
      </div>
    </div>
  );
}

// Wrap the ProductDetails component in a ProductPage component to export
export default function ProductPage() {
  return <ProductDetails />;
}

