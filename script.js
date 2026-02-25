const numbersBtn = document.querySelectorAll("[data-number]");
const operationsBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");



numbersBtn.forEach(btn => {
    btn.addEventListener("click", () => {

        if(currentOperand.innerText === "0") currentOperand.innerText = "";
        if(btn.innerText === "." && currentOperand.innerText.includes(".")) return;
        currentOperand.innerText = currentOperand.innerText.toString() + btn.innerText.toString();
    });
});

allClearBtn.addEventListener('click', () => {
    currentOperand.innerText = "0";
    previousOperand.innerText = ""; 
});

deleteBtn.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.toString().slice(0, -1);
});