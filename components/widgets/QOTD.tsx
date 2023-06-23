"use client"

import { useEffect, useState } from "react";
import Widget from "../Widget";

interface Props {
    x: number,
    y: number,
    uid: string
}

type Quote = {
    quote: string,
    author: string,
    category: string
}

type Data = {
    quote?: Quote,
    errorMsg?: string
}

export default function QOTD({x, y, uid} : Props){

    const [data, setData] = useState<Data>({})

    useEffect( () => {
        async function getQuote() {
            const res = await fetch('/api/quote', {cache: 'no-store'})

            if (res.ok) {
                const body = await res.json()
                setData({quote: body})
            } else {
                setData({errorMsg: 'Could not fetch quote'})
            }
        }

        getQuote()
    }, [])

  return (
    <Widget x={x} y={y} size='big' uid={uid}>
        <div className="flex flex-col h-full w-full justify-center items-center p-4">
            <span className="text-center text-xl italic">{`"${data.quote ? data.quote.quote : data.errorMsg}"`}</span>
            <label className="self-end opacity-60">{data.quote && data.quote.author}</label>
        </div>
    </Widget>
  )
}
