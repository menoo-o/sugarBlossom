// app/api/collections/[category]/products/[productId]/route.ts
import { NextResponse } from 'next/server';
import { databases, databaseId, storage, bucketId, birthdayCollectionId, weddingCollectionId, bentoCollectionId, cupcakesCollectionId, accessoriesCollectionId, customCollectionId } from '@/appwrite/config';


// Mapping of categories to collection IDs
const COLLECTION_MAPPING: Record <string, string> = {
    'birthday-cakes': birthdayCollectionId,
    'wedding-cakes': weddingCollectionId,
    'bento-cakes': bentoCollectionId,
    'cupcakes': cupcakesCollectionId,
    'cakes-accessories': accessoriesCollectionId,
    'personalized-cakes': customCollectionId
};

export async function GET( request: Request, { params }:  { params: Promise< { category: string; productName: string } >}) {

    const { category, productName } = await params;

    try {
        // Determine which collection to query based on the category
        
        const collectionId = COLLECTION_MAPPING[category];

        if (!collectionId){
            return NextResponse.json({error:"invalid collection"}, {status: 400});
        }

        // Fetch all products from the collection
        const response = await databases.listDocuments(databaseId, collectionId);

        // Find the product by name (case-insensitive and URL-friendly)
        const product = response.documents.find(
            (doc) => doc.name.toLowerCase().replace(/ /g, '-') === productName
        );

        // Handle missing product
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Map the product to the required format
        const productDetails = {
            id: product.$id,
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: storage.getFileView(bucketId, product.fileId)
        };

        return NextResponse.json({ product: productDetails }, { status: 200 });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ error: 'Failed to fetch product details' }, { status: 500 });
    }
}