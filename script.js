// Gets the value data-action, so it can be used as input for a function. e.g. clicking "one" should send 1 to the display, etc.
// const action = button.getAttribute('data-action'); 

let firstOperand = 0;
let operator = '';
let secondOperand = 0;
const maxDisplay = 12;



// Clicking a digit button should store the button.textContent into an operand variable.
const digitButton = document.querySelectorAll('button[data-action="digit"]');
digitButton.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
        console.log(button.textContent);
    });
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () =>{
    updateDisplay(0);
})


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
    const display = document.getElementById('display');
    display.textContent = content;
    if (document.getElementById('display').textContent > 999999999999) updateDisplay('Too many digits');
    return content;
}


