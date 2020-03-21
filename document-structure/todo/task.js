function addTask(event) 
{   
    event.preventDefault();    
    if (taskInput.value != '')
        {
            taskList.insertAdjacentHTML('beforeEnd', 
                `<div class="task" id ="${count}">
                <div class="task__title">
                ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
                </div>`);
                taskInput.value = '';  
                document.getElementById(`${count}`).querySelector('.task__remove').addEventListener('click',removeTask);
                count++;
        }
}
let taskList = document.getElementById('tasks__list');
let taskInput = document.getElementById('task__input');
let taskButton = document.getElementById('tasks__add');
let taskRemoves = document.getElementsByClassName('task__remove');
let count = 1;
taskButton.addEventListener('click',addTask);

function removeTask (event) {
    event.target.closest('.task').remove();
}
