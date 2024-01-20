let calculation = localStorage.getItem('calculation') || '';

function updataCal(value){
    calculation += value;
    displayCal();
    localStorage.setItem('calculation', calculation);
}

function displayCal(){
    document.querySelector('.display').innerHTML = calculation;
}

function clear(){
    calculation = localStorage.removeItem('calcution');
}