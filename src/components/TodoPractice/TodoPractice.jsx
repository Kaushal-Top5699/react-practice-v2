import React, { useState } from 'react'
import { TodoCard } from './TodoCard'
import { todoData } from './data'
import { completedData } from './data'

export const TodoPractice = () => {

    const [todos, setTodos] = useState(todoData)
    const [completedTodos, setCompletedTodos] = useState([])

    const [status, setStatus] = useState(false)
    
    const [showCurrent, setShowCurrent] = useState(true)
    const [showCompleted, setShowCompleted] = useState(false)

    const getStatus = (id) => {
        const updatedTodo = todos.map((todo) => {
            if (todo.id === id) {
                const updatedTodo = { ...todo, status: true };
                setCompletedTodos(prev => [...prev, updatedTodo]);
                return updatedTodo
            }
            return todo
        })
        setTodos(updatedTodo)
    }

    const changeFlag = (innerValue) => {
        if (innerValue === "Current") {
            setShowCurrent(true)
            setShowCompleted(false)
        } else {
            setShowCurrent(false)
            setShowCompleted(true) 
        }
    }

    return (
        <div className='w-[50%] p-2'>
            <div>
                <p className='text-2xl font-light underline'>Todo Practice</p>
                <div className='flex flex-col mt-5'>
                    <input type='text' placeholder='Tite'
                            className='w-[100%] h-10 border-[1px] border-blue-400 rounded-md p-2' />
                    <textarea placeholder='Your todo..'
                            className='w-[100%] h-24 mt-2 rounded-md border-[1px] border-blue-400 p-2 resize-none'></textarea>
                    <div className='w-[100%] mt-4'>
                        <button className='w-40 h-9 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Add</button>
                    </div>
                </div>
            </div>
            
            <div className='mt-10 h-96 w-[100%]'>
                <p className='text-2xl underline font-light'>Your Todos</p>
                <div className='mt-5 flex w-[100%] items-center space-x-10 border-b-[1px] border-gray-200'>
                    <p onClick={(e) => changeFlag(e.target.innerText)}>Current</p>
                    <p onClick={(e) => changeFlag(e.target.innerText)}>Completed</p>
                </div>
                <div className='h-96 overflow-y-auto'>
                { showCurrent ? todos.map((todo) => {
                    if (todo.status === false) {
                        return <TodoCard key={todo.id} todoInfo={todo} getStatus={getStatus} />
                    }
                    }                    
                ) : 
                    completedTodos.map((todo) => 
                        <TodoCard key={todo.id} todoInfo={todo} />
                    )
                }
                </div>
            </div>
        </div>
    )
}
