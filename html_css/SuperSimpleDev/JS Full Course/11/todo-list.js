const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInput = document.querySelector('.js-date-input');

    const name = inputElement.value;
    const dueDate = dateInput.value;
    
    todoList.push({
        // name: name, 
        // dueDate: dueDate
        // is the same
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-button">
            Delete
        </button>
        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

