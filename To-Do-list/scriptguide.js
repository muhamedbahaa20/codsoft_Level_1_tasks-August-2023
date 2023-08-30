// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(newTask);
    taskInput.value = '';

    saveTasksToLocalStorage();
  }
}

// Function to delete a task
function deleteTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
    saveTasksToLocalStorage();
  }
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = [];
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    tasks.push(taskItems[i].innerHTML);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
      const newTask = document.createElement('li');
      newTask.innerHTML = tasks[i];
      taskList.appendChild(newTask);
    }
  }
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

// Load tasks from local storage when the page is loaded
window.addEventListener('load', loadTasksFromLocalStorage);