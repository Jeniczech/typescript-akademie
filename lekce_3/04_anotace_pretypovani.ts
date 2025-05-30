/* Anotace a přetypování */

/* Oparátor "as" */

const handleFormData = (e: SubmitEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement) // (e.target as HTMLFormElement);
    return data;
};

// Operátor "as" v TypeScriptu slouží k tzv. type assertion,
// což se nejčastěji překládá jako „přetypování“ nebo „ujistění o typu“.
// TypeScript nám v tomto případě „věří“ – ale nekontroluje, jestli máme pravdu.

// Ale "as" není úplně „hloupý“ – všechno přetypovat nejde
const greeting = "hello" as number;
let greeting2 = "hello" as unknown as number;
// greeting2 = 0;

/* Non-null assertion (přetypování) */

const input = document.getElementById("email") //!;
console.log(input.title);

/* Operátor "satisfies" */

type Color =
    | string
    | { r: number; g: number; b: number; };

const config: Record<string, Color> = {
    foreground: { r: 255, g: 255, b: 255 },
    background: { r: 0, g: 0, b: 0 },
    border: "transparent",
};

console.log(config.border.toUpperCase())

// Hodí se, když chceme ověřit, že hodnota odpovídá určitému typu,
// aniž bychom ztratili přesný (literální) typ.
// Často používané u konfiguračních objektů.

// ":" – Použijeme při klasické anotaci proměnné nebo parametru
// Např.: let age: number = 30;

// "as" – Říkáme TypeScriptu, jaký typ má hodnota, i když to nedokáže odvodit sám
// Např. při práci s DOM nebo při čtení z JSON.parse

// "!" – Ujistíme TypeScript, že hodnota není null nebo undefined (non-null assertion)

// "satisfies" – Ověří, že hodnota odpovídá určitému typu,
// ale zároveň si zachová svůj přesný (literální) typ