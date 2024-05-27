// Přidejte správné anotace parametrům funkce

const multiplyNumbers = (a, b) => {
    return a * b;
};


// Přidejte správné anotace parametru funkce
const addNumbers = (numbers) => {
    return numbers.firstNumber + numbers.secondNumber;
};

// Upravte anotaci objektu addresy tak, aby adresa nemusela nutně obsahovat stát a PSČ
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

// Použijte anotaci tak, abyste byli o chybě informování na řádku 40
interface Vehicle {
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
interface Developer {
    id: number;
    firstName: string;
    lastName: string;
    level: string;
}

const developer: Developer = {
    id: 1,
    firstName: "Johnny",
    lastName: "Black",
    level: "NOT_ALLOWED_STRING",
};

const test = (item: Developer) => {
    if (item.level === 'junior') {
        console.log('No raise for you!');        
    }
};

// Vytvořte union type, který zahrnuje obě dvě následující interfaces
interface Fruit {
  name: string;
  sweetness?: number;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

// Naraďte unknown spávnou anotací
const apple: unknown = { name: "Apple", sweetness: 80 };
const onion: unknown = { name: "Vegetable", hasSeeds: false };

// Upravte následující funkci tak, aby vracela stupeň sladkosti, pokud jej potravina obsahuje
// nebo chybu, pokud jej neobsahuje
const getSweetness = (fruit?: Fruit): number => {
    const sweetness = fruit.sweetness;

    return sweetness;
};