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
// 6. Manipulace s daty
addStudent(student1);
addStudent(student2);
var studentDetails = getStudentDetails(1);
console.log(studentDetails);
var averageGrade = calculateAverageGrade(student1.grades);
console.log("Average Grade: ".concat(averageGrade));
