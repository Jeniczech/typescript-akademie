# 🧠 TypeScript – Úkol: Práce s typy, objekty a funkcemi

## 🔹 Instrukce

### 1. Definujte typy:
- Definujte typ `Role`, který může nabývat hodnot `"Student"`, `"ClassRep"` (Class Representative), nebo `"Prefect"`.
- Definujte typ `Subject`, který může být `"Math"`, `"Science"`, `"History"` nebo `"Language"`.

### 2. Vytvořte typy pro objekty:
- Definujte typ `Grade`, který obsahuje:
   - `subject` typu `Subject`
   - `score` typu `number`
- Definujte typ `Student`, který obsahuje:
   - `id` typu `number`
   - `firstName` typu `string`
   - `lastName` typu `string`
   - `age` typu `number`
   - `role` typu `Role`
   - `grades` typu `Grade[]`
   - volitelnou vlastnost `extraInfo` typu `string`

### 3. Vytvořte pole pro uložení studentů:
- Deklarujte konstantu `students`, což je pole typu `Student[]`, a inicializujte ji jako prázdné pole.

### 4. Napište následující funkce:
- `addStudent(student: Student): void` – přidá studenta do pole `students`.
- `getStudentDetails(id: number): Student | undefined` – vrátí detail studenta podle jeho `id`.
- `calculateAverageGrade(grades: Grade[]): number` – vypočítá průměrnou známku z pole `grades`.

### 5. Přidejte vzorové studenty:
- Vytvořte objekt `student1` typu `Student`, včetně známek a volitelného `extraInfo`.
- Vytvořte objekt `student2` s jinými hodnotami.

### 6. Práce s daty:
- Přidejte `student1` a `student2` do pole `students` pomocí funkce `addStudent`.
- Pomocí funkce `getStudentDetails` získejte detaily `student1` a vypište je do konzole (`console.log`).
- Pomocí funkce `calculateAverageGrade` vypočítejte a vypište průměrnou známku `student1`.

### 7. Kompilace do JavaScriptu:
- Vytvořte soubor s příponou `.ts` (např. `main.ts`) a vložte do něj váš kód.
- Pomocí příkazu `tsc` zkompilujte TypeScript do JavaScriptu:

```bash
npx tsc main.ts
```

---

## 🔸 8. Využití utility typů
- Pomocí `Pick` vytvořte typ `StudentPreview`, který obsahuje pouze `id`, `firstName`, `lastName` a `role` ze struktury `Student`.
- Pomocí `Omit` vytvořte typ `StudentPrivate`, který obsahuje všechny vlastnosti kromě `grades` a `extraInfo`.

### 💡 Bonus:
- Vytvořte funkci `getStudentPreview(id: number): StudentPreview | undefined`.
- Vytvořte funkci `getStudentPrivate(id: number): StudentPrivate | undefined`.

---

## 🔸 9. Práce s union typy
- Přidejte nový typ `SchoolPerson = Student | Teacher` (kde `Teacher` má vlastnosti: `id`, `fullName`, `subjects: Subject[]`).
- Napište funkci `printPersonInfo(person: SchoolPerson): void`, která podle typu (`Student` vs `Teacher`) vypíše buď známky, nebo vyučované předměty.

---

## 🔸 10. Typové stráže
- Napište typovou stráž (`type guard`) `function isStudent(person: SchoolPerson): person is Student`.
- Použijte ji ve funkci `printPersonInfo`, aby výstupem byla informace o `Student` nebo `Teacher`.

---

## 🔸 11. Mapování studentů podle předmětu
- Napište funkci `groupStudentsBySubject(students: Student[]): Record<Subject, Student[]>`, která seskupí studenty podle předmětů, ve kterých mají známky.

---

## 🔸 12. Bonusova výzva
- Použijte `Record<Role, number>` při vytvoření funkce `countByRole` která počítá, kolik studentů má jakou roli.

---