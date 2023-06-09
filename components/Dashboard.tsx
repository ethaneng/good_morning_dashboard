import React from 'react'
import Clock from './widgets/Clock'
import QOTD from './widgets/QOTD'
import Todo from './widgets/Todo'

function Dashboard() {

  return (
    <div className='dashboard relative flex-grow'>
        <Clock x={100} y={50} />
        <QOTD x={200} y={100} />
        <Todo x={300} y={100} />
    </div>
  )
}

export default Dashboard