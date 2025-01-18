// app/api/collections/[category]/route.ts

import { NextResponse } from 'next/server';
import { databases, databaseId, birthdayCollectionId, weddingCollectionId, storage, bucketId } from '@/appwrite/config';

export async function GET(request: Request, { params }: { params: { category: string } }) {
    const { category } = params;

    try {
        // Determine which collection to query based on the category
        const collectionId = category === 'birthday' ? birthdayCollectionId : weddingCollectionId;

        // Fetch products from Appwrite
        const response = await databases.listDocuments(databaseId, collectionId);

        // Map products to the required format
        const products = response.documents.map((doc: any) => ({
            id: doc.$id,
            name: doc.name,
            description: doc.description,
            price: doc.price,
            imageUrl: storage.getFileView(bucketId, doc.fileId), // Assuming you store image URLs in Appwrite
        }));

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}