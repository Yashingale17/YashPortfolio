
const addBtn = document.querySelector(".add");
const inputField = document.querySelector("#input-task"); // Changed InputField to inputField
const taskManager = document.querySelector(".task-manager");

addBtn.addEventListener('click', () => {
    if (inputField.value === "") {
        alert("Please Enter a Task First");
    } else {
        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box");
        taskManager.appendChild(taskBox);

        const tasks = document.createElement("li");
        tasks.textContent = inputField.value;
        taskBox.appendChild(tasks);
        taskVisibility();
        inputField.value = "";

        const deleteTask = document.createElement("i");
        deleteTask.classList.add("fa-solid", "fa-trash-can"); // Corrected classList syntax   deleteTask.classList.add("fa-solid fa-trash-can")
        deleteTask.style.cursor = "pointer";
        deleteTask.onclick = () => {
            taskManager.removeChild(taskBox); // Remove the taskBox element, not tasks
        };
        taskBox.appendChild(deleteTask);

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
        taskBox.appendChild(taskCheckBox);
    }
});

function taskVisibility() {
    taskManager.style.visibility = "visible";
}
