/*
which statement creates a new object using Person constructor?

var student = new Person();

var student = construct Person();

var student = construct Person;

var student = Person()

console.log(student)

 */


// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


// Create Person object
const student = new Person("John", "Doe", 50, "blue");
console.log(student)