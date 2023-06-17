import React from 'react'
import DarkModeButton from './DarkModeButton'

function Nav() {
  return (
    <nav className='border-b-2 z-10 mb-1 dark:border-zinc-900 transition-colors'>
        <ul className='max-w-[2000px] mx-auto flex row justify-between p-5 text-xl'>
            <li>
                <h1 className='dark:text-white'>Made by <span className='text-blue-500 font-bold'>Ethan Eng 👋</span></h1>
            </li>
            <li>
              <DarkModeButton />
            </li>
        </ul>
    </nav>
  )
}

export default Nav