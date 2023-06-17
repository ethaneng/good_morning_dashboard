"use client"
import {PropsWithChildren, useContext, useState} from 'react'
import Draggable from 'react-draggable';
import ColorPicker from './ColorPicker';
import { IoEllipsisHorizontal, IoClose } from 'react-icons/io5'
import { DashboardWidget, WidgetsContext } from './Dashboard';

export interface WidgetInterface  {
    uid: string,
    x: number,
    y: number,
    size: 'small' | 'big' | 'tall' | 'wide' | string // where string is a custom tailwind size
    headerColor?: string,
}

const DEFAULT_HEADER_COLOR = 'bg-yellow-400'

export default function Widget({uid, x, y, size, headerColor = DEFAULT_HEADER_COLOR,  children} : PropsWithChildren<WidgetInterface>) {

    const [currentHeaderColor, setCurrentHeaderColor] = useState<string>(headerColor)
    const [showSettings, setShowSettings] = useState<boolean>(false)

    const { widgets, setWidgets } = useContext(WidgetsContext)

    function toggleSettings() {
        setShowSettings(!showSettings)
    }

    function handleDelete(uid: string) {
        setWidgets(widgets.filter((widget: DashboardWidget) => {
            if (widget.id === uid) {
                return false
            }
            else {
                return true
            }
        }))
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

            <div className={`widget-header handle rounded-t border-b border-slate-600 flex justify-between items-center ${true ? currentHeaderColor : ''}`}>
                <button className='cursor-pointer p-1 hover:bg-white hover:bg-opacity-20' onClick={toggleSettings}>
                    <IoEllipsisHorizontal className='opacity-80'/>
                </button>


                <button className='cursor-pointer p-1 hover:bg-white hover:bg-opacity-20' >
                    <IoClose className='opacity-80' onClick={() => handleDelete(uid)}/>
                </button>
            </div>

            <div className='widget-content relative flex flex-grow bg-gradient-to-b from-white to-blue-100'>
                <div className={`settings-overlay flex flex-col gap-2 items-start bg-white p-2 z-20 absolute w-full h-full overflow-y-auto ${showSettings ? 'visible' : 'invisible'}`}>
                    <ColorPicker label={'Header Color:'} color={currentHeaderColor} setColor={setCurrentHeaderColor}/>
                </div>

                <div className='widget-children h-full w-full'>
                    {children}
                </div>
            </div>
        </div>
    </Draggable>
  )
}
