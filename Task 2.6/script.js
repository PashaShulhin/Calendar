document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const addTaskToList = (task, id) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.setAttribute("data-id", id);
    taskList.appendChild(li);

    li.addEventListener("click", () => {
      taskList.removeChild(li);

      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = tasks.filter((t) => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    });
  };

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      addTaskToList(task.text, task.id);
    });
  };

  addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const newId = Date.now();
      tasks.push({ text: task, id: newId });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      addTaskToList(task, newId);
      taskInput.value = "";
    }
  });

  loadTasks();
});
