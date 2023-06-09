'use client'

import { useState, useEffect } from 'react';
import Widget, { WidgetInterface } from '../Widget';

interface Props {
    x: number,
    y: number
}

function Clock({x, y} : Props){

  const [date, setDate] = useState<Date>();
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Widget x={x} y={y} size='small'>
        <div className='flex justify-center items-center h-full w-full'>
            <span className='font-bold md:text-3xl text-xl'>
                {date ? date.toLocaleTimeString() : "Initialising"}
            </span>
        </div>
    </Widget>
  );
}
export default Clock;