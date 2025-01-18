// app/api/collections/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const collections = [
        { id: 'cakes', name: 'Cakes' },
        { id: 'brownies', name: 'Brownies' },
        { id: 'desserts', name: 'Desserts' },
    ];
    return NextResponse.json(collections);
}