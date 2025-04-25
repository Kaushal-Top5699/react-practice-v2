import React from 'react'

export const User = ({ userData }) => {
    return (
        <div className='bg-blue-200 p-2 rounded-md mb-2'>
            <p className='text-2xl'>{userData.name}</p>
            <p>{userData.email}</p>
        </div>
    )
}
