"use client"
import { useContext } from 'react'
import {CiLight, CiDark} from 'react-icons/ci'
import { ThemeContext } from './ThemeProvider'

export default function DarkModeButton() {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
        <div className={`flex items-center justify-center rounded-full p-2 gap-2 overflow-clip relative transition-colors ${darkMode ? 'bg-white' : 'bg-blue-600'}`}>
            <div className={`h-[30px] w-[30px] z-10 absolute rounded-full border-2 transition-all ${darkMode ? 'bg-blue-600 border-white translate-x-3' : 'bg-white border-blue-600 -translate-x-3'}`}/>
            <CiDark className='fill-blue-600'/>
            <CiLight className='fill-white' />
        </div>
    </button>
  )
}
