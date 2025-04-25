import React, { use } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { User } from './User'

export const SearchPractice = () => {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const [searchVal, setSearchVal] = useState("")

    const fetchAllUSers = async () => {
        try {
            const response = await axios(import.meta.env.VITE_GET_USERS)
            // console.log(response.data)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUSers()
    }, [])

    useEffect(() => {
        if (users.length > 0) {
            // console.log('Filtered Users Array!')
            setFilteredUsers(users)
        }
    }, [users])

    useEffect(() => {
        // console.log('Search: ', searchVal)
        const foundUsers = users.filter((user) => {
            return user.name.toLowerCase().startsWith(searchVal)
        })
        setFilteredUsers(foundUsers)
    }, [searchVal])

    const clearField = () => {
        setSearchVal("")
    }

    return (
        <div className='w-[50%]'>
            <div className='bg-blue-200 p-2 rounded-b-md'>
                <p className='text-lg font-thin'>Search Practice</p>
                <div className='flex bg-white rounded-md h-9 focus-within:outline focus-within:outline-blue-500'>
                    <input type='text' placeholder='Eg. John' 
                            className='w-[95%] rounded-md p-2 focus:outline-none'
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)} />
                    <button className='w-[5%] flex justify-center items-center'
                            onClick={clearField}>
                        <p className='bg-gray-100 h-5 w-5 rounded-full flex justify-center items-center text-xs font-light'>X</p>
                    </button>
                </div>
            </div>
            <div className='pt-2 h-96 overflow-y-auto'>
                { filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <User key={user.id} userData={user} />
                    ))
                ) : '' }
            </div>
        </div>
        
    )
}
