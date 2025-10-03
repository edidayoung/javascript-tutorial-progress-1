const todoList = [{
  name: 'make money',
  dueDate: '12-12-2025'
}, {
  name: 'new me',
  dueDate: '11-11-2024'
}];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-btn js-delete-btn" >Delete</button>
      `;
    todoListHTML += html;    
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn')
  .forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', () => {
    todoList.splice(index, 1);
    renderTodoList();      
    });
  });

  
}

document.body.addEventListener('keydown', event => {
  if(event.key === 'Enter') {
    addTodo();
  }
});
document.querySelector('.js-add-btn').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const gottenInput = document.querySelector('.js-name-input');
  const name = gottenInput.value;

  const dateInputEle = document.querySelector('.js-date-input');
  const dueDate = dateInputEle.value;

  todoList.push({
    name,
    dueDate
    });

  gottenInput.value = '';
  renderTodoList();
}