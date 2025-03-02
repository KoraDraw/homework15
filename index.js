const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", createTask);


function colorMe(){
    const toDoAdd = document.getElementById('button-task').style.backgroundColor = 'grey';
}
function colorMeBack(){
    const toDoAdd = document.getElementById('button-task').style.backgroundColor = 'rgb(240, 45, 143)';
}
function createTask(){
    const toDoTasks = document.createElement('li');
    const inputElement = document.querySelector('input');
    paragraph.textContent = input.value;
    const paragraph = document.querySelector('p')
    paragraph.append('Погулять собакой')
    
}
function addTask(){
    createTask.onclick();  
}
function checkTask(){
    toDoAdd.addEventListener('click', createTask);
    toDoTasks.classList.toggle('Стереть');
    
}

