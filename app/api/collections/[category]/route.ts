// app/api/collections/[category]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { category: string } }) {
    const { category } = params;
    const products = [
        { id: 'curly-whirly-cake', name: 'Curly Whirly Cake' },
        { id: 'chocolate-cake', name: 'Chocolate Cake' },
    ];
    return NextResponse.json(products);
}