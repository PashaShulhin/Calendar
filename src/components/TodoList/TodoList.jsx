import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, deleteTodo } from "src/Api/todosApi.jsx";
import styles from "./TodoList.module.css";
import Vector from "src/Images/Vector.png";

<div className={styles.myClass}></div>;

export default function TodoList() {
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries(["todos"]);
      const prev = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(
        ["todos"],
        prev.filter((todo) => todo.id !== id)
      );
      return { prev };
    },
    onError: (_err, _id, context) => {
      queryClient.setQueryData(["todos"], context.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading todos</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li className={styles.Li} key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <button
            className={styles.List}
            onClick={() => mutation.mutate(todo.id)}
          >
            <img src={Vector} alt="Delete" />
          </button>
        </li>
      ))}
    </ul>
  );
}
