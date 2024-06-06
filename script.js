let displayValue = "";

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    if (displayValue === "") {
        document.getElementById("display").innerHTML = "0";
    } else {
        document.getElementById("display").innerHTML = displayValue;
    }
}

function InvertSign() {
    if (displayValue !== "") {
        if (displayValue.charAt(0) === "-") {
            displayValue = displayValue.slice(1);
        } else {
            displayValue = `-${displayValue}`;
        }
        updateDisplay();
    }
}

function OperAppend(operator) {
    if (displayValue !== "" && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        displayValue += operator;
        updateDisplay();
    }
}

function AppendVal(num) {
    displayValue += num;
    updateDisplay();
}

function percentage() {
    if (displayValue !== "") {
        try {
            const num = parseFloat(displayValue);
            const percent = num / 100;
            displayValue = percent.toString();
            updateDisplay();
        } catch (error) {
            displayValue = "Error";
            updateDisplay();
        }
    }
}

function calculateExpression(expression) {
    let operator;
    let operands;

    if (expression.includes('+')) {
        operator = '+';
    } else if (expression.includes('*')) {
        operator = '*';
    } else if (expression.includes('/')) {
        operator = '/';
    } else if (expression.lastIndexOf('-') > 0) { 
        operator = '-';
    } else if (expression.indexOf('-') === 0 && expression.slice(1).includes('-')) {
        operator = '-';
        expression = expression.slice(1); 
    } else {
        return "Error";
    }

    operands = expression.split(operator);
    
    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);

    if (operator === '-' && expression[0] === '-') {
        operand1 = -operand1;
    }

    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return "Error";
    }
}

function calculate() {
    if (displayValue !== "" && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        try {
            const result = calculateExpression(displayValue);
            console.log(`${displayValue} = ${result}`);
            displayValue = result.toString();
            updateDisplay();
        } catch (error) {
            displayValue = "Error";
            updateDisplay();
        }
    }
}
