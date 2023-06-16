"use client"

import {createContext, useState} from 'react'
import Clock from './widgets/Clock'
import QOTD from './widgets/QOTD'
import Todo from './widgets/Todo'
import Menu from './Menu'
import Weather from './widgets/Weather'

export type DashboardWidget = {
  id: string,
  x: number,
  y: number,
  type: 'Clock' | 'QOTD' | 'Todo' | 'Weather'
}

export const WidgetsContext = createContext<any>(null)

function Dashboard() {

  const [widgets, setWidgets] = useState<DashboardWidget[]>([
    {
      id: crypto.randomUUID(),
      x: 100,
      y: 50,
      type: 'Clock'
    },
    {
      id: crypto.randomUUID(),
      x: 300,
      y: 50,
      type: 'Weather'
    }
  ])

  return (
    <WidgetsContext.Provider value={{widgets, setWidgets}}>
      <div className='dashboard relative flex-grow'>
          <Menu />
          {widgets.map((widget) => {
            if (widget.type === 'Clock') return <Clock key={widget.id} x={widget.x} y={widget.y} uid={widget.id}/>
            if (widget.type === 'QOTD') return <QOTD key={widget.id} x={widget.x} y={widget.y} uid={widget.id}/>
            if (widget.type === 'Todo') return <Todo key={widget.id} x={widget.x} y={widget.y} uid={widget.id}/>
            if (widget.type === 'Weather') return <Weather key={widget.id} x={widget.x} y={widget.y} uid={widget.id}/>
          })}
      </div>
    </WidgetsContext.Provider>
  )
}

export default Dashboard