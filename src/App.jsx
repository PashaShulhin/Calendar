import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
