import React from 'react';
import { SearchPractice } from './components/SearchPractice/SearchPractice'

function App() {

  return (
    <div className="flex flex-col items-center w-[100vw]">
      <div className="w-[100%] bg-blue-400 flex justify-center items-center h-14">
        <p className="text-2xl font-medium text-white">React Practice</p>
      </div>
      <SearchPractice />
    </div>
  )
}

export default App
