import React, { useState } from 'react'

export const LikeButton = () => {

    const [click, setClick] = useState(false)
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    // return (
    //     <div className='flex justify-center items-center p-4'>
    //         <button className={`
    //                 group flex justify-center items-center space-x-2 pl-2 pr-2 text-gray-500 border-[2px] 
    //                 rounded-full ${!click ? 'hover:border-red-500' : ''} ${click ? 'bg-red-500' : 'bg-white'}
    //                 ${ click ? 'border-red-500' : 'border-gray-500'}
    //                 `}
    //                 onClick={handleClick}>
    //             { click ? (
    //                 <span className='text-sm'>🤍</span>
    //             ) : (
    //                 <span className='text-sm'>❤️</span>
    //             ) }
                
    //             <p className={`${click ? 'text-white' : 'group-hover:text-red-500'}`}>Like</p>
    //         </button>
    //     </div>
    // )

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <button
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                backgroundColor: click ? 'red' : 'white',
                border: `2px solid ${click ? 'red' : hovered ? 'red' : 'gray'}`,
                borderRadius: '9999px',
                cursor: 'pointer'
                }}
            >
                <span style={{ fontSize: '0.875rem' }}>{click ? '🤍' : '❤️'}</span>
                <p style={{
                color: click ? 'white' : hovered ? 'red' : 'gray',
                margin: 0
                }}>
                Like
                </p>
            </button>
        </div>
      );
      
}
