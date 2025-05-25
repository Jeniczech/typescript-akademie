/* Zúžování typů */

/* Kombinování union typů */

// Zadání vytvořte 3 typy pro pohybový stav, akční stav a pro všechny stavy
type CharacterStatus = "idle" | "walking" | "running" | "jumping" | "attacking" | "dead";

// Funkce pracující jen s pohybovými stavy
const handleMovement = (status: CharacterStatus) => {
    console.log(status);
};

// Funkce pracující jen s akčními stavy
const handleCombat = (status: CharacterStatus) => {
    console.log(status);
};

// Funkce, která zvládá všechny možné stavy
const handleAnyState = (status: CharacterStatus) => {
    console.log(status);
};

// ŘEŠENÍ:

// type MovementStatues = "idle" | "walking" | "running" | "jumping";
// type ActionStatues = "attacking" | "dead";
// type AllStatuses = MovementStatues | ActionStatues;

/* Kombinování union typů pomocí "typeof" operátoru */

const logValue = (value: string | number) => {
    // Operátor "typeof" funguje i v JS a zužuje typy během runtime
    if (typeof value === "string") {
        // Zde vysvětlíme, proč je value typu "string"
        console.log(value);
    } else {
        // Zde vysvětlíme, proč je value typu "number"
        console.log(value);
    }

    // Zde vysvětlíme, proč je value typu "number"
    // Mimo if podmínku je typ value stále string | number, protože už neplatí zúžený rozsah (narrowing).
    console.log(value);

    // Na konec přidáme do union "boolean" a vysvětlíme, co se změnilo a zmíníme možnost "else if"
};

/* Podmíněné zúžení */

// Zde vysvětlíme rozdíly mezi null a undefined
//

// Pošleme účastnicím, ať zkusí vyřešit
const getPriceText = (price) => {
    // "price" je číslo
    console.log(`${price} Kč`);
    // "price" je undefined
    console.log("Zdarma");
    // "price" je null
    console.log("Není k dispozici");
};

// ŘEŠENÍ:

// const getPriceText = (price: number | null | undefined) => {
//     if (price) {
//         console.log(`${price} Kč`);
//     } else if (price === undefined) {
//         console.log("Zdarma");
//     } else {
//         console.log("Není k dispozici");
//     }
// };

/* Zúžení typu pomocí porovnání */

// Pošleme účastnicím, ať zkusí vyřešit
const mergeinfo = (primaryInfo: string | number, secondaryInfo: string | boolean) => {
    const concatenatedInfo = primaryInfo.toUpperCase() + secondaryInfo.toLowerCase();
    
    console.log(primaryInfo);
    console.log(secondaryInfo);    
}

// ŘEŠENÍ:

// const mergeinfo = (primaryInfo: string | number, secondaryInfo: string | boolean) => {
//     if (primaryInfo === secondaryInfo) {
//         const concatenatedInfo = primaryInfo.toUpperCase() + primaryInfo.toLowerCase();
//     } else {
//       console.log(primaryInfo);
//       console.log(secondaryInfo);
//     }
// }

/* Zúžování typů pomocí vyhazování chyb */

const root = document.getElementById("app");

// Zmíníme, že na začátku kurzu jsme použili "as" pro vyřešení TS chyby
appElement.title = '';

if (!root) {
    throw new Error("Could not find app element");
}

root.title = '';

/* Zúžování typů pomocí "in" operátoru */

// Pošleme účastnicím, ať zkusí vyřešit
type Fish = {
    swim: () => void
};

type Bird = {
    fly: () => void
};
 
const move = (animal: Fish | Bird) => {
  return animal.swim();
  return animal.fly();
};

// ŘEŠENÍ

// const move = (animal: Fish | Bird) => {
//     if ("swim" in animal) {
//      return animal.swim();
//     }
   
//     return animal.fly();
// }

/* Typy "unknow" a "instanceof" */

// "unknow" je bezpečnější verze "any"
// Říkáme jím, že v tuto chvíli typ neznáme, ale budeme ho zná někdy v budoucnu

// "any" v podstatě vypíná typovou kontrolu
let cokoliv: any;
cokoliv.vlastnost

let tedNevim: unknown;
tedNevim.vlastnost;

// Typování Error třídy
const getData = () => {
    throw new Error("Something went wrong");
};

try {
    getData();

// Bude potřeba vytvořit tsconfig pro přísnější kontrolu    
} catch (error) {
    // console.error(error.message);
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        throw error;
    }
}

// Účastnicím pošleme tento kód a zadání
const parseJSON = (value: unknown) => {
    if (true) {
        return value.data.id;
    }
    
    throw new Error("Parsing error!");
};

// ✅ Ověříme, že value je objekt (není to např. string, number, boolean…)
// ✅ Vyloučíme možnost, že value je null (protože typeof null je taky "object")
// ✅ Zkontrolujeme, že value obsahuje vlastnost "data"
// ✅ Ověříme, že value.data je také objekt
// ✅ Vyloučíme možnost, že value.data je null
// ✅ Zkontrolujeme, že value.data obsahuje vlastnost "id"
// ✅ Teprve potom můžeme bezpečně přistoupit k value.data.id

// ŘEŠENÍ

// const parseJSON = (value: unknown) => {
//   if (
//     typeof value === "object" &&
// Vysvětlíme historickou chybu v JS - "typeof null === object"
//     value !== null &&
//     "data" in value &&
//     typeof value.data === "object" &&
//     value.data !== null &&
//     "id" in value.data
// ) {
//     return value.data.id;
//   }

//   throw new Error("Parsing error!");
// };

/* Typ never */

// "never" typ = tahle hodnota nikdy nenastane
// Je to nejnižší typ v hierarchii TypeScriptu, úplný opak typu "unknown"
// https://excalidraw.com/#json=7A2lYwh9hK1PzhtlkxGPI,vB-2oH7i6f0wlb2XgDO0fw

// Do "unknown" můžeme přiřadit cokoliv
let nevim: unknown;
nevim = '';
nevim = 0;

// Do "never" nemůžeme přiřadit nic (max. "never" samotné)
let nic: never;
nic = '';

// Návratová hodnota "never"
const throwError = () => {
    throw new Error("Tohle vždy spadne");
};

// Zajímavá "never" chyba
const person = {
    hobbies: []
};

// Najedeme myší a zobrazíme chybu
person.hobbies.push('guitar');
// Defaultně, prázdné pole je automaticky otypované jako "never"

/* Discriminated unions */

interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

// ŘEŠENÍ:

// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Square {
//     kind: "square";
//     sideLength: number;
// }

// type Shape = Circle | Square;

const calculateArea = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}

// DU = jasná struktura – každý tvar má jen to, co potřebuje
// Používá discriminátor (kind) pro rozlišení typu
// TypeScript automaticky zúží typy na základě shape.kind
// Vynucuje úplnost – např. pomocí switch + never lze zjistit, zda jsme ošetřili všechny varianty

// Sdružený typ s volitelnými vlastnostmi – „flexibilní, ale zrádné“
// Možné nekonzistence – typ nebrání tomu, aby objekt měl oba parametry nebo žádný
// V reálu kontroluješ přítomnost vlastností (?.radius), ne typ objektu

// interface Shape {
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

// const calculateArea = (shape: Shape) => {
//     if (shape.radius) {
//         return Math.PI * shape.radius * shape.radius;
//     } else if (shape.sideLength) {
//         return shape.sideLength * shape.sideLength;
//     }
// };