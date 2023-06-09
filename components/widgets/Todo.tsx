"use client"

import React, {useState} from 'react'
import Widget from '../Widget'
import { v4 } from 'uuid'

interface Props {
    x: number,
    y: number
}

type Todo = {
    name: string,
    completed: boolean,
    id: string
}

export default function Todo({x, y}: Props) {

    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState<string>("")

    function handleAddTodo() {
        setTodos([...todos, {name: newTodo, completed: false, id: v4() as string}])
        setNewTodo("")
    }

    function handleCheck() {
    
    }

  return (
    <Widget x={x} y={y} size="tall">
        <div className='w-full h-[50px] flex flex-col p-2'>
            <label>New Todo:</label>
            <div className='flex flex-row items-center gap-1'>
                <input className=' bg-white border-2 w-full' value={newTodo} onChange={(e) => (setNewTodo(e.target.value))} />
                <button onClick={handleAddTodo} className='bg-green-400 px-1'>+</button>
            </div>
            {todos.map((todo) => (
                <li key={todo.id} className='list-none flex justify-start items-center gap-1'>
                    <input type='checkbox' checked={todo.completed} />
                    <span className={`${todo.completed ? 'line-through' : ''}`}>{todo.name}</span>
                </li>
            ))}
        </div>
    </Widget>
  )
}
