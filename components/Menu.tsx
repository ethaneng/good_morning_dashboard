import React from 'react'

export default function Menu() {
  return (
    <ul className='fixed z-20 bottom-4 right-4 flex flex-col-reverse items-center gap-4 group'>
        <li className=''>
            <button className='rounded outline p-2'>NEW</button>
        </li>
        <li className='hidden group-hover:'>
            <button className='rounded outline p-2'>1</button>
        </li>
        <li className='hidden group-hover:visible'>
            <button className='rounded outline p-2'>2</button>
        </li>
        <li className='hidden group-hover:visible'>
            <button className='rounded outline p-2'>3</button>
        </li>
    </ul>
  )
}
