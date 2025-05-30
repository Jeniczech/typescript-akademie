/* Generické typy */
// Je to typ, který pracuje s jiným typem jako s „parametrem“ –
// vezme ho jako vstup a vrátí nový typ, často upravený nebo odvozený.

// Na začátek vysvětlím generika na zabudovaném pomocném typu
type User = {
    id: number;
    name: string;
};

type ReadonlyUser = Readonly<User>;

/* Druhý příklad */

// Nejdřív vysvětlíme problém bez použítí generik
type Response<T> = {
    success: boolean;
    // data: Product | UserInfo;
    data: T;
};

type Product = {
    id: string;
    price: number;
};

type UserInfo = {
    id: string;
    name: string;
    isActive: boolean;
}

const productData = (apiResponse: Response<Product>) => {
    console.log(apiResponse.data.price);
    // if ('isActive' in apiResponse.data) {
    //     apiResponse.data.isActive
    // }
}

/* Generika s defaultním parametrem */

type Boxik<T = number[]> = {
    value: T;
};

type DefaultBoxik = Boxik;

const stringBox: Boxik<string> = {
    value: "Ahoj",
};

type Uzivatel = { id: number; name: string };

const userBox: Boxik<Uzivatel> = {
    value: { id: 1, name: "Anna" },
};

/* Constraining type parameters (omezování typových parametrů) */

type WithIdOnly<T extends { id: number }> = T;

type UserWithId = {
    id: number;
    name: string;
};

type UserWithoutId = {
    name: string;
};

type Valid = WithIdOnly<UserWithId>;
type Invalid = WithIdOnly<UserWithoutId>;

/* Kombinace constrain a default */

// Upozorníme, že extends nesmí mít hodnotu, která není přitomná v defaultu
type Result<TResult, TError extends { message: string } = Error> =
    | {
        success: true;
        data: TResult;
    }
    | {
        success: false;
        error: TError;
    };

type FirstExample = Result<{ id: string }>;
type SecondExample = Result<{ id: string }, { message: string, nrOfTries: number }>;
type ThirdExample = Result<{ id: string }, { nrOfTries: number }>;

// async function fetchUser(id: number): Promise<SecondExample> {
//     try {
//         const res = await fetch(`/api/users/${id}`);
//         if (!res.ok) throw new Error("Uživatel nenalezen");
//         const data: User = await res.json();
//         return { success: true, data: { id: '1' } };
//     } catch (err) {
//         return { success: false, error: {nrOfTries: 2, message: ''} };
//     }
// }

/* Template literal types */

// Nejdřív napíšeme funkci setBackround
type BackgroundColor = string;
// type BackgroundColor = `bg-${string}`;
// type BackgroundColor = `bg-${"red" | "green"}`;

const setBackground = (color: BackgroundColor) => {};

setBackground("bg-red");
setBackground("bg-green");
setBackground("bg-blue");
setBackground("abcdef");

/* Generické funkce */

const wrapInArray = <T>(value: T) => {
    return [value];
};

// Zde nepotřebujeme posílat do funkce param. typ
const a = wrapInArray('123');
// Zde už dává smysl posílat do funkce param. typ
const b = wrapInArray<number>([1, 2, 3, 4, true])

/* Kombinace generických typu a generických typů */

// Nejdřív napíšeme bez návratového typu a generik
interface Movie {
    title: string;
    length: number;
    isAvailable: boolean;
}

const fetchData = async <T>(): Promise<T> => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

const example = async () => {
    const movieData = await fetchData<Movie>();
    // Toto je jen pro ilustraci, vysvětlíme problém, že movieData je "any"
    console.log(movieData.length);
};