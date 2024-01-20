let todoList = [];

function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    const date = document.querySelector('.js-date-input').value;

    todoList.push ({
        name,
        date
    });

    document.querySelector('.js-name-input').value = '';
    document.querySelector('.js-date-input').value = '';

    // display
    let todoHTML = '';
    todoList.forEach((todoObj, index) =>{
        const { name , date } = todoObj;
        console.log(name, date);
        todoHTML +=  `
        <div>${name}</div>
        <div>${date}</div>
        <button class="del-button">Delete</button>`;
    });

    document.querySelector('.js-display').innerHTML = todoHTML;

    document.querySelectorAll('.del-button')
    .forEach((delButton, index) => {
        delButton.addEventListener('click', () => {
            
        })
    });

    
}