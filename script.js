let currentValue = "";
let operator = null;
let previousValue = "";
const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

function press(num) {
    currentValue += num;
    updateDisplay(currentValue);
}

function setOperator(op) {
    if (currentValue === "") return;

    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    if (previousValue === "" || currentValue === "" || operator === null) return;

    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Erro"; break;
    }

    const operationText = `${num1} ${operator} ${num2} = ${result}`;
    addToHistory(operationText);

    updateDisplay(result);
    currentValue = result.toString();
    previousValue = "";
    operator = null;
}

function clearAll() {   // C
    currentValue = "";
    previousValue = "";
    operator = null;
    updateDisplay("0");
}

function clearEntry() {  // CE
    currentValue = "";
    updateDisplay("0");
}

function deleteLast() {  // DEL
    currentValue = currentValue.slice(0, -1);
    updateDisplay(currentValue || "0");
}

function updateDisplay(value) {
    display.textContent = value;
}

function addToHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
}
