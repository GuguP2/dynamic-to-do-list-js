const { createElement } = require("react");

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask (){
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter a task!");
      
 const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
// Create <li> for the task
    // Add removal behavior
    removeBtn.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Add button to list item, then to the list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  // Add button click event
  addButton.addEventListener('click', addTask);

  // Enter key press event
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
    }
}
})


