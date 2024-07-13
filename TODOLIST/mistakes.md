// const addBtn = document.querySelector(".add");
// let InputField = document.querySelector("#input-task")
// const taskManager = document.querySelector(".task-manager");

// addBtn.addEventListener('click', () => {
//     if (InputField.value === "") {
//         alert("Please Enter a Task First")
//     } else {
//         const taskbox = document.createElement("div")
//         taskbox.classList.add("task-box")
//         taskManager.appendChild(taskbox)

//         const tasks = document.createElement("li");
//         tasks.textContent = InputField.value
//         taskbox.appendChild(tasks)
//         taskVisibility()
//         InputField.value = ""


//         const deleteTask = document.createElement("i");
//         deleteTask.classList.add("fa-solid fa-trash-can")
//         deleteTask.style.cursor = "pointer";
//         deleteTask.onclick = () => {
//             taskManager.removeChild(tasks);
//         };
//         taskbox.appendChild(deleteTask)

//         const taskCheckBox = document.createElement("input");
//         taskCheckBox.type = "checkbox";
//         taskCheckBox.className = "check-box";
//         taskCheckBox.onchange = () => {
//             if (taskCheckBox.checked) {
//                 newTask.style.textDecoration = "line-through";
//             } else {
//                 newTask.style.textDecoration = "none";
//             }
//             taskbox.appendChild(taskCheckBox)
//         };
//     };

// })

// function taskVisibility () {
//     taskManager.style.visibility = "visible";
// }