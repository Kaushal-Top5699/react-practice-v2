import React from 'react'

export const TodoCard = () => {
    return (
        <div className='bg-gray-100 border-[0.1px] border-gray-200 rounded-md p-4 mt-4'>
            <div>
                <div className='flex items-center space-x-6'>
                    <p className='text-xl font-semibold'>Title</p>
                    <p className='bg-green-300 h-5 w-20 text-xs flex 
                                justify-center items-center text-green-800 rounded-sm
                                border-[0.5px] border-green-800 font-light'>Completed</p>
                </div>
                <p className='text-sm font-light'>Body</p>
            </div>
            <div className='flex justify-end space-x-4'>
                <button className='bg-green-300 w-20 h-7 text-sm text-green-700 
                        border-[1px] border-green-700 rounded-sm hover:bg-green-600 hover:text-green-200'>Edit</button>
                <button className='bg-blue-300 w-28 h-7 text-sm text-blue-700 
                        border-[1px] border-blue-700 rounded-sm hover:bg-blue-600 hover:text-blue-200'>Accomplished</button>
                <button className='bg-red-300 w-20 h-7 text-sm text-red-700 
                        border-[1px] border-red-700 rounded-sm hover:bg-red-600 hover:text-red-200'>Delete</button>
            </div>
        </div>
    )
}
