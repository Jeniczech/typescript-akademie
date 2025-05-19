// Zde zmíníme, že IDE nám do jidté míry poskytuje TS anotace i v obyč. JS souborech
const num1 = document.getElementById('firstNumber');
const num2 = document.getElementById('secondNumber');
const addBtn = document.getElementById('addButton');

const addNumbers = (number1, number2) => {
    const result = number1 + number2;
    console.log(result);
};

addBtn.addEventListener('click', () => addNumbers(num1.value, num2.value));
