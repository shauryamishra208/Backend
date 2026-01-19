//Variable
let name = "Aman";        // string
let age = 22;             // number
const country = "India";  // constant
let isStudent = true;     // boolean

console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);

// Data Types Example
let score;                // undefined
let data = null;          // null

console.log(score);
console.log(data);

// Object
let user = {
  name: "Rahul",
  age: 25,
  email: "rahul@gmail.com"
};
console.log(user);
console.log(user.name);

// Array
let numbers = [10, 20, 30, 40, 50];
let users = ["Aman", "Ravi", "Neha"];
console.log(numbers);
console.log(numbers[1]);

// 6 Operators 
let a = 10;
let b = 5;

console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Multi:", a * b);
console.log("Div:", a / b);

// 4 Conditional Statements(if-else)
let loginAge = 18;
if (loginAge >= 18) {
  console.log("Allowed to login.");
} else {
  console.log("Not login.");
}