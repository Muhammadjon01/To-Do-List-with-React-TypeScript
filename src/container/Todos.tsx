import React from "react";
import { useState } from "react";
import { Todo } from "../components/Todo";
import { ITodos } from "../interface";

export const Todos: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const addTodo = () => {
    const newTodos: ITodos = {
      id: new Date().getTime(),
      text: text,
      isCompleted: false,
    };
    console.log("Dbhsa");
    setTodos((prev) => [newTodos, ...prev]);
    setText("");
  };

  const completeTodo = (id: number) => {
    let updateTodo = todos.map((elem) => {
      if (elem.id == id) {
        elem.isCompleted = !elem.isCompleted;
        return elem;
      }
      return elem;
    });

    setTodos(updateTodo);
  };

  const deleteTodo = (id: number) => {
    let filterTodos = todos.filter((elem) => elem.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-[60%] h-screen bg-white-600  m-auto">
        <div className="lg:w-[50%] ms:m-auto mx-auto">
          <h1 className="text-4xl font-bold py-10 text-center text-white">
            To Do list
          </h1>
        </div>
        <div className="flex justify-between">
          <input
            className="w-full rounded outline-none px-4"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Add your task"
          />
          <button
            className="rounded text-white bg-cyan-500 hover:bg-cyan-600 p-2"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div className="lg:w-[50%]  bg-white rounded mx-auto py-5 my-10">
          <div className="bg-white space-y-2 md:mx-auto mx-auto my-4 px-4">
            <h1 className="text-4xl text-red-400 font-bold border-b-2">
              Here is your task!
            </h1>
            {todos.length > 0 &&
              todos.map((elem) => {
                return (
                  <Todo
                    key={elem.id}
                    text={elem.text}
                    isCompleted={elem.isCompleted}
                    deleteTodo={() => deleteTodo(elem.id)}
                    completeTodo={() => completeTodo(elem.id)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
