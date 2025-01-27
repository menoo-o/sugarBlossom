// app/api/collections/route.ts
// 

import { NextResponse } from 'next/server';
import { databases, storage, bucketId, databaseId, collectionId } from '@/appwrite/config';

export async function GET() {
    try {
        // Fetch hero image and slider data
        const hero = await heroImg();
        const slider = await instaSlider();

         // Ensure hero is always an array
            const formattedHero = Array.isArray(hero) ? hero : [];


        // Return the combined data as a JSON response
        return NextResponse.json({ hero: formattedHero, slider }, { status: 200 });
    } catch (error) {
        console.error('Error fetching collections:', error);
        return NextResponse.json({ error: 'Failed to fetch Data' }, { status: 500 });
    }
}

async function heroImg() {
    try {
        // Fetch collections from Appwrite
        const { documents } = await databases.listDocuments(databaseId, '6797868a0012a35eb766');

        // Map collections to the required format
        const hero = documents.map((doc) => ({
            id: doc.$id, // Use Appwrite's generated Document ID
            fileId: storage.getFileView(bucketId, doc.fileId), // Generate image URL
        }));

        // Return the actual data (not a response object)
        return hero;
    } catch (error) {
        console.error('Error fetching hero image:', error);
        throw new Error('Failed to fetch hero image'); // Throw an error to be caught by the GET function
    }
}

async function instaSlider() {
    try {
        // Fetch collections from Appwrite
        const { documents } = await databases.listDocuments(databaseId, '67979537001ffd0ece77');

        // Map collections to the required format
        const slider = documents.map((doc) => ({
            id: doc.$id, // Use Appwrite's generated Document ID
            fileId: storage.getFileView(bucketId, doc.fileId), // Generate image URL
        }));

        // Return the actual data (not a response object)
        return slider;
    } catch (error) {
        console.error('Error fetching slider data:', error);
        throw new Error('Failed to fetch slider data'); // Throw an error to be caught by the GET function
    }
}