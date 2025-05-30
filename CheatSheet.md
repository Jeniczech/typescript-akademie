# 📘 TypeScript Cheat Sheet

Níže najdeš přehled nejdůležitějších TypeScript konceptů s krátkým vysvětlením názorným příkladem.

---

## 🔤 Základní typy

### String, Number, Boolean

```ts
let name: string = 'Anna';
let age: number = 30;
let isAdult: boolean = true;
```

Typ proměnné se určuje buď explicitně, nebo pomocí inference (odvození).

### Type Inference vs Explicit Type

```ts
let user = 'Petr'; // odvozeno jako string
let user2: string = 'Petr'; // explicitní typ
```

TypeScript si umí typ často odvodit – explicitní anotace pak nemusí být nutná.

---

## 🧮 Funkce

### Parametry a návratové hodnoty

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

Můžeme typovat jak parametry, tak návratový typ. Návratový typ lze ale většinou nechat odvodit.

### Funkce s výchozí hodnotou a volitelným parametrem

```ts
const greet = (name = 'Host') => `Ahoj, ${name}!`;
const printAge = (age?: number) => console.log(age);
```

Parametr s `?` je volitelný.

### Funkce vracející void

```ts
const logMessage = (message: string): void => {
  console.log(`Zpráva: ${message}`);
};
```

Typ `void` se používá u funkcí, které nic nevrací (nebo jejich návratová hodnota není důležitá).

### Typování callbacků (parametr funkce je jiná funkce)

```ts
const transform = (value: number, cb: (n: number) => string): string => {
  return cb(value);
};

const result = transform(42, (n) => `Hodnota je ${n}`);
```

Callback funkce mají vlastní typ zápisu – parametry a návratová hodnota.

---

## 🤹‍♂️ Any

### Any

```ts
let anything: any = 'text';
anything = 5;
anything = {};
```

`any` vypíná kontrolu typů – může vést k chybám. Je lepší se mu vyhýbat.

---

## 🎭 Union (spojené) a Literal (doslovné) typy

### Union typy

```ts
let input: string | number;
input = 'abc';
input = 123;
```

Hodnota může mít více možných typů.

### Literal typy

```ts
let status: 'success' | 'error' | 'loading';
status = 'loading';
```

Používá se např. u stavových hodnot – autocomplete pomáhá při psaní.

---

## 📚 Pole a Tuples

### Pole

```ts
const numbers: number[] = [1, 2, 3];
```

Alternativní zápis:

```ts
const strings: Array<string> = ['a', 'b'];
```

### Union v polích

```ts
const values: (string | number)[] = ['a', 1];
```

Každý prvek může mít různé typy.

### Tuple (n-tice)

```ts
const coords: [number, number] = [50.08, 14.43];
```

Tuple má přesně danou délku a typy.

---

## 🧱 Objekty

### Objekt s typem

```ts
const user: { name: string; age: number } = {
  name: 'Eva',
  age: 29,
};
```

Typ objektu lze zapsat inline nebo pomocí aliasu:

### Type alias

```ts
type User = { name: string; age: number };
```

### Nepovinné vlastnosti

```ts
type User = { name: string; age?: number };
```

---

## 🔄 Intersections

### Spojování typů

```ts
type A = { a: number };
type B = { b: string };
type C = A & B;
```

`&` spojí oba typy dohromady.

---

## 🧩 Interface

```ts
interface Product {
  id: string;
  price: number;
  order: (quantity: number) => void;
}
```

Alternativa k `type` pro popis objektů. Lze rozšiřovat pomocí `extends`.

```ts
interface Book extends Product {
  title: string;
}
```

---

## 🛠️ Utility typy

### Pick

```ts
type Product = { id: string; name: string; price: number };
type SlimProduct = Pick<Product, 'id' | 'price'>; // vybrání konrétních vlasností objektu
```

### Omit

```ts
type PublicUser = Omit<User, 'password'>; // vynechání konkrétních vlasnosti objektu
```

### Partial

```ts
type Update = Partial<Product>; // všechny vlastnosti volitelné
```

### Required

```ts
type Settings = Required<{ theme?: string }>; // vše povinné
```

---

## 🔑 Dynamické vlastnosti objektu a Record typ

```ts
interface PageViews {
  [page: string]: number;
}
```

Nebo pomocí `Record`:

```ts
type PageViews = Record<string, number>;
```

---

## 🔁 Mapped types - literal unions jako klíče objektu

```ts
type Role = 'admin' | 'editor';

type Permissions = {
  [R in Role]: {
    canEdit: boolean;
    canDelete: boolean;
  };
};
```

Vhodné pro typy generované z unionů.

---

## 🧠 Zúžování typů (Type Narrowing)

### Zúžování pomocí union typu

```ts
type CharacterStatus = "idle" | "walking" | "running" | "jumping" | "attacking" | "dead";

type MovementStatuses = "idle" | "walking" | "running" | "jumping";
type ActionStatuses = "attacking" | "dead";
type AllStatuses = MovementStatuses | ActionStatuses;
```

### Zúžování pomocí operátoru "typeof"

```ts
const logValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    console.log("string:", value);
  } else if (typeof value === "number") {
    console.log("number:", value);
  } else {
    console.log("boolean:", value);
  }
};
```

### Podmíněné zúžování

```ts
const getPriceText = (price: number | null | undefined) => {
  if (price) {
    console.log(`${price} Kč`);
  } else if (price === undefined) {
    console.log("Zdarma");
  } else {
    console.log("Není k dispozici");
  }
};
```

### Zúžení typu pomocí porovnání

```ts
const mergeInfo = (primary: string | number, secondary: string | boolean) => {
  if (typeof primary === 'string' && typeof secondary === 'string') {
    console.log(primary.toUpperCase() + secondary.toLowerCase());
  }
};
```

### Zúžení pomocí podmínky a vyhození chyby

```ts
const root = document.getElementById("app");
if (!root) {
  throw new Error("Element nebyl nalezen");
}
root.title = "Název aplikace";
```

### Zúžení pomocí operátoru "in"

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move = (animal: Fish | Bird) => {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
};
```

### Zúžení pomocí operátoru "instanceof"

```ts
const getData = () => {
  throw new Error("Chyba při získávání dat");
};

try {
  getData();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}
```

### Typ never

```ts
const throwError = (): never => {
  throw new Error("Tohle vždy spadne");
};

let nic: never;
nic = '' // Chyba: Type 'string' is not assignable to type 'never'
```

### Discriminated unions

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

const calculateArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
};
```

### Discriminated tuples

```ts
type AppEvent =
  | ["login", { userId: string }]
  | ["logout", { userId: string }]
  | ["error", { message: string; code: number }];

const logEvent = (event: AppEvent): void => {
  const [type, data] = event;
  switch (type) {
    case "login":
      console.log(`Uživatel ${data.userId} se přihlásil.`);
      break;
    case "logout":
      console.log(`Uživatel ${data.userId} se odhlásil.`);
      break;
    case "error":
      console.log(`Chyba ${data.code}: ${data.message}`);
      break;
  }
};
```

---

## 🔁 Měnitelnost (Mutability)

V TypeScriptu záleží na tom, zda proměnné (nebo vlastnosti objektu) mohou měnit hodnotu.
```ts
type Theme = {
    colorScheme: "light" | "dark" | "auto";
};

let userColorScheme = "dark";

const userTheme: Theme = {
    colorScheme: userColorScheme, // ❌ TS chyba pokud není správně anotováno
};
```

---

## 🔒 Readonly vlastnosti

Pomocí `readonly` zajistíme, že se vlastnost objektu po vytvoření už nezmění.
```ts
type User = {
    readonly id: number;
    name: string;
};

const user: User = { id: 1, name: "Anna" };
user.name = "Eva"; // ✅
user.id = 2;       // ❌ Error: id je readonly
```

---

## 🔐 `as const`

`as const` změní všechny hodnoty na literální typy a zároveň celý objekt označí jako readonly.
```ts
const message = {
    type: "error",
    text: "Něco se pokazilo.",
} as const;

message.type = "info"; // ❌ readonly + pouze "error" povoleno
```

---

## 📦 Readonly pole

Readonly pole nejde měnit — nelze do něj přidávat ani mazat prvky.
```ts
const numbers: readonly number[] = [1, 2, 3];
numbers.push(4); // ❌ Error
```

---

## 📅 Enums (výčtové typy)

`enum` definuje sadu pojmenovaných konstant. Existují číselné i řetězcové.
```ts
enum Day {
    Sunday,
    Monday,
    Tuesday,
}

const getDayName = (day: Day) => {
    if (day === Day.Monday) return "Pondělí";
};
```

---

## 🔑 `keyof` operátor

Získá union všech klíčů daného typu.
```ts
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"
```

---

## 🔍 `typeof` operátor

Získá typ z existující proměnné.
```ts
const config = { darkMode: true };
type ConfigType = typeof config; // { darkMode: boolean }
```

---

## 🧠 `keyof` + `typeof` kombinace

Používá se pro bezpečné získání klíčů z objektu.
```ts
const labels = { save: "Uložit", cancel: "Zrušit" };
type LabelKeys = keyof typeof labels; // "save" | "cancel"
```

---

## 🎁 Generické typy

Typy, které pracují s jinými typy jako s parametry.
```ts
type Response<T> = {
    success: boolean;
    data: T;
};

const res: Response<number> = { success: true, data: 42 };
```

---

## 📦 Výchozí parametry u generik

Umožňují přednastavit typovou hodnotu, pokud ji volající nespecifikuje.
```ts
type Box<T = string> = {
    value: T;
};

const defaultBox: Box = { value: "Hello" }; // T = string
```

---

## ⛓ `extends` (Constraining parameters)

Omezíme, jaké typy mohou být použity jako parametr.
```ts
type WithId<T extends { id: number }> = T;

type User = WithId<{ id: number; name: string }>; // ✅
type Invalid = WithId<{ name: string }>;          // ❌
```

---

## 🧩 Template Literal Types

Umožňují vytvořit řetězcové typy na základě šablon.
```ts
type BgColor = `bg-${"red" | "blue"}`;
const color: BgColor = "bg-red"; // ✅
```

---

## 🛠 Operátor `as`

Používá se pro přetypování (tzv. type assertion).
```ts
const form = document.getElementById("form") as HTMLFormElement;
```

---

## ❗ Non-null assertion

Říká TypeScriptu, že hodnota není `null` ani `undefined`.
```ts
const input = document.getElementById("email")!;
console.log(input.id);
```

---

## ✅ `satisfies` operátor

Ověří, že hodnota odpovídá určitému typu, ale zachová konkrétní literální typy.
```ts
const config = {
    border: "solid",
} satisfies Record<string, string>;
```

## 📎 TSDoc komentáře

```ts
/**
 * Přičte dvě čísla
 * @example
 * add(2, 3); // 5
 */
const add = (a: number, b: number): number => a + b;
```

## ⚙️ Kompilace a konfigurace

### Překlad TypeScriptu do JavaScriptu

```bash
tsc index.ts         # zkompiluje jeden soubor do JS
```

### Inicializace TypeScript projektu

```bash
tsc --init           # vytvoří tsconfig.json s výchozím nastavením
```

Tento soubor můžeš upravit např. pro zapnutí `strict`, nastavení výstupního adresáře apod.

---
