import Widget from "../Widget";

interface Props {
    x: number,
    y: number,
}

type Quote = {
    quote: string,
    author: string,
    category: string
}

async function getQuote() : Promise<Quote> {
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
    return results[0]
}

export default async function QOTD({x, y} : Props){

    const quote = await getQuote()

  return (
    <Widget x={x} y={y} size='big'>
        <div className="flex flex-col h-full w-full justify-center items-center p-4">
            <span className="text-center text-xl italic">"{quote.quote}"</span>
            <label className="self-end opacity-60">{quote.author}</label>
        </div>
    </Widget>
  )
}
