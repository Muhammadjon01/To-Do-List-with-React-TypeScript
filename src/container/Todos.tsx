import React from 'react'
import {useState} from 'react'

export const Todos: React.FC = () => {
  const [text, setText] = useState("")
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  }



    return (
        <div className="w-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
          <div className="w-[80%] h-screen bg-white-600  m-auto">
            <div className="lg:w-[50%] ms:m-auto mx-auto">
              <h1 className="text-4xl font-bold py-10 text-center text-white">
                To Do list
              </h1>
            </div>
            <div className="flex justify-between">
              <input
                className="w-full rounded"
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Add your task"
              />
              <button
                className="rounded text-white bg-cyan-500 hover:bg-cyan-600 p-2"
                // onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
          
        </div>
      );
}