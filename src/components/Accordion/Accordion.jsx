import React, { useState } from 'react'
import { items } from './items'
import downArrow from '../../assets/down-arrow.png'
import upArrow from '../../assets/up-arrow.png'

export const Accordion = () => {

    const [activeID, setActiveID] = useState(null)

    const showDropDown = (id) => {
        if (activeID === id) {
            setActiveID(null)
        } else {
            setActiveID(id)
        } 
    }

    return (
        <div className='flex flex-col justify-center p-2'>
            { items.map((item, index) => 
                <div key={index}>
                    <div className='cell bg-gray-100 w-96 h-14 border-[1px] border-gray-400 rounded-md
                                    flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer'
                         onClick={() => showDropDown(index)}>
                        <p className='text-lg font-semibold'>{item.title}</p>
                        <img className='w-4 h-4' src={downArrow} alt='drop-arrow'/>
                    </div>
                    { activeID === index ? (
                        <div className='drop w-96 h-14 bg-white border-[0.5px]
                                border-gray-300 flex items-center p-2'>
                        <p>{item.content}</p>
                    </div>
                    ) : '' }
                </div>
            ) }
        </div>
    )
}
