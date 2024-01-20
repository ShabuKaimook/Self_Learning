document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})


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

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            
        <button " class="delete-button js-delete-button">
            Delete
        </button>
        `;
        todoListHTML += html;
    });

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        });
}

