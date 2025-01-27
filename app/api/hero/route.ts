// app/api/collections/route.ts
// 

import { NextResponse } from 'next/server';
import { databases, storage, bucketId, databaseId, collectionId } from '@/appwrite/config';

export async function GET() {
    try {
        // Fetch collections from Appwrite
        const { documents } = await databases.listDocuments(databaseId, '6797868a0012a35eb766');

        // Map collections to the required format
        const hero = documents.map((doc) => ({
            id: doc.$id, // Use Appwrite's generated Document ID
            fileId: storage.getFileView(bucketId, doc.fileId), // Generate image URL
        }));

        return NextResponse.json({ hero }, { status: 200 });
    } catch (error) {
        console.error('Error fetching collections:', error);
        return NextResponse.json({ error: 'Failed to fetch hero img' }, { status: 500 });
    }
}