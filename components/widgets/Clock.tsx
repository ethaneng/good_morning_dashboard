'use client'

import { useState, useEffect } from 'react';
import Widget from '../Widget';

interface Props {
    x: number,
    y: number,
    uid: string
}

function Clock({x, y, uid} : Props){

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
    <Widget x={x} y={y} size='small' uid={uid}>
        <div className='flex justify-center items-center h-full w-full'>
            <span className='font-bold md:text-3xl text-xl'>
                {date ? date.toLocaleTimeString() : "Initialising"}
            </span>
        </div>
    </Widget>
  );
}
export default Clock;