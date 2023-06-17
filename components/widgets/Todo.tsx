"use client"

import React, {useState} from 'react'
import Widget from '../Widget'
import {AiFillPlusSquare} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'

interface Props {
    x: number,
    y: number,
    uid: string
}

type Todo = {
    name: string,
    completed: boolean,
    id: string
}

export default function Todo({x, y, uid}: Props) {

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
    <Widget x={x} y={y} size="tall" uid={uid}>
        <div className='w-full h-[50px] flex flex-col p-2 gap-2'>
            <div>
                <label>New Todo:</label>
                <div className='flex flex-row items-center gap-2'>
                    <input type='text' className=' bg-white border-2 dark:bg-zinc-900 dark:border-zinc-950 w-full' value={newTodo} onKeyDown={handleEnter} onChange={(e) => (setNewTodo(e.target.value))} />
                    <button onClick={handleAddTodo} >
                        <AiFillPlusSquare className='h-[22px] w-[22px] fill-green-400 dark:fill-gray-400'/>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                {todos.map((todo, index) => (
                    <li key={todo.id} className='list-none flex justify-start items-center gap-1'>
                        <input id={todo.id} onChange={handleCheck} type='checkbox' checked={todo.completed} className='cursor-pointer' />
                        <label htmlFor={todo.id} className={`leading-tight text-sm ${todo.completed ? 'line-through' : ''}`}>{todo.name}</label>
                        <button onClick={() => handleDelete(index)}>
                            <TiDelete className='fill-red-400' />
                        </button>
                    </li>
                ))}
            </div>
        </div>
    </Widget>
  )
}
