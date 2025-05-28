// Přidejte správné anotace parametrům funkce
const multiplyNumbers = (a: number, b: number): number => {
    return a * b;
};

// Přidejte správné anotace parametru funkce
const addNumbers = (numbers: { firstNumber: number; secondNumber: number }) => {
    return numbers.firstNumber + numbers.secondNumber;
};

// Upravte anotaci objektu adresy tak, aby adresa nemusela nutně obsahovat stát a PSČ
// Zkuste zjednodušit kód pomocí typového aliasu

type AddressParams = {
    street: string;
    city: string;
    state?: string;
    zip?: string;
};

const getAddress = (params: AddressParams) => {
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

const defaultVehicle: Vehicle = {
    make: 'Ford',
    numberOfWheels: 4,
    VIN: '123',
    isFunctional: true,
};

const getVIN = (input: Vehicle) => {
    return input.VIN;
};

getVIN(defaultVehicle);

// Vlastnost level objektu Developer by měla obsahovat pouze tyto hodnoty: junior, medior, senior.
// Zkuste zjednodušit kód pomocí typového aliasu
type Level = "junior" | "medior" | "senior";

type Developer = {
    id: number;
    firstName: string;
    lastName: string;
    level: Level;
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

type Product = Fruit | Vegetable;

// Doplňte správnou anotaci
const apple: Fruit = { name: "Apple", sweetness: 80 };
const onion: Vegetable = { name: "Vegetable", hasSeeds: false };

/* Upravte následující funkci tak, aby vracela stupeň sladkosti, pokud jej potravina obsahuje
nebo chybu, pokud jej neobsahuje */
const getSweetness = (fruit?: Fruit): number => {
    // Zde zmíníme, že podmínka (fruit.sweetness) by neprošla, pokud by hodnota sweetness byla "0"
    if (fruit.sweetness !== undefined) {
        return fruit.sweetness;
    }

    throw new Error("Fruit does not have sweetness");
};

// Přidejte typový alias a opravte typovou chybu pomocí "narrowingu"
const logValue = (value: string | number) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
};

interface Car {
    type: "car";
    numberOfDoors: number;
    fuel: "gasoline" | "diesel" | "electric";
}

interface Bicycle {
    type: "bicycle";
    gearCount: number;
    hasBell: boolean;
}

interface Train {
    type: "train";
    carriages: number;
    maxSpeed: number;
}

type MyVehicleSolution = Car | Bicycle | Train;

const describeVehicle = (vehicle: MyVehicleSolution): string => {
    switch (vehicle.type) {
        case "car":
            return `Auto s ${vehicle.numberOfDoors} dveřmi na ${vehicle.fuel}.`;
        case "bicycle":
            return `Kolo s ${vehicle.gearCount} převody, zvonek: ${vehicle.hasBell ? "ano" : "ne"}.`;
        case "train":
            return `Vlak s ${vehicle.carriages} vagony, maximální rychlost ${vehicle.maxSpeed} km/h.`;
        default:
            return vehicle;
    }
};