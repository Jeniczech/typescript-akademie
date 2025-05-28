/* Mutability (měnitelnost) */

// Pošleme kód a požádáme o vyřešení TS chyby
type Theme = {
    colorScheme: "light" | "dark" | "auto";
};

let colorScheme = "dark";

const userTheme: Theme = {
    colorScheme,
};

// ŘEŠENÍ:

// const colorScheme = "dark"; // vysvětlíme, proč jsme změnili "let" na "const"
// nebo:
//let colorScheme: "light" | "dark" | "auto"

/* Neměnné (read-only) vlastnosti objektu */

type User = {
    // readonly id: number;
    id: number;
    name: string;
};

const user: User = {
    id: 1,
    name: "Anna"
};

user.name = "Eva";
user.id = 2;

/* as const */

type MessageType = "info" | "success" | "error";

const message = {
    // Najede myší na "type" a vysvětlíme, proč vidíme "string" a ne konktrétní literal
    type: "error",
    text: "Něco se pokazilo.",
};

// Hodnoty v objektech muzeme prepisovat
message.type = 'cokoliv';

const showMessage = (type: MessageType) => {
    console.log(`Zobrazuji ${type} zprávu`);
};

showMessage(message.type);

// "as const" vs. ruční anotace
// Žádné ruční anotace typů
// Všechny hodnoty (např. "error") jsou inferenčně zapsány jako literální typy.
// Objekt je readonly – chrání před nechtěnou mutací.

/* Read-Only pole */

const nesahejNaMe: readonly number[] = [1, 2, 3];
// const nesahejNaMe: ReadonlyArray<number> = [1, 2, 3];

nesahejNaMe.push(10);




