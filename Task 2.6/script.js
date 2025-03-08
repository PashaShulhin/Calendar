document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const completedTaskList = document.getElementById("completed-task-list");
  const moveToCompletedButton = document.getElementById("move-to-completed");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

  const addTaskToList = (task, id, listElement, isCompleted = false) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.setAttribute("data-id", id);
    listElement.appendChild(li);

    li.addEventListener("click", () => {
      li.classList.toggle("selected");
    });

    if (isCompleted) {
      li.addEventListener("dblclick", () => {
        completedTaskList.removeChild(li);

        completedTasks = completedTasks.filter((t) => t.id !== id);

        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        updateCompletedTaskList();
      });
    } else {
      li.addEventListener("dblclick", () => {
        taskList.removeChild(li);

        tasks = tasks.filter((t) => t.id !== id);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateTaskList();
      });
    }
  };

  const loadTasks = () => {
    taskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    tasks.forEach((task) => {
      addTaskToList(task.text, task.id, taskList);
    });

    completedTasks.forEach((task) => {
      addTaskToList(task.text, task.id, completedTaskList, true);
    });
  };

  addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      const newId = Date.now();
      tasks.push({ text: task, id: newId });

      localStorage.setItem("tasks", JSON.stringify(tasks));

      addTaskToList(task, newId, taskList);
      taskInput.value = "";
    }
  });

  moveToCompletedButton.addEventListener("click", () => {
    const selectedTasks = document.querySelectorAll(".selected");

    if (selectedTasks.length > 0) {
      selectedTasks.forEach((taskElement) => {
        const taskId = taskElement.getAttribute("data-id");
        const taskIndex = tasks.findIndex((task) => task.id == taskId);

        if (taskIndex !== -1) {
          const [completedTask] = tasks.splice(taskIndex, 1);
          completedTasks.push(completedTask);
        }
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

      updateTaskList();
      updateCompletedTaskList();
    } else {
      alert("Please select at least one task to move.");
    }
  });

  const updateTaskList = () => {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      addTaskToList(task.text, task.id, taskList);
    });
  };

  const updateCompletedTaskList = () => {
    completedTaskList.innerHTML = "";
    completedTasks.forEach((task) => {
      addTaskToList(task.text, task.id, completedTaskList, true);
    });
  };

  loadTasks();
});
