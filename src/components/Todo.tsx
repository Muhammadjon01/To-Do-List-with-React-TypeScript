import React from "react";
import { ITodos } from "../interface";
import {AiFillDelete} from "react-icons/ai"
import {IoCheckmarkDoneCircle} from "react-icons/io5"

// type TodoProps = {
//     todos: ITodos[];
//     deleteTodo:(id: number) => void;
// }

export const Todo: React.FC<{
  text: string;
  isCompleted: boolean;
  deleteTodo: any;
  completeTodo: any;
}> = ({ text, isCompleted, deleteTodo, completeTodo }): JSX.Element => {
    
  return (
    <div className="w-full flex flex-col rounded">
      <div className="w-full text-start flex flex-wrap justify-between border-b-2">
        <ul className="pt-4">
          <li style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {text}
          </li>
        </ul>
        <div className="space-x-2 mt-4 items-end text-white">
          <button className="text-green-500" onClick={completeTodo}><IoCheckmarkDoneCircle size={30}/></button>
          <button className="text-red-400" onClick={deleteTodo}><AiFillDelete size={30} /></button>
        </div>
      </div>
    </div>
  );
};
