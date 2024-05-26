let name: string = "Alice"; // String
let age: number = 30; // Number
let list: number[] = [1, 2, 3]; // Array
let person: { name: string; age: number } = { name: "Alice", age: 30 }; // Object
let tuple: [string, number] = ["Alice", 30];
let variable: any = "Could be anything";

enum Color { // Enum
    Red,
    Green,
    Blue = "blue"
  }

let color: Color = Color.Green;

interface Vehicle { // Interface
  make: string;
  nrOfDors: number;
  working: boolean;
  damagedParts?: string[];
}

let newVehicle: Vehicle;

let value: string | number; // Union type
value = "Hello";
value = 42;

let direction: "north" | "south" | "east" | "west"; // Literal union type
direction = "north";

type ID = string | number; // Type alias
let userId: ID;
userId = "abc123";
userId = 123;
