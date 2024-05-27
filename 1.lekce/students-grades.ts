enum Role {
    Student = "Student",
    ClassRep = "Class Representative",
    Prefect = "Prefect"
}

type Subject = "Math" | "Science" | "History" | "Language";

interface Grade {
    subject: Subject;
    score: number;
};

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    role: Role;
    grades: Grade[];
    extraInfo?: any;
}

const students: Student[] = [];

const addStudent = (student: Student) => {
    students.push(student);
};

const getStudentDetails = (id: number) => {
    return students.find(student => student.id === id);
};

const calculateAverageGrade = (grades: Grade[]) => {
    const total = grades.reduce((sum, grade) => sum + grade.score, 0);
    return grades.length > 0 ? total / grades.length : 0;
};

const student1: Student = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 20,
    role: Role.Student,
    grades: [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 90 },
    ],
    extraInfo: { hobbies: ["Reading", "Swimming"] }
};

const student2: Student = {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    role: Role.ClassRep,
    grades: [
        { subject: "History", score: 88 },
        { subject: "Language", score: 92 },
    ],
    extraInfo: "Prefers online classes"
};

addStudent(student1);
addStudent(student2);

const studentDetails = getStudentDetails(1);
console.log(studentDetails);

const averageGrade = calculateAverageGrade(student1.grades);
console.log(`Average Grade: ${averageGrade}`);
