const task =document.getElementById('task');
const addtaskbutton=document.getElementById('addtaskbutton');
const taskslist=document.getElementById('taskslist');

function addtask() {
    const taskitem=task.value;
    if (taskitem) {
        const newlistelemnt=document.createElement('li');
        newlistelemnt.innerHTML=`<p>. ${taskitem}</p> <button class="delete-button">Delete</button>`;
        taskslist.appendChild(newlistelemnt);
        task.value='';
        savetolocalstorage();

    }
    
}

function deletetask(event) {
    if (event.target.classList.contains('delete-button')) {
        const taskitem=event.target.parentNode;
        taskslist.removeChild(taskitem);
        savetolocalstorage();
    }
    
}

function savetolocalstorage(){
    const tasks=[];
    const items=taskslist.getElementsByTagName('li');
    for (let index = 0; index < items.length; index++) {
        tasks.push(items[index].innerHTML);    
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadtolocalstorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      for (let index = 0; index < tasks.length; index++) {
        const newlistelemnt = document.createElement('li');
        newlistelemnt.innerHTML = tasks[index];
        taskslist.appendChild(newlistelemnt);
      }
    }
  }

addtaskbutton.addEventListener('click',addtask);
taskslist.addEventListener('click',deletetask);
window.addEventListener('load',loadtolocalstorage);