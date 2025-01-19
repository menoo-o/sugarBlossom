// app/collections/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import './collection.css'

export default async function CollectionsPage() {
    try {
        // Fetch collections from the API
        const response = await fetch('http://localhost:3000/api/collections', {
            cache: 'force-cache', // Ensures SSG behavior
            next: { revalidate: 3 },
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch collections');
        }

        const { collections } = data;

        return (
            <div>
                <h1>Collections</h1>
                <div className="collections-container">
                    {collections.map((collection: any) => (
                        <div key={collection.id} className="collection-card">
                            <Image  
                                src={collection.imageUrl}
                                alt={collection.name}
                                width={100}
                                height={100}
                                className='collection-img'
                            />
                           
                            <h2 className="collection-name">{collection.name}</h2>

                            <Link
                                href={`/collections/${collection.name}`}
                                className="collection-link"
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