//CODE EXPLAINED USING COMMENTS... !!

// Load tasks from local storage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => addTaskToList(taskText));
});

document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  // Only adds if there is something in the input field...
  if (taskText !== "") {
    taskInput.focus(); 
    addTaskToList(taskText);
    saveTaskToLocalStorage(taskText);
  }
  taskInput.value = "";
});

// Arrow Function to add a task to the list
const addTaskToList = (taskText) => {
  const taskList = document.getElementById("task-list");

  // Create a new list item
  const taskItem = document.createElement("li");

  // Add task text
  const taskTextNode = document.createElement("span");
  taskTextNode.textContent = taskText;
  taskItem.appendChild(taskTextNode);

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
    removeTaskFromLocalStorage(taskText);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
};

// Arrow Function to save a task to local storage
const saveTaskToLocalStorage = (taskText) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

// Arrow Function to remove a task from local storage
const removeTaskFromLocalStorage = (taskText) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
