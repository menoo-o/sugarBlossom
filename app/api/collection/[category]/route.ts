// app/api/collections/[category]/route.ts

import { NextResponse } from 'next/server';
import { Query } from 'appwrite';
import { databases, databaseId, allCakes, storage, bucketId } from '@/appwrite/config';


export async function GET(request: Request, { params }: { params: Promise <{ category: string }> }) {
    const { category } = await params;

    try {
        // Fetch products from Appwrite
        const response = await databases.listDocuments(
            databaseId, 
            allCakes,
            [
                Query.search("category", category)
            ])   
            ;

        
        // Map products to the required format
        const products = response.documents.map((doc) => ({
            id: doc.$id,
            name: doc.name,
            description: doc.description,
            price: doc.price,
            slug: doc.slug,
            imgspercake: Array.isArray(doc.imgspercake) && doc.imgspercake.length > 0 
            ? storage.getFileView(bucketId, doc.imgspercake[0])  // Get only the first image
            : null, // Handle case where there are no images
        }));

        console.log(products)

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}



