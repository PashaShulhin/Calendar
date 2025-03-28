const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const TODOS_FILE_PATH = path.join(__dirname, 'todos.json');

function readTodos() {
    if (!fs.existsSync(TODOS_FILE_PATH)) {
        return [];
    }
    const data = fs.readFileSync(TODOS_FILE_PATH);
    return JSON.parse(data);
}

function writeTodos(todos) {
    fs.writeFileSync(TODOS_FILE_PATH, JSON.stringify(todos, null, 2));
}

app.get('/todos', (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todos = readTodos();
    const todo = todos.find(item => item.id === id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
});

app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    const todos = readTodos();
    const newTodo = {
        id: Date.now().toString(),
        title,
        description,
        completed: false
    };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
});


app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todos = readTodos();
    const todoIndex = todos.findIndex(item => item.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    const updatedTodo = { ...todos[todoIndex], title, description, completed };
    todos[todoIndex] = updatedTodo;
    writeTodos(todos);
    res.json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todos = readTodos();
    const newTodos = todos.filter(item => item.id !== id);
    if (newTodos.length === todos.length) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    writeTodos(newTodos);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
