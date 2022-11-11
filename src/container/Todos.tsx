import React from "react";
import { useState, useEffect } from "react";
import { Todo } from "../components/Todo";
import { ITodos } from "../interface";

export const Todos: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [status, setStatus] = useState<"all" | "active" | "complete">("all");

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

  // const keyPressHandle = (event:React.KeyboardEvent) => {
  //   console.log("brn")
  //   if(event.key === "Enter"){
  //     console.log("drn")
  //     addTodo()
  //     setText('')
  //   }
  // }

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

  const allStatus = () => {
    setStatus("all");
  };

  const activeStatus = () => {
    setStatus("active");
  };

  const completeStatus = () => {
    setStatus("complete");
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodos[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
            // onKeyPress={keyPressHandle}
          >
            Add
          </button>
        </div>
        <div className="flex  space-x-2 my-10">
          <button
            className="rounded-lg px-2 py-1  hover:bg-gray-500/50"
            onClick={allStatus}
          >
            All
          </button>
          <button
            className="rounded px-2 py-2   hover:bg-gray-500/50"
            onClick={activeStatus}
          >
            Active
          </button>
          <button
            className="rounded px-2 py-1   hover:bg-gray-500/50"
            onClick={completeStatus}
          >
            Complete
          </button>
        </div>
        <div className="lg:w-[50%]  bg-white rounded mx-auto py-5 my-10">
          <div className="bg-white space-y-2 md:mx-auto mx-auto my-4 px-4">
            <h1 className="text-4xl text-center text-red-400 font-bold border-b-2">
              Here is your task!
            </h1>
            {status === "all" &&
              todos.length > 0 &&
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

            {status === "active" &&
              todos.length > 0 &&
              todos
                .filter((elem) => !elem.isCompleted)
                .map((elem) => {
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
            {status === "complete" &&
              todos.length > 0 &&
              todos
                .filter((elem) => elem.isCompleted)
                .map((elem) => {
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
            {todos.length === 0 && (
              <p className="text-center text-2xl">There is no any task!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
