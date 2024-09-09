window.addEventListener('load', ()=>{
const form = document.querySelector('form');
const input = document.querySelector('#todoInput');
const todoContainer = document.querySelector('#todos');

form.addEventListener('submit', (e)=>{
e.preventDefault();

const data = input.value;

if(!data){
    alert("Kindly input a task");
    return;
}

const singleTodoContainer = document.createElement('div');
singleTodoContainer.classList.add('todo1')

const todoContent = document.createElement('div');
todoContent.classList.add('todo2');

singleTodoContainer.append(todoContent);

const todoInput = document.createElement('input');
todoInput.classList.add('input1');
todoInput.type = 'text';
todoInput.value = data;
todoInput.setAttribute('readonly', 'readonly');

todoContent.append(todoInput);

const actionContainer = document.createElement('div');
actionContainer.classList.add('action');

const editBtn = document.createElement('button');
editBtn.classList.add('edit');
editBtn.innerHTML = 'Edit';


const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete');
deleteBtn.innerHTML = 'Delete';

actionContainer.append(editBtn);
actionContainer.append(deleteBtn);

singleTodoContainer.append(actionContainer);

todoContainer.append(singleTodoContainer);


input.value = '';




editBtn.addEventListener('click', ()=>{
if(editBtn.innerHTML.toLocaleLowerCase() == 'edit'){
todoInput.removeAttribute('readonly', 'readonly');
editBtn.innerHTML = 'save';
}
else if(editBtn.innerHTML == 'save'){
todoInput.setAttribute('readonly', 'readonly');
editBtn.innerHTML = 'edit';
}
});

deleteBtn.addEventListener('click', ()=>{
todoContainer.removeChild(singleTodoContainer);
});




});
});