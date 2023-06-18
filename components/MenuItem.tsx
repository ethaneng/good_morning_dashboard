"use client"
import { useContext } from 'react'
import { WidgetsContext } from './Dashboard'

type Props = {
    label: string,
    widget: string

}

export default function MenuItem({label, widget, children}: React.PropsWithChildren<Props>) {
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
    <li className='flex items-center gap-4 group'>
        <label htmlFor={widget + 'button'} className='relative cursor-pointer transition-all translate-x-4 opacity-0 dark:text-white group-hover:translate-x-0 group-hover:opacity-100'>{label}</label>
        <button id={widget + 'button'} className='text-4xl rounded-full p-2 flex group-hover:bg-blue-600 dark:group-hover:bg-zinc-800' onClick={() => addWidget(widget)}>
            {children}
        </button>
    </li>
  )
}
