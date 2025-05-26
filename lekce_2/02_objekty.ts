/* Intersections */

type Kocka = {
    name: string;
    canMeow: boolean;
};

type Pes = {
    name: string;
    canBark: boolean;
}

// Vysvětlíme, jak vytvoříme intersection
type KockoPes = Kocka & Pes;

const animal: KockoPes = {
    // zde opět ukážeme autocomplete
};

/* Úkol na procvičení */

type Book = {
    id: string;
    createdAt: Date;
    title: string;
    authorId: string;
    pages: number;
};

type Author = {
    id: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    birthYear: number;
};

// Jak je vidno, ona typy "Book" a "Author" mají společné vlastnosti
// 1. Vytvořte základní typ "Identifiable" se společnými vlastnostmi
// 2. Upravte typy "Book" a "Author" tak, aby obsahovali i vlastnosti z typu "Identifiable"

// Řešení:
// type Identifiable = {
//     id: string;
//     createdAt: Date;
// };
//
// type Book = {
//     title: string;
//     authorId: string;
//     pages: number;
// } & Identifiable;
//
// type Author = {
//     firstName: string;
//     lastName: string;
//     birthYear: number;
// } & Identifiable;
//
// const book1: Book = {
//     id: 'b1',
//     createdAt: new Date('2023-01-01'),
//     title: 'Understanding TypeScript',
//     authorId: 'a1',
//     pages: 320,
// };
//
// const author1: Author = {
//     id: 'a1',
//     createdAt: new Date('1990-05-15'),
//     firstName: 'Tod',
//     lastName: 'Newton',
//     birthYear: 1988,
// };

/* Interfaces */
// Interface je další možnost, jak v TS

interface Identifiable {
    id: string;
    createdAt: Date;
}

// Book rozšiřuje Identifiable a přidává své vlastní vlastnosti
// Vysvětlíme, že pomocí "extends" dědíme vlastnosti jiného typu
interface Kniha extends Identifiable {
    title: string;
    authorId: string;
    pages: number;
}

interface Autor extends Identifiable {
    firstName: string;
    lastName: string;
    birthYear: number;
}

/* Interfaces vs type aliases */

type AddressPart = {
    city: string;
    zip: string;
};

type LocationPart = {
    country: string;
    zip: number; // stejný název, ale jiný typ!
};

type LocationAddress = AddressPart & LocationPart;

const address1: LocationAddress = {
    city: "Prague",
    country: "Czech Republic",
    // Type string is not assignable to type never - o never se budeme bavit později,
    // ale vysvětlím, že toto není moc popisná chyba
    zip: "11000",
};

// Účastnice požádáme, aby přepsaly "AddressPart" a "LocationPart do "interface"

// Zde zmíníme, že pojmenování s "I" se občas používá, ale ne každému vyhovuje
interface IAddressPart {
    city: string;
    zip: string;
}

interface ILocationPart {
    country: string;
    zip: number;
}

// Toto možná bude tricky, ale zkusíme ať účastnice vymyslí spojít více interfaces dohromady
// TS error je úmyslný - viz řádek 145
interface ILocation extends IAddressPart, ILocationPart {}

const address2: ILocation = {
    city: "Prague",
    country: "Czech Republic",
    zip: "11000",
};

/* Pokud kombinujeme více typů nebo rozhraní, může nastat konflikt vlastností se stejným názvem,
ale jiným typem (např. zip: string vs zip: number).
✅ Při použití "interface extends" TS chybu odhalí hned při definici.
⚠️ Při použití "intersection &" se typy jen „slijí dohromady“ – chyba se ukáže až při použití výsledného typu.
"Interface" nám dává lepší kontrolu a dřívější zpětnou vazbu,
*/

/*
Typ "type" může popsat cokoliv – unie, pole, literály, funkce i objekty.
"interface" je zaměřený především na objekty a jejich strukturu.

Pokud potřebujeme rozšiřovat objekty, je doporučeno používat:

✅ interface A extends B
❌ spíše než type A = B & C

TypeScript dokáže interface lépe optimalizovat (cacheovat), což zlepšuje výkon při type-checku a práci v editoru.
V jednoduchých případech (např. props ve funkčních React komponentách) na výběru tolik nezáleží – můžeme použít to, co je čitelnější.
*/

/* Dynamické vlastnosti objektů */

// Zkusíme se účastnit zeptat, zdali by vědely jak otipovat objekt, který má dynamické vlasnosti
interface PageVisits {
    // Toto je "index signature". Název klíče je volitelný
    [page: string]: number
}

// Nebo alternativa
// Rozklikneme "Record" a vysvětlíme, že jde pomocný typ a vysvětlíme zápis
type PageVisitsWithRecordType = Record<string, number>;
// "K" je typ všech klíčů (např. 'name' | 'age').
// "T" je typ hodnot, které všechny klíče budou mít.
// Výsledkem je objekt, kde každý klíč z K má hodnotu typu T.
// "P" je pomocná proměnná pro jednotlivé klíče z množiny K.

const visits = {};

visits.home = 120;
visits.about = 45;
visits.contact = 30;
// Pak na řádku 179 doplníme "PageVisitsWithRecordType" typ

// Zde vysvětlíme, že do typu obsahujícího "index signature" můžeme přidat i další hodnoty
interface Scores {
    [subject: string]: number;
    math: number;
    english: number;
    science: string; // typ musí být stejný jako "index signature" typ
}

/* Literal unions jako klíče objektu */

// Pošleme účastnicím kód, aby si mohly zkusit vyřešit následující úkol:
// Natypujte type "UserPermissions" tak, aby objekt "rolePermissions" obsahoval pouze klíče v union "Role"
// V tomto případě nepůjde použít interface
type Role = 'admin' | 'editor' | 'viewer';

// Zmíníme, v čem "unknown" je lepší než any. O "unknown" budeme mluvit později
type UserPermissions = unknown;

const rolePermissions: UserPermissions = {
    admin: {
        canEdit: true,
        canDelete: true,
        canViewAnalytics: true,
    },
    editor: {
        canEdit: true,
        canDelete: false,
        canViewAnalytics: true,
    },
    viewer: {
        canEdit: false,
        canDelete: false,
        canViewAnalytics: false,
    },
    superAdmin: {
        canEdit: true,
        canDelete: true,
        canViewAnalytics: true,
    }
};

// Řešení
// type Role = 'admin' | 'editor' | 'viewer';
//
// type UserPermissions = Record<
//     Role,
//     {
//         canEdit: boolean;
//         canDelete: boolean;
//         canViewAnalytics: boolean;
//     }
// >;
//
// // Nebo použijeme "Mapped Type"
// type UserPermissions2 = {
//     [role in Role]: {
//         canEdit: boolean;
//         canDelete: boolean;
//         canViewAnalytics: boolean;
//     };
// };
//
// const rolePermissions: UserPermissions = {
//     admin: {
//         canEdit: true,
//         canDelete: true,
//         canViewAnalytics: true,
//     },
//     editor: {
//         canEdit: true,
//         canDelete: false,
//         canViewAnalytics: true,
//     },
//     viewer: {
//         canEdit: false,
//         canDelete: false,
//         canViewAnalytics: false,
//     },
// };

/* Částečná data v typech */

interface Product {
    id: string;
    name: string;
    price: number;
    isAvailable: boolean;
}

// Utility type (pomocný typ) Pick
// Používáme na vytváření nových typů výběr vlasností z nějakého "Interface"
const getProductPrice = (p: Pick<Product, 'price' | 'id'>) => {};

// Extrahování do samostatného typu
type PickedProduct = Pick<Product, 'price' | 'id'>;

// Nejde použít s typy, které nejsou objekty
type PickedUnion = Pick<'a'| 'b', 'a'>;

// Ale!!:
type NotAnObject = string;
type Something = Pick<NotAnObject, 'length'>;

// Utility type (pomocný typ) Omit
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

type PublicUser = Omit<User, 'password'>;

// Utility type (pomocný typ) Partial
// Dovolí nám označit všechny vlastnosti objektů jako nepovinné
interface Kniha {
    title: string;
    author: string;
    publishedYear: number;
}

type PartialProduct = Partial<Kniha>;

// Utility type (pomocný typ) Required
// Opak typu Partial
interface UserSettings {
    theme?: string;
    language?: string;
}

type FullSettings = Required<UserSettings>;

/* Typ se sdílenými hodnotami */
// Nasdílíme kód a požádáme o nahrazení typu "unknown" takovým typem, abychom mohli přistupovat ke společným hodnotám

interface Car {
    vin: string;
    brand: string;
    model: string;
    imageUrl: string;
}

interface Bike {
    vin: string;
    brand: string;
    type: string;
    imageUrl: string;
}

interface Boat {
    vin: string;
    brand: string;
    length: number;
    imageUrl: string;
}

const renderVehicleCard = (vehicle: unknown) => {
    return `
        <div class="card">
            <img src="${vehicle.imageUrl}" alt="${vehicle.brand}">
            <p>Brand: ${vehicle.brand}</p>
            <p>VIN: ${vehicle.vin}</p>
        </div>
     `;
};

const getItem = (vehicle: unknown) => {
    // @ts-expect-error
    vehicle.length;
    // @ts-expect-error
    vehicle.model;
};

// "@ts-expect-error" je speciální komentář v TypeScriptu, který říká:
// Tady očekávám, že TypeScript zahlásí chybu.

// Řešení + vysvětlíme co se děje, když chceme přistoupit k hodnotám,
// které nejsou společné a plynule přejdeme na téme zúžování typů
type VehicleBase = Pick<Car, 'vin' | 'brand' | 'imageUrl'>;