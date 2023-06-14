"use client"

import React, {useState} from 'react'
import Widget from '../Widget'

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
        setTodos([...todos, {name: newTodo, completed: false, id: crypto.randomUUID()}])
        setNewTodo("")
    }

    function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
        setTodos(todos.map((todo) => {
            if (todo.id === e.target.id) {
                return {...todo, completed: !todo.completed}
            } else {
                return todo
            }
        }))
    }

    function handleDelete(index: number) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            handleAddTodo()
        }
    }

  return (
    <Widget x={x} y={y} size="tall">
        <div className='w-full h-[50px] flex flex-col p-2 gap-2'>
            <div>
                <label>New Todo:</label>
                <div className='flex flex-row items-center gap-1'>
                    <input type='text' className=' bg-white border-2 w-full' value={newTodo} onKeyDown={handleEnter} onChange={(e) => (setNewTodo(e.target.value))} />
                    <button onClick={handleAddTodo} className='bg-green-400 px-1'>+</button>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                {todos.map((todo, index) => (
                    <li key={todo.id} className='list-none flex justify-start items-center gap-1'>
                        <input id={todo.id} onChange={handleCheck} type='checkbox' checked={todo.completed} className='cursor-pointer' />
                        <label htmlFor={todo.id} className={`leading-tight text-sm ${todo.completed ? 'line-through' : ''}`}>{todo.name}</label>
                        <button onClick={() => handleDelete(index)} className='text-red-400'>X</button>
                    </li>
                ))}
            </div>
        </div>
    </Widget>
  )
}
