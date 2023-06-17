import { NextResponse } from "next/server";

export async function GET(req: Request) {

    console.log(req)

    const { searchParams } = new URL(req.url)
    const lat = searchParams.get('lat')
    const long = searchParams.get('long')

    const res = await fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${long}`, {
        next: {
            revalidate: 3600 // revalidate request every 1hr
        },
        headers: new Headers({
            'X-Api-Key': process.env.API_KEY as string,
        })
    })

    if (!res.ok) {
        throw new Error("Failed to fetch Weather")
    }

    const results = await res.json()

    return NextResponse.json(results)
}