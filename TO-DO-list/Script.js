// Get references to the input field and task manager container
const taskInput = document.getElementById('input-task');
const taskManager = document.getElementById('task-manager');

// Function to add a new task
function addTask() {
    let task = taskInput.value.trim(); // Trim whitespace from input
    if (task === "") {
        alert("Enter the task");
    } else {
        // Create a new container for the task
        const taskBox = document.createElement("div");
        taskBox.className = "task-box";

        // Create a new <li> element for the task text
        const newTask = document.createElement("li");
        newTask.innerText = task;

        // Create a delete button
        const deleteBtn = document.createElement("i");
        deleteBtn.className = "fa-solid fa-trash-can";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.onclick = () => {
            taskManager.removeChild(taskBox);
            updateLocalStorage(); // Update local storage after deletion
        };

        // Create a checkbox for marking the task as completed
        const taskCheckBox = document.createElement("input");
        taskCheckBox.type = "checkbox";
        taskCheckBox.className = "check-box";
        taskCheckBox.onchange = () => {
            if (taskCheckBox.checked) {
                newTask.style.textDecoration = "line-through";
            } else {
                newTask.style.textDecoration = "none";
            }
            updateLocalStorage(); // Update local storage after changing task status
        };

        // Append the task text and controls to the task box
        taskBox.appendChild(taskCheckBox);
        taskBox.appendChild(newTask);
        taskBox.appendChild(deleteBtn);

        // Append the task box to the task manager container
        taskManager.appendChild(taskBox);

        // Clear the input field after adding the task
        taskInput.value = "";

        // Make the task manager visible
        showTaskManager();

        // Update local storage after adding a new task
        updateLocalStorage();
    }
}

// Function to show the task manager
function showTaskManager() {
    taskManager.style.visibility = 'visible';
}

// Function to update local storage with current tasks
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.task-box').forEach(taskBox => {
        const taskText = taskBox.querySelector('li').innerText;
        const taskCompleted = taskBox.querySelector('.check-box').checked;
        tasks.push({ text: taskText, completed: taskCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            // Create a new container for the task
            const taskBox = document.createElement("div");
            taskBox.className = "task-box";

            // Create a new <li> element for the task text
            const newTask = document.createElement("li");
            newTask.innerText = task.text;

            // Create a delete button
            const deleteBtn = document.createElement("i");
            deleteBtn.className = "fa-solid fa-trash-can";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.onclick = () => {
                taskManager.removeChild(taskBox);
                updateLocalStorage(); // Update local storage after deletion
            };

            // Create a checkbox for marking the task as completed
            const taskCheckBox = document.createElement("input");
            taskCheckBox.type = "checkbox";
            taskCheckBox.className = "check-box";
            taskCheckBox.checked = task.completed;
            taskCheckBox.onchange = () => {
                if (taskCheckBox.checked) {
                    newTask.style.textDecoration = "line-through";
                } else {
                    newTask.style.textDecoration = "none";
                }
                updateLocalStorage(); // Update local storage after changing task status
            };

            // Apply strikethrough style if the task is completed
            if (task.completed) {
                newTask.style.textDecoration = "line-through";
            }

            // Append the task text and controls to the task box
            taskBox.appendChild(taskCheckBox);
            taskBox.appendChild(newTask);
            taskBox.appendChild(deleteBtn);

            // Append the task box to the task manager container
            taskManager.appendChild(taskBox);
        });

        // Make the task manager visible if there are tasks
        if (tasks.length > 0) {
            showTaskManager();
        }
    }
}

// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasksFromLocalStorage();
});
