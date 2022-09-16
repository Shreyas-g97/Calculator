function add(a, b){
    let result = a + b;
    return console.log(result);
}

function subtract(a, b){
    let result = a - b;
    console.log(result);
}

function multiply(a, b){
    let result = a * b;
    console.log(result);
}

function divide(a, b){
    let result = a/b;
    console.log(result);
}

let userInput = "";

function firstValue(a){
    userInput += a;
    console.log(userInput);
}

document.getElementById('1').addEventListener('click', firstValue("1"));
document.getElementById('2').addEventListener('click', firstValue("2"));
