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
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
    };
}
