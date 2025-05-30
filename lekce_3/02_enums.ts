/* Enums - výčtové typy */

const getDayName = (day: number) => {
    if (day === 0) return "Neděle";
    if (day === 1) return "Pondělí";
    if (day === 2) return "Úterý";
    return "Neznámý den";
}

const day = 1;
// Zde vysvětlíme:
// Čísla nemají žádný význam bez komentáře nebo dokumentace
// Možné chyby z nepochopení, co která hodnota znamená
console.log(getDayName(day)); // "Pondělí", ale proč je 1 pondělí?

// Numerický enum
enum Day {
    Sunday,
    Monday,
    Tuesday,
}

const getDayNameWithEnum = (day: Day): string => {
    if (day === Day.Sunday) return "Neděle";
    if (day === Day.Monday) return "Pondělí";
    if (day === Day.Tuesday) return "Úterý";
    return "Neznámý den";
}

const dayFromEnum = Day.Monday;
console.log(getDayNameWithEnum(dayFromEnum)); // "Pondělí"
console.log(getDayNameWithEnum(1)); // "Pondělí"
console.log(getDayNameWithEnum(12));


// Enum s řetězci
// Kod pošleme účastnicím a požádáme a vymyšlení enumu a použití v kódu
const processPayment = (method: string) => {
    if (method === "card") {
        console.log("Platba kartou");
    } else if (method === "cash") {
        console.log("Platba hotově");
    } else if (method === "bank-transfer") {
        console.log("Platba převodem");
    }
}

processPayment("card"); // ✅ OK
processPayment("crad"); // ❌ překlep, ale TS to nepozná!

// ŘEŠENÍ:
enum PaymentMethod {
    Card = "card",
    Cash = "cash",
    BankTransfer = "bank-transfer",
}

// - Enumy jsou jedna z mála věcí v TypeScriptu, které existují i za běhu (runtime)
// - Při kompilaci se překládají do reálných JS objektů → zvětšují bundle
// - Často je lepší použít literal union (např. "card" | "cash" | "bank-transfer")
// - Enum má smysl, pokud potřebujeme k hodnotám přistupovat dynamicky v běhu programu