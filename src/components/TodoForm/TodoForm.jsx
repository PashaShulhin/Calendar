import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "src/Api/todosApi.jsx";
import styles from './TodoForm.module.css';




export default function TodoForm() {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo) => createTodo(newTodo),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(["todos"]);
      const prev = queryClient.getQueryData(["todos"]) || [];

      queryClient.setQueryData(
        ["todos"],
        [...prev, { id: Date.now(), title: newTodo.title, completed: false }]
      );

      return { prev };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData(["todos"], context.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    mutation.mutate({ title: text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button
        className={styles.button}
        type="submit"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Adding..." : "+ Add"}
      </button>
      <div className={styles.myClass}></div>
    </form>
  );
}
