let studentForm = document.getElementById("studentForm");

let students = [];

function Student(first, last, age, email) {
    this.firstName = first;
    this.lastName = last;
    this.studentsAge = age;
    this.studentsEmail = email;
}

function showStudents(studentsArr) {
    for (let student of studentsArr) {
        console.log(`Name:${student.firstName} ${student.lastName} Age:${student.studentsAge} Email:${student.studentsEmail}`)
    }
}

let submitBtn = studentForm.getElementsByTagName("button")[0];

submitBtn.addEventListener('click', function() {
    let firstName = studentForm.children[0].value;
    let lastName = studentForm.children[1].value;
    let age = studentForm.children[2].value;
    let email = studentForm.children [3].value;

    let newStudent = new Student(firstName, lastName, age, email);
    
    students.push(newStudent);

    showStudents(students);

    studentForm.children[0].value = '';
    studentForm.children[1].value = '';
    studentForm.children[2].value = '';
    studentForm.children[3].value = '';
})