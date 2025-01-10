import { databases, storage, bucketId, databaseId, collectionId } from '@/appwrite/config';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { documents } = await databases.listDocuments(databaseId, collectionId);

    // Include the Document ID ($id) in the returned product objects
    const products = documents.map((doc) => ({
      id: doc.$id, // Use Appwrite's generated Document ID
      name: doc.name,
      price: doc.price,
      descrip: doc.descrip,
      imageUrl: storage.getFileView(bucketId, doc.fileId),
    }));

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
