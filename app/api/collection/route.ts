import { NextResponse } from 'next/server';
import { databases, storage, bucketId, databaseId, allCakes } from '@/appwrite/config';
import { Query } from "appwrite";

export async function GET() {
    try {
        // Fetch collections from Appwrite
        const { documents } = await databases.listDocuments(
            databaseId, 
            allCakes,

            [
                Query.search("categories", "collections") // Filter by category
            ]
        );

        // Map collections to the required format
        const collections = documents.map((doc) => ({
            id: doc.$id, // Use Appwrite's generated Document ID
            name: doc.name,
            imgspercake: Array.isArray(doc.imgspercake)  
            ? storage.getFileView(bucketId, doc.imgspercake[0])  // Get only the first image
            : null, // Handle case where there are no images
        }));

        return NextResponse.json({ collections }, { status: 200 });

    } catch (error) {
        console.error('Error fetching collections:', error);
        return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
    }
}