
const btn = document.getElementById('addTask')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

btn.addEventListener('click', () => {
    const taskName = taskInput.value;

    const listItem = document.createElement('ol');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskName;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    })

    taskList.appendChild(listItem);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    taskInput.value = "";
})