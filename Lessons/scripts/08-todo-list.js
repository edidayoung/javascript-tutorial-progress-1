const todoList = [];
renderTodoList();

function renderTodoList () {
    let todoListHTML = '';


    //this technique is called rendering the html
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  }

function addTodo() {
  const gottenInput = document.querySelector('.js-name-input');
  const name = gottenInput.value;

  
  todoList.push(name);
  console.log(todoList);

  gottenInput.value = '';

  renderTodoList();
}