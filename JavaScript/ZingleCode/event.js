let discountBut = document.getElementById('discount-but');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = "Have no discount now!!";
}

discountBut.addEventListener('click', showMessage);