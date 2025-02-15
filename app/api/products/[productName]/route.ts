// app/api/collections/[category]/products/[productId]/route.ts
import { NextResponse } from 'next/server';
import { databases, databaseId, allCakes, storage, bucketId} from '@/appwrite/config';
import { Query } from 'appwrite';



export async function GET( request: Request, { params }:  { params: Promise< { productName: string;  } >}) {

    const { productName } = await params;

    try {
        // Fetch the cake from the collection based on slug
        const response = await databases.listDocuments(
          databaseId, // Replace with your database ID
          allCakes,   // Replace with your collection ID
          [Query.equal("slug", productName)] // Query to find the document by slug
        );
    
        // Extract the first document from the response
        const product = response.documents[0];
    
        // Check if the product exists
        if (!product) {
          return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        const productData ={ 
            id: product.$id,
            name: product.name,
            description: product.description,
            price: product.price,
            variants: product.variants,
            flavors: product.flavors,
            imgspercake: Array.isArray(product.imgspercake) 
            ? product.imgspercake.map((id: string) => storage.getFileView(bucketId, id)) 
            : [storage.getFileView(bucketId, product.imgspercake)],
     }

          // Return the product details
          return NextResponse.json({productData}, {status: 200});

        
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ error: 'Failed to fetch product details' }, { status: 500 });
    }
}