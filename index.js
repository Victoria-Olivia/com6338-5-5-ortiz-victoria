var form = document.getElementById('add-todo');
var list = document.getElementById('todo-list');
var todoInput = document.querySelector('input');
var todos = [];
form.addEventListener('submit', function(event) {
  event.preventDefault();
var newTodoTask = todoInput.value.trim();
    if (newTodoTask.length > 0) {
        addNewTodo(newTodoTask);
         todoInput.value = '';
}
});
function addNewTodo(taskInput) {
var newTodoEntry = document.createElement('li');
var addTodoButton = document.createElement('button');
addTodoButton.textContent = taskInput;

addTodoButton.addEventListener('click', function() {
    if (addTodoButton.style.textDecoration === 'line-through') {
    list.removeChild(newTodoEntry);
}
    else {
    addTodoButton.style.textDecoration = 'line-through';
    }
});
newTodoEntry.appendChild(addTodoButton);
list.appendChild(newTodoEntry);
}