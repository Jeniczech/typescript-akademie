var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 3. Pole studentů
var students = [];
// 4. Funkce
var addStudent = function (student) {
    students.push(student);
};
var getStudentDetails = function (id) {
    return students.find(function (student) { return student.id === id; });
};
var calculateAverageGrade = function (grades) {
    if (grades.length === 0)
        return 0;
    var total = grades.reduce(function (sum, grade) { return sum + grade.score; }, 0);
    return total / grades.length;
};
// 5. Vzoroví studenti
var student1 = {
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
var student2 = {
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
var student3 = {
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
var student4 = {
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
var studentDetails = getStudentDetails(1);
console.log("Detaily studenta:", studentDetails);
var averageGrade = calculateAverageGrade(student1.grades);
console.log("Pr\u016Fm\u011Brn\u00E1 zn\u00E1mka: ".concat(averageGrade));
var getStudentPreview = function (id) {
    var student = students.find(function (s) { return s.id === id; });
    if (!student)
        return undefined;
    var studentId = student.id, firstName = student.firstName, lastName = student.lastName, role = student.role;
    return { id: studentId, firstName: firstName, lastName: lastName, role: role };
};
var getStudentPrivate = function (id) {
    var student = students.find(function (s) { return s.id === id; });
    if (!student)
        return undefined;
    var grades = student.grades, extraInfo = student.extraInfo, rest = __rest(student, ["grades", "extraInfo"]);
    return rest;
};
function isStudent(person) {
    return "grades" in person;
}
var printPersonInfo = function (person) {
    if (isStudent(person)) {
        console.log("".concat(person.firstName, " ").concat(person.lastName, " je student."));
        console.log("Známky:", person.grades);
    }
    else {
        console.log("".concat(person.fullName, " je u\u010Ditel."));
        console.log("Vyučuje předměty:", person.subjects.join(", "));
    }
};
// 11. Seskupení studentů podle předmětu
var groupStudentsBySubject = function (students) {
    var grouped = {
        Math: [],
        Science: [],
        History: [],
        Language: []
    };
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        for (var _a = 0, _b = student.grades; _a < _b.length; _a++) {
            var grade = _b[_a];
            var subject = grade.subject;
            if (!grouped[subject].includes(student)) {
                grouped[subject].push(student);
            }
        }
    }
    return grouped;
};
var grouped = groupStudentsBySubject(students);
console.log("Seskupení podle předmětů:", grouped);
// 12. Počet studentů podle Role
var countByRole = function (students) {
    var counts = {
        Student: 0,
        ClassRep: 0,
        Prefect: 0
    };
    for (var _i = 0, students_2 = students; _i < students_2.length; _i++) {
        var student = students_2[_i];
        counts[student.role]++;
    }
    return counts;
};
console.log("Počty podle role:", countByRole(students));
