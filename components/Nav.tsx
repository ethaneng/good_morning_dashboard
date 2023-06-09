import React from 'react'

function Nav() {
  return (
    <nav className='border-b-2 z-10 mb-1'>
        <ul className='max-w-[2000px] mx-auto flex row justify-between p-5 text-xl'>
            <li>
                <h1>Good Morning <span className='text-blue-500 font-bold'>Ethan!</span></h1>
            </li>
            <li>
                <h1>Login</h1>
            </li>
        </ul>
    </nav>
  )
}

export default Nav