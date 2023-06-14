"use client"

import {useEffect, useState} from 'react'
import Clock from './widgets/Clock'
import QOTD from './widgets/QOTD'
import Todo from './widgets/Todo'
import Menu from './Menu'

type DashboardWidget = {
  id: string,
  x: number,
  y: number,
  type: 'Clock' | 'QOTD' | 'Todo'
}

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
      type: 'QOTD'
    }
  ])

  return (
    <div className='dashboard relative flex-grow'>
        <Menu />
        {widgets.map((widget) => {
          if (widget.type === 'Clock') return <Clock key={widget.id} x={widget.x} y={widget.y} />
          if (widget.type === 'QOTD') return <QOTD key={widget.id} x={widget.x} y={widget.y} />
          if (widget.type === 'Todo') return <Todo key={widget.id} x={widget.x} y={widget.y} />
        })}
    </div>
  )
}

export default Dashboard