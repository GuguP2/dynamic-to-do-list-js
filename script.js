document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask (){
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter a task!");
    }
 const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('task-item');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = () => {
      taskList.removeChild(listItem);
    };
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    taskInput.value = "";
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

    }

    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
    document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});
}
})



