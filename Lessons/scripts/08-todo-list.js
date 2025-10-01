const todoList = [{
  name: 'make money',
  dueDate: '12-12-2025'
}, {
  name: 'new me',
  dueDate: '11-11-2024'
}];
renderTodoList();

function renderTodoList () {
    let todoListHTML = '';


    //this technique is called rendering the html
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    //the below line does the same thing as the lines above
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-btn" >Delete</button>
      `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }

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