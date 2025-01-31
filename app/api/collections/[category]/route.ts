// app/api/collections/[category]/route.ts

import { NextResponse } from 'next/server';
import { databases, databaseId, birthdayCollectionId, weddingCollectionId, bentoCollectionId, cupcakesCollectionId, accessoriesCollectionId, customCollectionId, storage, bucketId } from '@/appwrite/config';

// Mapping of categories to collection IDs
const COLLECTION_MAPPING: Record <string, string> = {
    'birthday-cakes': birthdayCollectionId,
    'wedding-cakes': weddingCollectionId,
    'bento-cakes': bentoCollectionId,
    'cupcakes': cupcakesCollectionId,
    'cakes-accessories': accessoriesCollectionId,
    'personalized-cakes': customCollectionId
};


 

export async function GET(request: Request, { params }: { params: Promise <{ category: string }> }) {
    const { category } = await params;

    try {
        // Determine which collection to query based on the category
        const collectionId = COLLECTION_MAPPING[category]

        //ERROR handling
        if (!collectionId){
            return NextResponse.json({error:"invalid collection"}, {status: 400});
        }


        // Fetch products from Appwrite
        const response = await databases.listDocuments(databaseId, collectionId);

        
        // Map products to the required format
        const products = response.documents.map((doc) => ({
            id: doc.$id,
            name: doc.name,
            description: doc.description,
            price: doc.price,
            imageUrl: storage.getFileView(bucketId, doc.fileId), // Assuming you store image URLs in Appwrite
        }));

        console.log(products)

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}