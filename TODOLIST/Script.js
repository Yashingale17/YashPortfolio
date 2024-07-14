const addBtn = document.querySelector(".add");
let inputField = document.querySelector("#input-task");
const taskManager = document.querySelector(".task-manager");
const clearAll = document.querySelector(".clear-all");

loadtask();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputField.value === "") {
        alert("Please Enter a Task First");
    } else {
       createElement();
       inputField.value = "";
       saveTask();
    }
});

function createElement () {
    const tasks = document.createElement("li");
    tasks.textContent = inputField.value;
    
    const taskbox = document.createElement("div");
    taskbox.classList.add("task-box");

    const deleteTask = document.createElement("i");
    deleteTask.classList.add("fa-solid", "fa-trash-can");
    deleteTask.style.cursor = "pointer";
    deleteTask.onclick = () => {
        taskManager.removeChild(taskbox);
        saveTask()
    };

    const taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";
    taskCheckBox.className = "check-box";
    taskCheckBox.onchange = () => {
        if (taskCheckBox.checked) {
            tasks.style.textDecoration = "line-through";
        } else {
            tasks.style.textDecoration = "none";
        }
    };

    taskbox.appendChild(taskCheckBox);
    taskbox.appendChild(tasks);
    taskbox.appendChild(deleteTask);
    taskManager.appendChild(taskbox);

    taskVisibility();
}


function taskVisibility() {
    taskManager.style.visibility = "visible";
}


function saveTask () {
    let taskArray = [];
    document.querySelectorAll('.task-box').forEach(item => {
        taskArray.push(item.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray))

}

function loadtask () {
    const task = JSON.parse(localStorage.getItem('tasks')) || [];
    task.forEach(tasks => {
        inputField.value = tasks
        createElement()
        inputField.value = ""
    }
    )
}
clearAll.addEventListener('click', () => {
    if (taskManager.children.length === 0) { // in this we need to add it to the parent element of that task div to remove all the things
        alert("There are no tasks to clear.");
    } else {
        taskManager.innerHTML = ""; // Remove all child elements (tasks)
        saveTask()
    }
});

