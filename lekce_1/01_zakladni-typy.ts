/* Řetězce, čísla pravdivostní hodnoty */

let number: number = 0; // Vysvětlíme základy annotování a zkusíme změnit 0 na nějaký řetězec
const string: string = 'Hello TS!';

// Na těchto příkladech vysvětlíme pojmy "Type Inference" a "Explicit Type Assignment"

let user;
user = 'Karel'; // Najedeme myší na prom. user, vysvětlíme TS hlášku a použijeme "Infer type of..."
user = 38;

let user2: string;
user2 = 'Petr'; // Vysvětlíme, proč stejnou hlášku nemáme u prom. user2

let age = 38; // Zde je již TS schopný odvodit typ
age = '23'; // Zde již můžeme zmínit "union type" - najedeme myší na prom. user a použijeme auto. odvození typu

const lastName: string = 'Novák'; // V tomto případě je explictní typování poněkud zbytečné

const isAuthorized = false; // Zde nám při najetí myší TS zobrazí inicializční hodnotu, protože uložená hodnota nejde měnit
let isOver18 = true; // Zde nám při najetí myší TS zobrazí konkrétní typ

/* Parametry funkcí */

// Protože paramtery funkcí jsou většinou jednoduché typy, pojďme se podívat na funkce

// Zde zmíníme "explicit type assignment"
const add = (n1: number, n2: number) => {
    return n1 + n2;
};

// Zde zmíníme "type inference" u parametru, který má výchozí hodnotu
const addWithDefault = (n1: number, n2 = 5) => {
    return n1 + n2;
};

add(); // Vysvětlíme TS error a JS runtime error
add(2, 5); // Správné použítí
add(2, '4'); // Vysvětlíme TS error

addWithDefault(2, 3); // Správné použití
addWithDefault(2); // Správné použití
addWithDefault(2, '5'); // Vysvětlíme TS error

/* Any */

// Najedeme myší na parametr funkce a vysvětlíme TS hlášku
const flexibleParams = (a, b) => {
    return a + b;
};

// Vysvětlíme nevýhody "any" typu a zmíníme, že pomocí nastavení TS ho lze úplně zakázat
let veryFlexibleType: any = false;
veryFlexibleType = 0;
veryFlexibleType = {};
veryFlexibleType = 'Hello';
veryFlexibleType = [];

/* Union type (sjednocený typ) */

let multipleTypes: string | number | boolean | undefined | null;
multipleTypes = 0;
multipleTypes = true;
multipleTypes = null;
multipleTypes = [0, 1, 2];

// Zde vysvětlíme, že v TS můžeme používat jako typy i konkétní hodnoty
// Jde o tzv. "literal type" (literální (toto není úplně české slovo) nebo doslovný typ)
let literalArray: ['asd'];
literalArray = 0;

const test: 23 = 23; // Jedna samotná hodnota jako typ moc význam nemá, ale dobře se "literal types" hodí v unions:

let apiStatus: 'loading' | 'success' | 'error'; // Tomuto se říká "union string literal"
apiStatus = 'success'; // Než napíšeme "success", nechám TS zobrazit autocomplete

/* Pole */

const hobbies = ['plavání', 'judo', 'pivko']; // Zde opět zmíníme type inference (odvozování typů)

hobbies.push(10); // Vysvětlíme TS chybu
hobbies.push('typescript');

// Rest parameter (zbytkový parametr)
const concatenate = (...strings) => { // Najedeme myší na "...string" a vysvětlíme rest param. v JS a správně otypujeme
    return strings.join('');
};

const result = concatenate('Hello', ' ', 'World');

// Dva možné způsoby, jak otypovat pole
const sports: string[] = ['curling', 'baseball']; // "[]" - array modifier
const names: Array<string> = ['Petr', 'Honza', 'Karel']; // - vypadá více explicitněji. Zmíníme že s lomenými (špičatými) závorkami se v TS ještě setkáme
const inferredArray = [0, 1, 2] // Zde opět zmíníme


// Protože už známe unions, zmíníme i složitější typy polí
let arrayWithStringsOrNumbers: (string | number)[]; // Nebo "Array<string | number>"
arrayWithStringsOrNumbers = [23, 'Petr'];
arrayWithStringsOrNumbers = [3, 4];

let arrayOfStringOrNumbers: string[] | number[]; // Zde vysvětlíme rozdíl oproti předchozímu příkladu, "Array<string> | Array<number>"
arrayOfStringOrNumbers = ['1', '2', '3'];
arrayOfStringOrNumbers = [1, 2, 3];

// Pole objektů - objekty probereme více do hloubky později
let arrayOfObjects: { name: string; age: number }[];
arrayOfObjects = [{ name: 'Karel', age: 33 }];

/* Funkce */

// Najedem myší na "addNumbers" a vysvětlíme typování parametrů fce a odvození typu návratové hodnoty
const addNumbers = (firstNumber: number, secondNumber: number) => {
    return firstNumber + secondNumber; // Návratovou hodnotu fce není vždy třeba explicitně typovat
};

// Nejprve napíšeme funkci i s voláním bez anotací
const transformNumber = (
    value: number,
    transformer: (number: number) => string,
) => {
    return transformer(value);
};

// Opět zdůrazníme odvozování typů
const transformedResult = transformNumber(42, (n) => `Číslo je: ${n}`);

/* Tuple (n-tice) */

// Pevně strukturované pole s přesně daným počtem prvků a typů. Hodí se třeba pro souřadnice
const showCoordinates = (coords: [number, number]) => {
    const x = coords[0];
    const y = coords[1];
    const z = coords[2]; // Ukážeme TS chybu

    const [lat, lng,] = coords; // Můžeme připomenout "array destructuring"
};

showCoordinates([1, 2]);

// Pro lepší přehlednost můžeme tuple přidat anotace (jména)
const getArea = (dimensions: [width: number, length: number]) => {
    return dimensions[0] * dimensions[1];
};

getArea([3, 4]);

// Tuple s nepovinným prvkem - složitější varianta
const printPosition = ([x, y, z]: [number, number, undefined])=> {
    if (z !== undefined) {
        console.log('Souřadnice ve 3D');
    } else {
        console.log('Souřadnice ve 2D');
    }
}

printPosition([1, 2, undefined]);

// Tuple s nepovinným prvkem - jednodušší varianta
const printPosition2 = ([x, y, z]: [number, number, number?])=> {
    if (z !== undefined) {
        console.log('Souřadnice ve 3D');
    } else {
        console.log('Souřadnice ve 2D');
    }
}

printPosition2([1, 2]);

// Když už jsme u funkcí, pojďme zmínit TSDoc Comments
// TSDoc Comment je víceřádkový komentář, který dokumentuje účel a způsob použití kódu.

/**
 * Adds two numbers together.
 * @example
 * addTwoNumbers(10, 20);
 * // Výsledek je 30
 */

// Najedeme na myší na proměnnou a vysvětlíme
const addTwoNumbers = (a: number, b: number) => {
    return a + b;
};


/* Type aliases (custom types) - typové aliasy */

// Než se pustíme do objeků, pojďme zmínit typové aliasy

let userRole: 'admin' | 'editor' | 'guest';
userRole = 'guest';

// Na parametru "role" vysvětlíme problém duplicitního kódu
const access = (role: 'admin' | 'editor' | 'guest')=> {
    // ...
}

// Pomocí "type" definujeme alias
type UserRole = 'admin' | 'editor' | 'guest';

const getAccess = (role: UserRole)=> {
    if (role === 'guest') { // Při psaní podmínky můžeme opět zmínit TS autocomplete
        // ...
    }
};

/* Objekty */

const vehicle = { // Zde opět zmíníme odvozování typů
    make: 'Ford',
    nrOfDoors: 3,
    working: false,
};

const vehicleWithAnnotation: { // Zde jde opět tzv. "literal type" (literální nebo doslovný typ)
    make: string;
    nrOfDoors: number;
    working: boolean;
    // year: Date; // Date je globální objekt reprezentující datum a čas
} = {
    make: 'Ford',
    nrOfDoors: 3,
    working: false,
    // year: new Date(), // Zde ukážeme, co se stane když objektu přídáme vlasnost, která není součástí typu
};

type User = {
    name: string;
    age: number;
    isRegistered: boolean;
};

const getUser = (user: User) => {
    console.log(user.age); // Opět zmíníme napovídání
    console.log(user.role); // Zmíníme nexistující vlastnost objektu
};

type AdvancedUser = {
    name: string;
    age: number;
    isRegistered: boolean;
    role?: UserRole; // Stejně jako u parametrů funkcí, i zde použijem "?" pro označení nepoviné vlasnosti. Tato vlasnost může zcela chybět v objektu
    address: string | undefined;
};

const myUser: AdvancedUser = {
    name: 'Karel',
    age: 33,
    isRegistered: false,
    // zde zmíníme, co se stane, když nepřidáme vlasnosti "role" a "address"
}

const getAdvancedUser = (user: AdvancedUser) => {
    if (user.role) {
        // Podmínka neprojde, pokud vlastnost "user.role":
        // není přítomná
        // je výslovně undefined,
        // nebo je např. (''), což ale není úplně pravděpodobné
        console.log(user.role)
    }

    if (user.address) {
        // Podmínka neprojde, pokud vlastnost "user.address"
        // je výslovně undefined,
        // nebo je např. ('')
        console.log(user.address)
    }

    // také zmíníme, že tato anotace "role?: UserRole | undefined" by úplně nedávala smysl
};

const printUser = (user: User) => {
    console.log(user);
}

// Object props autocomplete
printUser({
    // zmíníme autocomplete (ctrl + space) - VS code - Open Keyboard Shortcuts -> trigger suggestions
});

// Event listeners autocomplete
document.addEventListener('');
