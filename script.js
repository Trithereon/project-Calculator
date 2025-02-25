// Gets the value data-action, so it can be used as input for a function. e.g. clicking "one" should send 1 to the display, etc.
// const action = button.getAttribute('data-action'); 

let firstOperand = 0;
let operator = '';
let secondOperand = 0;



function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(first, op, second){
    switch(op){
        case '+':
            return updateDisplay(add(first, second));
        case '-':
            return updateDisplay(subtract(first, second));
        case '*':
            return updateDisplay(multiply(first, second));
        case '/':
            return updateDisplay(divide(first, second));
    };
}

function updateDisplay(content){
    const display = document.getElementById("display");
    display.textContent = content;
}
