// 1. Typy Role a Subject
type Role = "Student" | "ClassRep" | "Prefect";
type Subject = "Math" | "Science" | "History" | "Language";

// 2. Typy Grade a Student
type Grade = {
    subject: Subject;
    score: number;
};

type Student = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    role: Role;
    grades: Grade[];
    extraInfo?: string;
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

// 6. Manipulace s daty

addStudent(student1);
addStudent(student2);

const studentDetails = getStudentDetails(1);
console.log(studentDetails);

const averageGrade = calculateAverageGrade(student1.grades);
console.log(`Average Grade: ${averageGrade}`);
