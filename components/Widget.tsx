"use client"
import {PropsWithChildren, useState} from 'react'
import Draggable from 'react-draggable';
import ColorPicker from './ColorPicker';

export interface WidgetInterface  {
    x: number,
    y: number,
    size: 'small' | 'big' | 'tall' | 'wide' | string // where string is a custom tailwind size
}

interface WidgetSettings {
    headerColor: string,
    bgColor: string,
    textColor: string
}

export default function Widget({x, y, size, children} : PropsWithChildren<WidgetInterface>) {

    const [settings, setSettings] = useState<WidgetSettings>({
        headerColor: '#ffffff',
        bgColor: '#ffffff',
        textColor: '#dddddd'
    })

    const [showSettings, setShowSettings] = useState<boolean>(true)

    function toggleSettings() {
        setShowSettings(!showSettings)
    }

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

            <div className='widget-header rounded-t border-b border-slate-600 bg-slate-200 flex justify-between items-center p-1'>
                <label className='cursor-pointer' onClick={toggleSettings}>SETTINGS</label>
                <label className='handle cursor-pointer'>DRAG</label>
            </div>

            <div className='widget-content relative flex flex-grow bg-gradient-to-b from-white to-blue-100'>
                <div className={`settings-overlay flex flex-col items-start p-2 z-20 absolute w-full h-full bg-pink-200 ${showSettings ? 'visible' : 'invisible'}`}>
                    <ColorPicker />
                </div>

                <div className='widget-children h-full w-full'>
                    {children}
                </div>
            </div>
        </div>
    </Draggable>
  )
}
