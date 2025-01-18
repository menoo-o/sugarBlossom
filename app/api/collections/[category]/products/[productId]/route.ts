// app/api/collections/[category]/products/[productId]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { category: string; productId: string } }
) {
    const { category, productId } = params;
    const product = {
        id: productId,
        name: 'Curly Whirly Cake',
        description: 'A delicious curly cake with white frosting.',
        price: 25.99,
    };
    return NextResponse.json(product);
}