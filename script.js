const numbersBtn = document.querySelectorAll("[data-number]");
const operationsBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

let currentOperator = undefined;

numbersBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if(currentOperand.innerText === "0") currentOperand.innerText = "";
        if(btn.innerText === "." && currentOperand.innerText.includes(".")) return;
        currentOperand.innerText += btn.innerText;
    });
});

allClearBtn.addEventListener('click', () => {
    currentOperand.innerText = "0";
    previousOperand.innerText = "";
    currentOperator = undefined; 
});

deleteBtn.addEventListener('click', () => {
    if(currentOperand.innerText.length <= 1) {
        currentOperand.innerText = "0";  
    } else {
        currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    }
});

operationsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if(currentOperand.innerText === "") return; 

        if(previousOperand.innerText !== "") {
            calculateResult();
        }

        currentOperator = btn.innerText;
        previousOperand.innerText = currentOperand.innerText + " " + currentOperator;
        currentOperand.innerText = "";
    });
});

function calculateResult() {
    let computation;
    const prev = parseFloat(previousOperand.innerText);
    const current = parseFloat(currentOperand.innerText);

    if (isNaN(prev) || isNaN(current)) return;

    if (currentOperator === "+") computation = prev + current;
    if (currentOperator === "-") computation = prev - current;
    if (currentOperator === "×") computation = prev * current;  
    if (currentOperator === "÷") computation = prev / current;  

    currentOperand.innerText = computation;
    previousOperand.innerText = "";
    currentOperator = undefined;
}

equalBtn.addEventListener('click', calculateResult);