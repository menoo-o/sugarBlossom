import { NextResponse } from 'next/server';
import { databases, storage, databaseId, birthdayCollectionId, bucketId } from '@/appwrite/config';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params; // Extract the slug from the route parameters

    console.log('Slug:', slug); // Debugging: Log the slug

    // Normalize the slug
    const normalizedSlug = slug.trim().toLowerCase();

    // Fetch the product with the matching slug
    const { documents } = await databases.listDocuments(databaseId, birthdayCollectionId, [
      `slug=${normalizedSlug}`, // Query for the specific cake
    ]);

    if (documents.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const product = {
      id: documents[0].$id,
      slug: documents[0].slug,
      name: documents[0].name,
      price: documents[0].price,
      imageUrl: storage.getFileView(bucketId, documents[0].fileId),
      description: documents[0].description,
      flavors: documents[0].flavors || [],
      colorScheme: documents[0].colorScheme || [],
    };

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}