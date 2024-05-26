const num1 = document.getElementById('firstNumber') as HTMLInputElement;
const num2 = document.getElementById('secondNumber') as HTMLInputElement;
const addBtn = document.getElementById('addButton') as HTMLButtonElement;

const addNumbers = (number1: number, number2: number) => {
    const result = number1 + number2;
    console.log(result);
};

addBtn.addEventListener('click', () => addNumbers(Number(num1.value), Number(num2.value)));
