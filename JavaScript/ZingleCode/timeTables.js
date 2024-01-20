let numberInput = document.getElementById('number-input');
let runBut = document.getElementById('run-but');
let output = document.getElementById('output');

function showTimesTable() {
    let number = Number(numberInput.value);
    let outputHtml = '';
    if (number <= 0){
        output.innerHTML = "Mai bok"
        return;
    }
    for (let i = 1; i <= 12; i++){
        outputHtml += '<p>';
        outputHtml += number + 'x' + i + ' = ' + (number * i) + '</p>';
    }
    output.innerHTML = outputHtml;
}

runBut.addEventListener('click', showTimesTable);