let firstOperand = null;
let operator = null;
let secondOperand = null;

// Regarding buttons: accesskey is an attribute that could maybe grant keyboard control over the input.

// Clicking a digit button should store the button.textContent into an operand variable.
// Clicking more than one digit, before clicking on an operator, should append the new digit to the end of firstOperand.
const digitButtons = document.querySelectorAll('button[data-action="digit"]');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Clicked button: ${button.id}, Text: ${button.textContent}`); // Debugging
        updateDisplay(button.textContent);
        if (operator === null){
            // If no operator has been clicked yet, build firstOperand.
            firstOperand = firstOperand === null ? button.textContent : firstOperand + button.textContent; // If firstOperand is null, give it the first value, otherwise, concatenate the latest value to the end.
            firstOperand = Number(firstOperand); // Convert string back to number.
            updateDisplay(firstOperand); // Display the new value.
        }
        else {
            // If an operator has been clicked, build secondOperand using same logic as firstOperand.
            secondOperand = secondOperand === null ? button.textContent : secondOperand + button.textContent; 
            secondOperand = Number(secondOperand); 
            updateDisplay(secondOperand);
        }
    });
});

// CLEAR button resets the stored values to null and resets the display to show 0.
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () =>{
    updateDisplay(0);
    firstOperand = null;
    operator = null;
    secondOperand = null;
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
    firstOperand = null;
    operator = null;
    secondOperand = null;
});




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
    if (b === 0) return "ERROR";
    else return a / b;
}

function operate(first, op, second){
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

function updateDisplay(content){
    const display = document.getElementById('display');
    display.textContent = content;
    if (document.getElementById('display').textContent > 999999999999) updateDisplay('Too many digits');
    return content;
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
            console.log(`Triggering button: ${button.id}`); // Debugging key entry.
            button.click();
        }
        
        // if (button) {
        //     console.log(`Triggering button: ${button.id}`); // Debugging key entry.
        //     button.dispatchEvent(new Event("click"));
        // }
    }
});

