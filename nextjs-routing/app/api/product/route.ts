import { NextRequest } from "next/server";
interface ProductTypes {
    id:number | string,
    title: string,
    price: number
}
export async function GET(request: NextRequest) {
    const products:ProductTypes[] = [
        {
            id: 1,
            title: "Asus Vivobook",
            price: 1800
        },
        {
            id: 2,
            title: "MacBook Pro",
            price: 3800
        },
        {
            id: 3,
            title: "Lenovo Yoga",
            price: 3500
        },
    ]
    return new Response(JSON.stringify(products), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
