// 1. Typy Role a Subject
type Role = "Student" | "ClassRep" | "Prefect";
type Subject = "Math" | "Science" | "History" | "Language";

// 2. Typy Grade a Student
type Grade = {
    subject: Subject;
    score: number;
};

type ExtraInfo = string | {
    hobbies: string[];
    note?: string;
};

type Student = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    role: Role;
    grades: Grade[];
    extraInfo?: ExtraInfo;
};

// 3. Pole studentů
const students: Student[] = [];

// 4. Funkce

const addStudent = (student: Student): void => {
    students.push(student);
};

const getStudentDetails = (id: number): Student | undefined => {
    return students.find(student => student.id === id);
};

const calculateAverageGrade = (grades: Grade[]): number => {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, grade) => sum + grade.score, 0);
    return total / grades.length;
};

// 5. Vzoroví studenti

const student1: Student = {
    id: 1,
    firstName: "Anna",
    lastName: "Nováková",
    age: 17,
    role: "Student",
    grades: [
        { subject: "Math", score: 80 },
        { subject: "Science", score: 90 },
        { subject: "Language", score: 85 },
    ],
    extraInfo: "Zajímá se o biologii"
};

const student2: Student = {
    id: 2,
    firstName: "Tomáš",
    lastName: "Krejčí",
    age: 18,
    role: "Prefect",
    grades: [
        { subject: "Math", score: 92 },
        { subject: "History", score: 88 },
        { subject: "Science", score: 75 },
    ]
};

const student3: Student = {
    id: 3,
    firstName: "Lucie",
    lastName: "Horáková",
    age: 16,
    role: "ClassRep",
    grades: [
        { subject: "Language", score: 95 },
        { subject: "History", score: 87 }
    ],
    extraInfo: {
        hobbies: ["čtení", "tanec"],
        note: "Velmi aktivní ve školním parlamentu"
    }
};

const student4: Student = {
    id: 4,
    firstName: "Honya",
    lastName: "Cuma",
    age: 16,
    role: "ClassRep",
    grades: [
        { subject: "Science", score: 87 }
    ],
    extraInfo: {
        hobbies: ["čtení", "tanec"],
        note: "Velmi aktivní ve školním parlamentu"
    }
};

// 6. Manipulace s daty

addStudent(student1);
addStudent(student2);
addStudent(student3);
addStudent(student4);

const studentDetails = getStudentDetails(1);
console.log("Detaily studenta:", studentDetails);

const averageGrade = calculateAverageGrade(student1.grades);
console.log(`Průměrná známka: ${averageGrade}`);

// 8. Utility typy – Pick a Omit

type StudentPreview = Pick<Student, "id" | "firstName" | "lastName" | "role">;

const getStudentPreview = (id: number): StudentPreview | undefined => {
    const student = students.find(s => s.id === id);
    if (!student) return undefined;
    const { id: studentId, firstName, lastName, role } = student;
    return { id: studentId, firstName, lastName, role };
};

type StudentPrivate = Omit<Student, "grades" | "extraInfo">;

const getStudentPrivate = (id: number): StudentPrivate | undefined => {
    const student = students.find(s => s.id === id);
    if (!student) return undefined;
    const { grades, extraInfo, ...rest } = student;
    return rest;
};

// 9. Union typ – SchoolPerson

type Teacher = {
    id: number;
    fullName: string;
    subjects: Subject[];
};

type SchoolPerson = Student | Teacher;

function isStudent(person: SchoolPerson): person is Student {
    return "grades" in person;
}

const printPersonInfo = (person: SchoolPerson): void => {
    if (isStudent(person)) {
        console.log(`${person.firstName} ${person.lastName} je student.`);
        console.log("Známky:", person.grades);
    } else {
        console.log(`${person.fullName} je učitel.`);
        console.log("Vyučuje předměty:", person.subjects.join(", "));
    }
};

// 11. Seskupení studentů podle předmětu

const groupStudentsBySubject = (students: Student[]): Record<Subject, Student[]> => {
    const grouped: Record<Subject, Student[]> = {
        Math: [],
        Science: [],
        History: [],
        Language: []
    };

    for (const student of students) {
        for (const grade of student.grades) {
            const subject = grade.subject;
            if (!grouped[subject].includes(student)) {
                grouped[subject].push(student);
            }
        }
    }

    return grouped;
};

const grouped = groupStudentsBySubject(students);
console.log("Seskupení podle předmětů:", grouped);

// 12. Počet studentů podle Role

const countByRole = (students: Student[]): Record<Role, number> => {
    const counts: Record<Role, number> = {
        Student: 0,
        ClassRep: 0,
        Prefect: 0
    };

    for (const student of students) {
        counts[student.role]++;
    }

    return counts;
};

console.log("Počty podle role:", countByRole(students));