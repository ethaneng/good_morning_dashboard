"use client"
import React, {PropsWithChildren} from 'react'
import Draggable from 'react-draggable';

export interface WidgetInterface  {
    x: number,
    y: number,
    size: 'small' | 'big' | 'tall' | 'wide' | string // where string is a custom tailwind size
}

export default function Widget({x, y, size, children} : PropsWithChildren<WidgetInterface>) {

    const style = {left: x, top: y}

    const sizeClasses = 
    size === 'small' ? 'h-[150px] w-[150px] md:h-[200px] md:w-[200px]' : //responsive small component sizes
    size === 'big' ? 'h-[300px] w-[300px] md:h-[400px] md:w-[400px]' : //responsive big component sizes
    size === 'tall' ? 'h-[300px] w-[150px] md:h-[400px] md:w-[200px]' : //responsive tall component sizes
    size === 'wide' ? 'h-[150px] w-[300px] md:h-[200px] md:w-[400px]' : //responsive wide component sizes
    size // custom


  return (
    <Draggable handle='.handle' bounds='parent'>
        <div className={sizeClasses + ' absolute rounded border border-slate-600 flex flex-col'} style={style}>
            <div className='widget-header rounded-t border-b border-slate-600 bg-slate-200 flex justify-end items-center p-1'>
                <label className='handle cursor-pointer'>DRAG</label>
            </div>

            <div className='widget-content flex flex-grow bg-gradient-to-b from-white to-blue-100'>
                {children}
            </div>
        </div>
    </Draggable>
  )
}
