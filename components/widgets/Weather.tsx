"use client"

import { useEffect, useState } from "react";
import Widget from "../Widget";

interface Props {
    x: number,
    y: number,
    uid: string
}

type Weather = {
    "wind_speed": number,
    "wind_degrees": number,
    "temp": number,
    "humidity": number,
    "sunset": number,
    "min_temp": number,
    "cloud_pct": number,
    "feels_like": number,
    "sunrise": number,
    "max_temp": number,
    "sample"?: boolean
}

export default function Weather({x, y, uid}: Props) {

    useEffect(() => {
        async function getWeather(lat: number, long: number) { 
            const res = await fetch('/api/weather')
            if (res.ok) {
                const weather = await res.json()
                setWeather({
                    ...weather,
                    sample: false
                })
            } else {
                setWeather({
                    "wind_speed": 5.66,
                    "wind_degrees": 210,
                    "temp": 15,
                    "humidity": 87,
                    "sunset": 1615658463,
                    "min_temp": 7,
                    "cloud_pct": 75,
                    "feels_like": 2,
                    "sunrise": 1615616341,
                    "max_temp": 22,
                    "sample": true
                })
            }

        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // On success
                getWeather(position.coords.latitude, position.coords.longitude)
            },
            (error) => {
                setWeather({
                    "wind_speed": 5.66,
                    "wind_degrees": 210,
                    "temp": 15,
                    "humidity": 87,
                    "sunset": 1615658463,
                    "min_temp": 7,
                    "cloud_pct": 75,
                    "feels_like": 2,
                    "sunrise": 1615616341,
                    "max_temp": 22,
                    "sample": true
                })
            }
        )
    }, [])

    const [weather, setWeather] = useState<Weather>()

  return (
    <Widget x={x} y={y} uid={uid} size='small'>
        { weather &&
            <div className="h-full w-full flex flex-col items-center justify-center gap-1">
                <label className="text-6xl">{weather.temp + '°C'}</label>
                <div className="flex gap-2">
                    <div className="flex flex-col jusitfy-center items-center">
                        <label>{weather.min_temp + '°'}</label>
                        <label className="text-sm">{'Min'}</label>
                    </div>
                    <div className="flex flex-col jusitfy-center items-center">
                        <label>{weather.max_temp + '°'}</label>
                        <label className="text-sm">{'Max'}</label>
                    </div>
                </div>
                {weather.sample && <label className="text-xs opacity-50 text-center">Sample Data - Allow Location for Accurate Data</label>}
            </div>
        }
    </Widget>
  )
}
