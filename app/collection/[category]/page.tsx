// app/collections/[category]/page.tsx
export default async function CategoryPage({ params }: { params: { category: string } }) {
    const response = await fetch(`http://localhost:3000/api/collections/${params.category}`);
    const products = await response.json();

    return (
        <div>
            <h1>{params.category}</h1>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        <a href={`/collections/${params.category}/products/${product.id}`}>
                            {product.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}