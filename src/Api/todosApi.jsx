import axios from "axios";

const BASE_URL = "http://localhost:3000/todos";

export const fetchTodos = () => axios.get(BASE_URL).then((res) => res.data);
export const createTodo = (todo) =>
  axios.post(BASE_URL, todo).then((res) => res.data);
export const deleteTodo = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateTodo = (id, updatedData) =>
  axios.patch(`${BASE_URL}/${id}`, updatedData).then((res) => res.data);
