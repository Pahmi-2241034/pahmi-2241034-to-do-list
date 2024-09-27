function addTask() {
    let taskText = document.getElementById('taskInput').value;
    if (taskText.trim()) {
        let li = document.createElement('li');
        li.innerHTML = taskText + ' <button onclick="this.parentElement.remove()">Delete</button>';
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}
