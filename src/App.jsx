import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header className="Header">To-Do List</header>
      <TodoForm />
      <h1 className="Tasks">Task List</h1>
      <TodoList />
    </div>
  );
}
