// app/api/collections/[category]/products/[productId]/route.ts
import { NextResponse } from 'next/server';
import { databases, databaseId, allCakes, storage, bucketId} from '@/appwrite/config';
import { Query } from 'appwrite';



export async function GET( request: Request, { params }:  { params: Promise< { productName: string;  } >}) {

    const { productName } = await params;

    try {

          // Fetch the cake from the collection based on slug
          const response = await databases.listDocuments(
            databaseId, 
            allCakes,
            [Query.equal("slug", productName)]
        );

        // Check if the product exists
        const product = response.documents[0];
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

          // Return the product details
          return NextResponse.json({
            id: product.$id,
            name: product.name,
            description: product.description,
            price: product.price,
            imgspercake: Array.isArray(product.imgspercake) 
            ? product.imgspercake.map((id: string) => storage.getFileView(bucketId, id)) 
            : [storage.getFileView(bucketId, product.imgspercake)], // Convert single image to array
        });

        
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ error: 'Failed to fetch product details' }, { status: 500 });
    }
}