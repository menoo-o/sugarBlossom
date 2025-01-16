import { NextResponse } from 'next/server';
import { databases, storage, databaseId, birthdayCollectionId,bucketId } from '@/appwrite/config'; // Adjust the import based on your Appwrite setup

export async function GET() {
  try {
    // Fetch all documents from the Appwrite collection
    const { documents } = await databases.listDocuments(databaseId, birthdayCollectionId);

    // Map documents to product objects
    const products = documents.map((doc) => ({
      id: doc.$id, // Use Appwrite's generated Document ID
      slug: doc.slug, // Ensure the slug field is included
      name: doc.name,
      price: doc.price,
      imageUrl: storage.getFileView(bucketId, doc.fileId), // Generate the image URL
      description: doc.description,
      flavors: doc.flavors || [], // Default to an empty array if flavors are not provided
      colorScheme: doc.colorScheme || [], // Default to an empty array if colorScheme is not provided
    }));

    // Return all products
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}


