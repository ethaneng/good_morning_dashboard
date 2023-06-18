"use client"

import MenuItem from './MenuItem'
import {MdAdd} from 'react-icons/md'
import {TiWeatherCloudy} from 'react-icons/ti'
import {FiClock} from 'react-icons/fi'
import {RiDoubleQuotesR} from 'react-icons/ri'
import {FaListUl} from 'react-icons/fa'

export default function Menu() {


  return (
    <ul className='fixed z-20 bottom-4 right-4 flex flex-col-reverse items-end gap-4'>

        <li className='flex items-center gap-4 group'>
            <button className='text-4xl rounded-full p-2 flex bg-blue-600 dark:bg-zinc-800' >
                <MdAdd className='fill-white dark:fill-zinc-200' />
            </button>
        </li>

        <MenuItem label='Weather' widget='Weather'>
            <TiWeatherCloudy className='fill-blue-600 dark:fill-zinc-700 group-hover:fill-white dark:group-hover:fill-zinc-200' />
        </MenuItem>
        <MenuItem label='Clock' widget='Clock'>
            <FiClock className='text-blue-600 dark:text-zinc-700 dark:group-hover:fill-zinc-800 group-hover:text-white dark:group-hover:text-zinc-200' />
        </MenuItem>
        <MenuItem label='Daily Quote' widget='QOTD'>
            <RiDoubleQuotesR className='fill-blue-600 dark:fill-zinc-700 group-hover:fill-white dark:group-hover:fill-zinc-200' />
        </MenuItem>
        <MenuItem label='To-Do List' widget='Todo'>
            <FaListUl className='fill-blue-600 dark:fill-zinc-700 scale-75 group-hover:fill-white dark:group-hover:fill-zinc-200' />
        </MenuItem>

    </ul>
  )
}
