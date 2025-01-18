// app/collections/[category]/products/[productId]/page.tsx
export default async function ProductPage({
    params,
}: {
    params: { category: string; productId: string };
}) {
    const response = await fetch(
        `http://localhost:3000/api/collections/${params.category}/products/${params.productId}`
    );
    const product = await response.json();

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}