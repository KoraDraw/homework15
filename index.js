function buttonAdd(){
    const toDoAdd = document.querySelector('.todo-add');
    toDoAdd.onclick();  
}
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
function checkTask(){
    toDoAdd.addEventListener('click', buttonAdd);
    toDoTasks.classList.toggle('Стереть');
    
}

