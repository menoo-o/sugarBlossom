// app/collections/page.tsx
import Link from 'next/link';

export default async function CollectionsPage() {
    try {
        // Fetch collections from the API
        const response = await fetch('http://localhost:3000/api/collections');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch collections');
        }

        const { collections } = data;

        return (
            <div>
                <h1>Collections</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {collections.map((collection: any) => (
                        <div key={collection.id} className="border p-4 rounded-lg shadow-md">
                            <img
                                src={collection.imageUrl}
                                alt={collection.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <h2 className="text-xl font-semibold mt-2">{collection.name}</h2>
                            <Link
                                href={`/collections/${collection.id}`}
                                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                View Collection
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching collections:', error);
        return <div>Failed to load collections. Please try again later.</div>;
    }
}