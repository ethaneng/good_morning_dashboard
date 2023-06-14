import React, { useContext } from 'react'
import { WidgetsContext } from './Dashboard'

export default function Menu() {
    const {widgets, setWidgets} = useContext(WidgetsContext)

    function addWidget(type: string) {
        setWidgets([
            ...widgets,
            {
                id: crypto.randomUUID(),
                x: 250,
                y: 250,
                type: type
            }
        ])
    }
  return (
    <ul className='fixed z-20 bottom-4 right-4 flex flex-col-reverse items-end gap-4 group'>
        <li>
            <button className='rounded outline p-2'>NEW</button>
        </li>
        <li className='hidden group-hover:block'>
            <button onClick={() => addWidget('Clock')} className='rounded outline p-2'>Clock</button>
        </li>
        <li className='hidden group-hover:block'>
            <button onClick={() => addWidget('Todo')} className='rounded outline p-2'>Todo</button>
        </li>
        <li className='hidden group-hover:block'>
            <button onClick={() => addWidget('QOTD')} className='rounded outline p-2'>Quote</button>
        </li>
    </ul>
  )
}
