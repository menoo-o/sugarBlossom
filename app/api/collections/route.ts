// app/api/collections/route.ts
// 

import { NextResponse } from 'next/server';
import { databases, storage, bucketId, databaseId, collectionId } from '@/appwrite/config';

export async function GET() {
    try {
        // Fetch collections from Appwrite
        const { documents } = await databases.listDocuments(databaseId, collectionId);

        // Map collections to the required format
        const collections = documents.map((doc) => ({
            id: doc.$id, // Use Appwrite's generated Document ID
            name: doc.name,
            imageUrl: storage.getFileView(bucketId, doc.fileId), // Generate image URL
        }));

        return NextResponse.json({ collections }, { status: 200 });
    } catch (error) {
        console.error('Error fetching collections:', error);
        return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
    }
}