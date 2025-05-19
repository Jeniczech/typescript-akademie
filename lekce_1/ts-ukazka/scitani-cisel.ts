// Zde zmíníme, že TS nevidí do našeho HTML. `as` neboli Type Assertion (určení typu, přetypování) bude vysvětleno později
const num1 = document.getElementById('firstNumber');
const num2 = document.getElementById('secondNumber') as HTMLInputElement;
const addBtn = document.getElementById('addButton') as HTMLButtonElement;

const addNumbers = (number1: number, number2: number) => {
    const result = number1 + number2;
    console.log(result);
};

// Zde zdůrazníme, jak nám TS pomohl odhalit chybu už při psaní kódu
addBtn.addEventListener('click', () => addNumbers(num1.value, num2.value));

// Zde ukážeme 2 možnosti převodu řetězců na čísla. Zmíníme vlastnost `valueAsNumber` a jakou má hodnotu, pokud je input prázdý
addBtn.addEventListener('click', () => addNumbers(Number(num1.value), Number(num2.value)));
addBtn.addEventListener('click', () => addNumbers(num1.valueAsNumber, num2.valueAsNumber));

/* Na závěr vysvětlíme rozdíly mezi typovou kontrolou v TS vs. chováním JS */

let soucet = 'hello' + 12; // Výsledek: 'hello12'
// Toto v TS projde. "+" je v JS i TS přetypovací a spojovací operátor.
// Pokud alespoň jeden operand je řetězec, dojde ke konkatenaci (spojení).
// TS nevidí v tom žádnou typovou chybu.

let soucet2 = '12' - 12; // Výsledek 0
// V JS toto projde, protože se JS pokusí převést "12" na číslo.
// V TS toto neprojde, protože tato operace nedává smysl.

let soucet3 = 'hello' - 12; // Výsledek "NaN
// "hello" nejde převést na číslo