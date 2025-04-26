import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoPractice = () => {
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
                    <p>Current</p>
                    <p>Completed</p>
                </div>
                <TodoCard />
            </div>
        </div>
    )
}
