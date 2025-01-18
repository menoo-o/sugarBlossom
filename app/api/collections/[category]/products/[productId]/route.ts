// app/api/collections/[category]/products/[productId]/route.ts
import { NextResponse } from 'next/server';
import { databases, databaseId, birthdayCollectionId, weddingCollectionId, storage, bucketId } from '@/appwrite/config';

export async function GET( request: Request, { params }: { params: Promise< { category: string; productId: string }> }
) {
    const { category, productId } = await params;

    try {
        // Determine which collection to query based on the category
        const collectionId = category === 'birthday' ? birthdayCollectionId : weddingCollectionId;

        // Fetch the specific product from Appwrite
        const product = await databases.getDocument(databaseId, collectionId, productId);

        // Map the product to the required format
        const productDetails = {
            id: product.$id, // The productId (e.g., "chocolate-cake")
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: storage.getFileView(bucketId, product.fileId), // Generate image URL
        };

        return NextResponse.json({ product: productDetails }, { status: 200 });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ error: 'Failed to fetch product details' }, { status: 500 });
    }
}