//function to calculate everything
function calculate(symbol) {
    let result;
    let firstNumber = parseFloat(previousOperand.innerHTML);
    let secondNumber = parseFloat(currentOperand.innerHTML);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return;
    };
    if (symbol == "+") {
        result = firstNumber + secondNumber;
    } else if (symbol == "-") {
        result = firstNumber - secondNumber;
    } else if (symbol == "*") {
        result = firstNumber * secondNumber;
    } else if (symbol == "/") {
        result = firstNumber / secondNumber;
    }
    previousOperand.innerHTML = '';
    currentOperand.innerHTML = result.toString();
}


const numbers = document.querySelectorAll(".number"); //selecting all number buttons
console.log(numbers);

const operators = document.querySelectorAll(".operator"); //selecting all operators
console.log(operators);

const equals = document.getElementById("equals"); //selecting the equals button
console.log(equals);

const clear = document.getElementById("clear"); //selecting the clear button
console.log(clear);

let previousOperand = document.querySelector(".previous-operand"); //selecting the previous operand div
console.log(previousOperand);
let currentOperand = document.querySelector(".current-operand"); //selecting the current operand div
console.log(currentOperand);

const allClear = document.getElementById("all-clear")
console.log(allClear);

let operation; //defining variable for operator

//function to clear all when pressing the AC button
function clearAll() {
    previousOperand.innerHTML = "";
    currentOperand.innerHTML = "";
}

allClear.addEventListener('click', clearAll);

//function to change the current operand when user presses the buttons
function appendCurrentOperand(number) {
    if ((number == ".") && (currentOperand.innerHTML.includes("."))){
        return;
    }
    currentOperand.innerHTML += number;
};

numbers.forEach(button => {
    button.addEventListener('click', function(){
        appendCurrentOperand(button.innerHTML);
    })
    });

//function to choose the operator
function chooseOperation(a) {
    if(currentOperand.innerHTML == ""){
        return;
    }
    operation = a;
    if (previousOperand.innerHTML != ''){
        calculate(operation);
    }
    currentOperand.innerHTML += a;
    previousOperand.innerHTML = currentOperand.innerHTML;
    currentOperand.innerHTML = '';
}

operators.forEach(button => {
    button.addEventListener('click', function(){
        chooseOperation(button.innerHTML);
    })
});

//equals to button and calculation
equals.addEventListener('click', function(){
    calculate(operation);
});

//clear button
clear.addEventListener('click', function(){
    clearOne();
})

function clearOne(){
    currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1);
}