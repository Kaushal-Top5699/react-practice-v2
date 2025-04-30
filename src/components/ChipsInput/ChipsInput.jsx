import React, { useEffect, useState } from 'react'


const Chip = ({ chipData, index, getIndex }) => {

    const handleRemove = () => {
        getIndex(index)
    }

    return (
        <div className='flex justify-center items-center h-7 space-x-2 bg-gray-100 rounded-full p-1 hover:bg-gray-200'>
            <p className='pl-2 text-sm'>{chipData}</p>
            <button className='text-red-500 pr-2 hover:text-red-700'
                    onClick={handleRemove}>X</button>
        </div>
    )
}

export const ChipsInput = () => {

    const [chips, setChips] = useState([])
    const [chipVal, setChipVal] = useState("")

    const addChip = (value) => {
        console.log(value)
        setChipVal("")
        return setChips((prev) => 
                [...prev, value]
            )
    }

    const removeChip = (index) => {
        const updatedChips = chips.filter((chip, i) => i !== index)
        return setChips(updatedChips)
    }

    useEffect(() => {
        console.log(chips)
    }, [chips])

    return (
        <div className='flex flex-col justify-center items-center p-2'>
            <h1 className='font-semibold text-xl'>Chips Input</h1>
            <input type='text' placeholder='Type a chip and press tag'
                   className='w-52 h-12 p-2 border-[1px] 
                   border-gray-600 rounded-sm mt-2'
                   value={chipVal} onChange={(e) => setChipVal(e.target.value)}
                   onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        addChip(chipVal)
                    }
                   } } />
            <div className='flex mt-4 justify-center items-center space-x-2'>
                { chips.length > 0 && (
                    chips.map((chip, index) => 
                        <Chip key={index} chipData={chip} index={index} getIndex={removeChip} />
                    )
                ) }
            </div>
        </div>
    )
}
