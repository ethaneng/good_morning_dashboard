import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=success`, {
        next: {
            revalidate: 86400 // revalidate request every 24hr
        },
        headers: new Headers({
            'X-Api-Key': process.env.API_KEY as string,
        })
    })

    if (!res.ok) {
        throw new Error("Failed to fetch QOTD")
    }

    const results = await res.json()

    return NextResponse.json(results[0])
}