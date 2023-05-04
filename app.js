let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

// Add task
function addTask() {
  if (taskInput.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.className = "task-item";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task";
    let taskText = document.createElement("input");
    taskText.type = "text";
    taskText.value = taskInput.value;
    taskText.readOnly = true;
    taskText.addEventListener("dblclick", function () {
      this.readOnly = false;
    });
    taskText.addEventListener("blur", function () {
      this.readOnly = true;
    });
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", function () {
      taskText.readOnly = false;
      taskText.focus();
    });
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    checkbox.addEventListener("click", function () {
      if (this.checked) {
        taskText.style.backgroundColor = "green";
      } else {
        taskText.style.backgroundColor = "";
      }
    });
    li.appendChild(taskText);
    li.appendChild(checkbox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

