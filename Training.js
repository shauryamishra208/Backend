let s1 = "Hello";
let s2 = "World";
let s3 = 'Node.js Backend';

console.log(s1);
console.log(s2);
console.log(s3);

// String length
let text = "JavaScript";
console.log("Length:", text.length);

//Access Characters (Index)
let word = "Node";
console.log(word[0]); // N
console.log(word[1]); // o

//toUpperCase()
let name = "aman";
console.log(name.toUpperCase()); // AMAN

//toLowerCase()
let city = "DELHI";
console.log(city.toLowerCase()); // delhi

//trim()
let msg = "hello world";
console.log(msg.trim()); // "hello world"

//includes()
let sentence = "I love programming";
console.log(sentence.includes("love")); // true



//startswith()
let email = "admin@gmail.com";
console.log("Starts with email:",email.startsWith("admin")); // true

//endswith()
console.log("Ends with .com:",email.endsWith(".com")); // true

//slice()
let lang = "JavaScript";
console.log("Slice(0,4):",lang.slice(0, 4)); // Java        

//substring()
console.log("Substring(4,10):",lang.substring(4, 10)); // Script        

//replace()
let greet = "Hello World";
console.log("Replace:",greet.replace("World", "Node")); // Hello Node.js

//replaceAll()
let hiText = "hi hi hi";
console.log("Replace all:",hiText.replaceAll("hi", "hello")); // hello hello hello

//concat()  
let a = "Hello";
let b = "world";
console.log("Concat:",a.concat(" ", b)); // Hello world

//template literals
let userName = "Aman";
let age = 22;
console.log(`My name is ${userName} and age is ${age}`); // My name is Aman and age is 22

//string comparssion 
let password ="1234";
let inputpass = "1234";
console.log("Password Match:",password===inputpass); // true    

//string immutability
let str = "hello";
str.toUpperCase();
console.log("Immuatable String:",str); // hello

//Email Validation
let userEmail = "user@gmail.com";
if (userEmail.includes("@") && userEmail.endsWith(".com")) {
    console.log("Valid Email");
}else{
    console.log("Invalid Email");       
}        

//Real Backend Example - Password Trim
let userPassword ="admin123";
userPassword=userPassword.trim();
console.log("Trimmed Paasword:",userPassword); // admin123

//count word in string
let sentence2 = "Node js backend learning";
let words = sentence2.split(" ");
console.log("Word Count:",words.length); // 4

