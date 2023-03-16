import logo from './logo.svg';
import './App.css';
import TodoProvider from './context/TodoContext';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
    <TodoProvider>
      <div className="App">
        <h1>New Todo</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
    </div>
  );
}

export default App;
