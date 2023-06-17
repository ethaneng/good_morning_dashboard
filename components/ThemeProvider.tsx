"use client"
import {useState, createContext} from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({children}: React.PropsWithChildren) {
    const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <div className={`${darkMode ? 'dark' : ''}`}>
            {children}
        </div>
    </ThemeContext.Provider>
  )
}
