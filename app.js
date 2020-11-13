//Defining the UI variables
const newTask = document.querySelector('#task');
const form = document.querySelector('#todo-form');
const clearBtn = document.querySelector('.clear-tasks');
const todoList = document.querySelector('.collection');
const filter = document.querySelector('#filter');


loadEventListeners();

function loadEventListeners(){

        //adding a task (li) to the todo list (ul)
form.addEventListener('submit', addTask);

        //adding a remove todo from the todo list
todoList.addEventListener('click', removeTask);

        //adding the clearBtn function
clearBtn.addEventListener('click', clearTasks);

        //adding the filter function
filter.addEventListener('keyup', filterTasks);
}
        
        //DOM loading event listener
document.addEventListener('DOMContentLoaded', getTasks);

//defining the addTask function
function addTask (e) {
        //prompting the user if no input
if(newTask.value ===''){
    alert('enter a task to do!')
} else{
        //creating and styling an li
const li = document.createElement('li');
li.className = 'collection-item';

        //creating and appending the textNode to the li
li.appendChild(document.createTextNode(newTask.value));

        //creating a new link element,adding a class, and icon to the li
const link = document.createElement('a');
link.className = ('delete-item secondary-content');
link.innerHTML = ('<i class="fa fa-remove"></i>');

        //appending the link to the li
li.appendChild(link);

        //appending the li to the ul
todoList.appendChild(li);

        //adding to Local Storage
storeTaskInLocalStorage(newTask.value);        

        //clearing the input
newTask.value='';
}

e.preventDefault();
}


//defining a function to store task in local storage
function storeTaskInLocalStorage (task){
        let tasks;
        if (localStorage.getItem('tasks') === null){
                tasks =[];
        } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
}

//defining the removeTask function
function removeTask (e){
        if (confirm('Deleting the task?')){
    if (e.target.parentElement.className='delete-item'){
            e.target.parentElement.parentElement.remove();
            removeFromLocalStorage (e.target.parentElement.parentElement);
    }
}
}

//defining the clearTasks function
function clearTasks (){
        if(confirm('Are you sure you want to clear the list?')){
        while(todoList.firstChild){
                todoList.firstChild.remove('firstChild');
                localStorage.clear();
        }
}
}

//defining the filterTasks function
function filterTasks(e){
        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(
                (task) => {
                        const item = task.firstChild.textContent;
                        if (item.toLowerCase().indexOf(text) !== -1){
                                task.style.display = 'block';
                        } else{
                                task.style.display = 'none';
                        }
                }
        )
}

//defining the getTasks function
function getTasks () {
        let tasks;
        if (localStorage.getItem('tasks') === null){
                tasks =[];
        } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task){
                const li = document.createElement('li');
li.className = 'collection-item';

        //creating and appending the textNode to the li
li.appendChild(document.createTextNode(task));

        //creating a new link element,adding a class, and icon to the li
const link = document.createElement('a');
link.className = ('delete-item secondary-content');
link.innerHTML = ('<i class="fa fa-remove"></i>');

        //appending the link to the li
li.appendChild(link);

        //appending the li to the ul
todoList.appendChild(li);
        })
}

//defining the function that removes the task from local storage
function removeFromLocalStorage(taskItem){
        let tasks;
        if (localStorage.getItem('tasks') === null){
                tasks =[];
        } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task,index){
                if (taskItem.textContent === task){
                        tasks.splice(index, 1);
                }
                localStorage.setItem('tasks', JSON.stringify(tasks));
        })
}