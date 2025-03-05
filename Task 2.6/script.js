document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const addTaskToList = (task, id) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.setAttribute("data-id", id);
    taskList.appendChild(li);

    li.addEventListener("click", () => {
      taskList.removeChild(li);

      tasks = tasks.filter((t) => t.id !== id);

      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  };

  const loadTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      addTaskToList(task.text, task.id);
    });
  };

  addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      const newId = Date.now();
      tasks.push({ text: task, id: newId });

      localStorage.setItem("tasks", JSON.stringify(tasks));

      addTaskToList(task, newId);
      taskInput.value = "";
    }
  });

  loadTasks();
});
