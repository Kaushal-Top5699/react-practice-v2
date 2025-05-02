import React from 'react';
import { SearchPractice } from './components/SearchPractice/SearchPractice'
import { TodoPractice } from './components/TodoPractice/TodoPractice';
import { ChipsInput } from './components/ChipsInput/ChipsInput';
import { LikeButton } from './components/LikeButton/LikeButton';
import { Accordion } from './components/Accordion/Accordion';

function App() {

  return (
    <div className="flex flex-col items-center w-[100vw]">
      <div className="w-[100%] bg-blue-400 flex justify-center items-center h-14">
        <p className="text-2xl font-medium text-white">React Practice</p>
      </div>
      {/* <SearchPractice /> */}
      {/* <TodoPractice /> */}
      {/* <ChipsInput /> */}
      {/* <LikeButton /> */}
      <Accordion />
    </div>
  )
}

export default App
