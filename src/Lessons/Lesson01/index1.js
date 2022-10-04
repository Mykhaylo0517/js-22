console.log("Hello bro");

let number = 5;
number = 10;
console.log(number);


let data = 25;
let note = "Text";
note = data;
console.log(note, data);

const PI = 3.14; // Name should be in UPPER case

// Comments - 2 types
// Message output   - select code and press Ctrl+/ 

/* 
alert("Message");
alert("Another message");
*/

// Data types
console.log(100 / 0); // Infinity
console.log(-100 / 0); // -Infinity
console.log("some string" * 5); // NaN - Not-a-Number, calculation error

// Boolen Data (type)
let isValid = true;
isValid = false;
console.log(isValid);

var age = 15;
age = null; // Value deletion

var u;
console.log(u); // Value undefined

let x = 123;
x = undefined;
// null - окремий тип, що складається з одного значення null. 
// Присвоєння значення null означає, що змінна має деяке невизначене 
//значення (не число, не рядок, не логічне значення), 
//але все-таки має значення

// undefined - спеціальне значення, яке, як і null, утворює свій власний тип. 
//Воно має сенс значення не присвоїли


// Data type. Object
// const newObj = {};

const users = {
   firstName: "Alex", 
   lastName: "Heetch",
   email: "box@gmail.com",
   age: 28
};
console.log(users);

// Data types. Dynamic (weak) typing
// let x; // type undefined
// console.log(x); // undefined

x = 45; // type number
console.log(x); // 45

x = "Bob"; // type string
console.log(x); // “Bob"

// Data types. typeof 
let name = "Tom";
console.log(typeof name); // "string"

let income = 45.8;
console.log(typeof income); // "number"

let isEnabled = true;
console.log(typeof isEnabled); // "boolean"

let undefVariable;
console.log(typeof undefVariable); // "undefined"

let nullVariable = null;
console.log(typeof nullVariable); // "object"

// User interaction. alert()
alert("Hello JS!");

// User interaction. prompt()
let name2 = prompt("What is your name, Vasya?", "Carl");
alert(name2);
console.log(name2); 
console.log("Hello " + name2 + ", Welcome on board"); 
console.log(`Hello  ${name2}, welcome on board`); 

// User interaction. confirm()
// The result will be true when you click OK and false if CANCEL (Esc).
let isAdmin = confirm("Are you an administrator?");
alert(isAdmin);
