import React, { useEffect, useState } from 'react'

export const TodoCard = ({ todoInfo, getStatus }) => {

    const [isEditable, setIsEditable] = useState(false)
    const [title, setTitle] = useState(todoInfo.title)

    const handleAccomplished = (id) => {
        getStatus(id)
    }

    const handleEdit = () => {
        setIsEditable(prev => !prev)
    }

    return (
        <div className='bg-gray-100 border-[0.1px] border-gray-200 rounded-md p-4 mt-4'>
            <div>
                <div className='flex items-center space-x-6'>
                    <input className='text-xl font-semibold' readOnly={!isEditable} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    
                    { todoInfo.status === true ? (
                        <p className='bg-green-300 h-5 w-20 text-xs flex 
                                justify-center items-center text-green-800 rounded-sm
                                border-[0.5px] border-green-800 font-light'>Completed</p>
                    ) : ''}
                    
                </div>
                <p className='text-sm font-light'>{todoInfo.body}</p>
            </div>
            <div className='flex justify-end space-x-4'>
                { todoInfo.status === false && (
                    <>
                        <button className='bg-green-300 w-20 h-7 text-sm text-green-700 
                            border-[1px] border-green-700 rounded-sm 
                            hover:bg-green-600 hover:text-green-200'
                            onClick={handleEdit}>Edit</button>
                        <button className='bg-blue-300 w-28 h-7 text-sm text-blue-700 
                                border-[1px] border-blue-700 rounded-sm
                                hover:bg-blue-600 hover:text-blue-200'
                                onClick={() => handleAccomplished(todoInfo.id)}>Accomplished</button>
                        <button className='bg-red-300 w-20 h-7 text-sm text-red-700 
                                border-[1px] border-red-700 rounded-sm hover:bg-red-600 hover:text-red-200'>Delete</button>
                    </>
                ) }
            </div>
        </div>
    )
}
