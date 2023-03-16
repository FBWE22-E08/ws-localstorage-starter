import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import Todo from "../Todo/Todo";


export default function TodoList() {
  const {todos, removeTodo, changeStatusTodo} = useContext(TodoContext);


  const deleteTodoItem = (item)=> {
    //delete 
    console.log("Delete this item", item);
    removeTodo(item.id);
  
  }

  const finishTodoItem = (item) => {

    changeStatusTodo(item.id)
  }

  return (
    <>
    <h1>Todo List</h1>
    <div className='todo-container'>
      {todos.map((item) => <Todo key={item.id} item={item} onDeleteClicked={deleteTodoItem}
          onFinishClicked={finishTodoItem}
          /> )}
    </div>
    </>
  )
}
