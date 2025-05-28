// Přidejte správné anotace parametrům funkce

const multiplyNumbers = (a, b) => {
    return a * b;
};

// Přidejte správné anotace parametru funkce
const addNumbers = (numbers) => {
    return numbers.firstNumber + numbers.secondNumber;
};

// Upravte anotaci objektu adresy tak, aby adresa nemusela nutně obsahovat stát a PSČ
// Zkuste zjednodušit kód pomocí typového aliasu
const getAddress = (params: { street: string; city: string; state: string; zip: string; }) => {
    const { street, city, state, zip } = params;

    let address = `${street}, ${city}`;
    if (state) {
        address += `, ${state}`;
    }
    if (zip) {
        address += `, ${zip}`;
    }

    return address;
};

const fullAddress = getAddress({ street: "123 Main St", city: "Springfield", state: "IL", zip: "62704" });
const partialAddress = getAddress({ street: "456 Elm St", city: "Metropolis" });

// Použijte anotaci tak, abyste byli o chybě informováni na řádku 39 místo řádku 45
type Vehicle = {
    numberOfWheels: number;
    make: string;
    VIN: string;
    isFunctional: boolean;
}

const defaultVehicle = {};

const getVIN = (input: Vehicle) => {
    return input.VIN;
};

getVIN(defaultVehicle);

// Vlastnost level objektu Developer by měla obsahovat pouze tyto hodnoty: junior, medior, senior.
// Zkuste zjednodušit kód pomocí typového aliasu
type Developer = {
    id: number;
    firstName: string;
    lastName: string;
    level: string;
}

// Vytvořte union type, který zahrnuje obě dvě následující typové aliasy
type Fruit = {
  name: string;
  sweetness?: number;
}

type Vegetable = {
  name: string;
  hasSeeds: boolean;
}

// Doplňte správnou anotaci
const apple = { name: "Apple", sweetness: 80 };
const onion = { name: "Vegetable", hasSeeds: false };

/* Upravte následující funkci tak, aby vracela stupeň sladkosti, pokud jej potravina obsahuje
nebo chybu, pokud jej neobsahuje */
const getSweetness = (fruit?: Fruit): number => {
    const sweetness = fruit.sweetness;

    return sweetness;
};

// Přidejte typový alias a opravte typovou chybu pomocí "narrowingu"
const logValue = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
};

// Tento interface je návrhově špatně – vlastnosti se překrývají a nejsou nijak vynucené podle typu vozidla.
interface MyVehicle {
    type: "car" | "bicycle" | "train";
    numberOfDoors?: number;
    fuel?: "gasoline" | "diesel" | "electric";
    gearCount?: number;
    hasBell?: boolean;
    carriages?: number;
    maxSpeed?: number;
}

// Úkol: Opravte tento návrh tak, aby:
// 1. Každý typ vozidla měl pouze vlastnosti, které opravdu dává smysl mít
// 2. Funkce describeVehicle správně fungovala pro všechny typy
// 3. Zajistěte, že při přidání dalšího typu vozidla vás TypeScript na opomenutou větev upozorní

const describeVehicle = (vehicle: MyVehicle): string => {
    if (vehicle.type === "car") {
        return `Auto na ${vehicle.fuel}, ${vehicle.numberOfDoors} dveře.`;
    } else if (vehicle.type === "bicycle") {
        return `Kolo s ${vehicle.gearCount} převody. Zvoní? ${vehicle.numberOfDoors}`;
    } else {
        return `Vlak o ${vehicle.carriages} vagonech jede max. ${vehicle.fuel} km/h.`;
    }
};