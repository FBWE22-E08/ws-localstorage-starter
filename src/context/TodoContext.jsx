import { createContext, useEffect, useState } from "react"
//1. create a context using the createContext function
export const TodoContext = createContext({});


//2. provider component => responsible for providing data to its children. 
//children are destructured from the props and placed inside Context.Provider.
export default function TodoProvider({children}) {
    //const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todoItem) => {
        const newId = new Date().valueOf();
        todoItem.id = newId;

        setTodos(prevItems => [...prevItems, todoItem]);
    }

    const removeTodo = (todoId) => {
        setTodos(prevItems => prevItems.filter(item => item.id !== todoId))
    }

    const changeStatusTodo = (todoId) => {
        const updatedItems = todos.map(todo => {
            if(todo.id === todoId){
                return {...todo, done:!todo.done}
            }
            return todo;
        });

        setTodos(updatedItems);
    }

  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo, changeStatusTodo}} >
        {children}
    </TodoContext.Provider>
  )
}
