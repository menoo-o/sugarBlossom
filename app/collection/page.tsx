// app/collections/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import './collection.css'
import formatCollectionName from '@/utils/formatName';

export default async function CollectionsPage() {
    try {

        const response = await fetch('http://localhost:3000/api/collection', 
        // {cache: 'force-cache', 
        //     next: { revalidate: 3 },
        // }
    );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch collections');
        }
        const { collections } = data;
        return (
            <div className='collections-page-container'>
                <div className='collections-header'>
                    <h1>Collections</h1>
                </div>
                <div className="collections-container">
                    {collections.map((collection: any) => (
                        <div key={collection.id} className="collection-card">

                        <Link  href={`/collection/${collection.slug}`} > 

                            <Image  
                                src={collection.imgspercake}
                                alt={collection.name}
                                width={560} // Double the display size for Retina screens
                                height={600} // Double the display size for Retina screens
                                quality={100} // Ensure maximum quality
                                sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
                                className='collection-img'
                                priority
                            />
                        </Link>
                            
                            <h2 className="collection-name">
                            {collection.name}
                            </h2>

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