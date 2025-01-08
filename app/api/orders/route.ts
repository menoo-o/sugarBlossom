import { NextResponse } from "next/server";
import { createAdminClient } from "@/appwrite/config";

export async function GET(request: Request) {
   const {databases} = await createAdminClient();
   const {documents: myDocs, total } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ORDERS!
   )
   
return NextResponse.json({myDocs,total})
}
