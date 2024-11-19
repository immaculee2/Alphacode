// script.js

let currentInput = '';
let previousInput = '';
let operation = null;

// Update the display
function updateDisplay() {
    const resultDisplay = document.getElementById('result');
    resultDisplay.value = currentInput || '0';
}

// Append number to the current input
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

// Choose an operation
function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Perform computation
function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}