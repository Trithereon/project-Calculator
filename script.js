let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;
let displayedValue = null;

// Clicking a digit button should store the button.textContent into an operand variable.
// Clicking more than one digit, before clicking on an operator, should append the new digit to the end of firstOperand.
const digitButtons = document.querySelectorAll('button[data-action="digit"]');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
        if (operator === null){
            // If no operator has been clicked yet, build firstOperand.
            firstOperand = firstOperand === null || firstOperand === result ? button.textContent : firstOperand + button.textContent; // If firstOperand is null or , give it the first value, otherwise, concatenate the latest value to the end.
            updateDisplay(firstOperand); // Display the new value.
        }
        else {
            // If an operator has been clicked, build secondOperand using same logic as firstOperand.
            secondOperand = secondOperand === null ? button.textContent : secondOperand + button.textContent; 
            updateDisplay(secondOperand);
        }
    });
});

// CLEAR button resets the stored values to null and resets the display to show 0.
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () =>{
    updateDisplay(null);
    firstOperand = null;
    operator = null;
    secondOperand = null;
    result = null;
})

// Clicking an operator button stores the selected operator value and shows the selected operator in display.
const operatorButtons = document.querySelectorAll('button[data-action="operator"]');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id; // Storing the id instead of the textContent, since the id will work in operate function, but textContent is more readable in display.
        updateDisplay(button.textContent);
    });
});

// Clicking the equals button calls the operate function with stored input values, then resets the stored values to null.
const equalsButton = document.querySelector('button[data-action="equals"]');
equalsButton.addEventListener('click', () => {
    operate(firstOperand, operator, secondOperand);
    firstOperand = result;
    operator = null;
    secondOperand = null;
});

// Clicking the plusMinus button changes the value on display to negative or positive.
const plusMinusButton = document.getElementById('plusMinus');
plusMinusButton.addEventListener('click', () => {
    if (operator === null) {
        firstOperand = -firstOperand;
        updateDisplay(firstOperand);
    }
    else {
        secondOperand = -secondOperand;
        updateDisplay(secondOperand);
    }
});

// Clicking the backspace button removes the last digit entered.
const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', () => {
    if (operator === null) {
        firstOperand = firstOperand.toString().slice(0, -1);
        firstOperand = Number(firstOperand);
        updateDisplay(firstOperand);
    }
    else {
        secondOperand = secondOperand.toString().slice(0, -1);
        secondOperand = Number(secondOperand);
        updateDisplay(secondOperand);
    }
});

// Clicking the dot button inserts a decimal point.
const dotButton = document.getElementById('.');
dotButton.addEventListener('click', () => {
    if (operator === null) {
        if (firstOperand !== null && firstOperand.includes('.') === true) return;
        else if (firstOperand === null){
            firstOperand = '0.';
            updateDisplay(firstOperand);
        }
        else {
            firstOperand += '.';
            updateDisplay(firstOperand);
        }
    }
    else {
        if (secondOperand !== null && secondOperand.includes('.') === true) return;
        else if (secondOperand === null){
            secondOperand = '0.';
            updateDisplay(secondOperand);
        }
        else{
            secondOperand += '.';
            updateDisplay(secondOperand);
        }
    }
});



// Basic math operations
function add(a, b){
    result = a + b;
    return result;
}

function subtract(a, b){
    result = a - b;
    return result;
}

function multiply(a, b){
    result = a * b;
    return result;
}

function divide(a, b){
    if (b === 0) return "ERROR";
    else {
        result = a / b;
        return result;
    }
}

// Master math function, which calls the appropriate math operation, based on the operator selected by the user.
function operate(first, op, second){
    first = Number(first); // Convert string back to number.
    second = Number(second);
    switch(op){
        case '+':
            updateDisplay(add(first, second));
            break;
        case '-':
            updateDisplay(subtract(first, second));
            break;
        case '*':
            updateDisplay(multiply(first, second));
            break;
        case '/':
            updateDisplay(divide(first, second));
    };
}

// Updates the display
function updateDisplay(content){
    const display = document.getElementById('display');
    if (content > 999999999999) display.textContent = 'Too many digits';
    else if (content === null) display.textContent = 0; // After CLEAR is pressed, the default value to be displayed is 0, but the stored value is null.
    else display.textContent = content;
}

// Keyboard input
document.addEventListener("keydown", (event) => {
    const keyList = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
        ".": ".",
        "Enter": "equals",
        "Backspace": "backspace",
        "Delete": "clear"
    };

    if (keyList[event.key]) {
        event.preventDefault(); // Prevent incorrect behaviour of keys such as Enter and Backspace.
        const button = document.getElementById(keyList[event.key]);
        if (button) {
            button.click();
        }

    }
});

