//Defining the UI variables
const newTask = document.querySelector('#task');
const form = document.querySelector('#todo-form');
const clearBtn = document.querySelector('.clear-tasks');
const todoList = document.querySelector('.collection');
const filter = document.querySelector('#filter');




//adding a task (li) to the todo list (ul)

form.addEventListener('submit', addTask);

//defining the addTask function

function addTask (e) {
//prompting the user if no input
if(newTask ===''){
    alert('enter a task to do!')
}
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

//clearing the input
newTask.value='';

e.preventDefault();
}


