// app/collections/page.tsx
export default async function CollectionsPage() {
    const response = await fetch('http://localhost:3000/api/collections');
    const collections = await response.json();

    return (
        <div>
            <h1>Collections</h1>
            <ul>
                {collections.map((collection: any) => (
                    <li key={collection.id}>
                        <a href={`/collections/${collection.id}`}>{collection.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}