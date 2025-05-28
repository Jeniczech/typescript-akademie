/* Operátor "keyof" */

// Zde jako zdroj "pravdy" používáme typ
interface FormValues {
    name: string;
    email: string;
    password: string;
}

const inputs: Record<
    keyof FormValues, // stejné jako "name" | "email" | "password"
    {
        initialValue: string;
        label: string;
    }
> = {
    name: {
        initialValue: "",
        label: "Name",
    },
    email: {
        initialValue: "",
        label: "Email",
    },
    password: {
        initialValue: "",
        label: "Password",
    },
};

/* Operátor "typeof" */

// Zde jako zdroj "pravdy" používáme hodnotu

const settings = {
    darkMode: true,
    fontSize: 14,
};

// ❌ Ručně napíšeme typ – musíme ho synchronizovat s objektem
type Settings = {
    darkMode: boolean;
    fontSize: number;
};

// ✅ Odvodíme typ přímo z objektu
type InferredSettings = typeof settings;

const mySettings: Settings = {
    darkMode: false,
    fontSize: 16,
};

/* Kobminace "keyof" a "typeof" */

const translations = {
    welcome: "Vítej!",
    logout: "Odhlásit se",
    profile: "Profil",
};

// ŘEŠENÍ:
type TranslationKey = keyof typeof translations;

const t = (key: string): string => {
    return translations[key]; // ❌ TS error: Index signature not found (nebo any)
}

t("welcom"); // žádná chyba, ale runtime chyba – překlep

// Pomocí typeof + keyof můžeme bezpečně vázat typy na konkrétní
// hodnoty – když se objekt změní, typ se změní automaticky.

// ❌ Bez typeof + keyof: ruční definice typů:

// Musíme ručně napsat typ, který přesně odpovídá objektu
// type Translations = {
//     welcome: string;
//     logout: string;
//     profile: string;
// };
//
// const translations: Translations = {
//     welcome: "Vítej!",
//     logout: "Odhlásit se",
//     profile: "Profil",
// };
//
// type TranslationKey = "welcome" | "logout" | "profile"; // znovu ručně!
