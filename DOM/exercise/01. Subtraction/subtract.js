function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const operation = firstNumber - secondNumber;
    let result = document.getElementById('result');
    result.textContent = operation;
}