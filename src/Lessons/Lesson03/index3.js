// Loops... Loops... Loops... Loops... Loops... Loops... Loops... Loops... Loops... Loops... 

// let i = 0;
// while (i < 3) {    // prints 0, then 1, then 2
//   	alert( i );
//  	  i++;
// }

// let i = 0;
// do { 
//   	alert( i );
//  	  i++;
// } while (i < 3)

// for(let count = 0; count < 10; count++) { 
//   console.log("Current Count : " + count);
// }

// for (let i=0; i<=5; i+=2) { 
//   console.log(i); // 0,2,4
// }

// let names = ["Ivan", "Jane", "John", "James1", "James2", "James3"];
// for (let i=0; i<6; i+=1) { 
//    console.log(names[i]); // all names
// }

// for (let i=0; i<names.length; i+=1) { 
//   console.log(names[i]); // all names
// }

// for (let i=names.length-1; i >= 0; i-=1) { 
//   console.log(names[i]); // all names
// }

// for (let i in names) { 
//   console.log(names[i]); // all names
// }

// let names = ["Ivan", "Jane", "John", "James1", "James2", "James3"];
// for(let i of names){
//   console.log(i); // all names
// }

// let str = 'Message';
// // let a;
// for (let a of str) {
//   document.write(a + "<br>");
// }

// let k = 1;
// while (true) {			// run 3 times
//    if (k == 4) {
//       break;
//    }
//    console.log(k);
//    k++;
// }

// let names = ["Ivan", "Jane", "John", "James1", "James2", "James3"];
// for (let i=0; i<names.length; i+=1) { 
//   console.log(names[i]);
//   if(names[i] === "Jane"){
//     console.log("We found !!!", names[i]); // all names
//     break;
//   }
// }

// let names = ["Ivan", "Jane", "John", "James1", "James2", "James3"];
// for (let i=0; i<names.length; i+=1) { 
//   if(names[i] === "Jane"){
//     continue;
//   }
//   else{
//     console.log(names[i]);
//   }
// }

// for (let k = 1; k <= 10; k++) {		// run 10 times
//   if (k == 5) {
//      continue;
//   }
//   console.log(k); 		// 1,2,3,4,6,7,8,9,10
// }


// Function... Function... Function... Function... Function... Function... Function... 

// function testFunction() {
//   console.log("names efewf");
// }
// testFunction();

// function testFunction() {
//   return "names efewf"
// }
// let message = testFunction();
// console.log(message);

// function showMessage(message){
//   console.log(message);
// }
// showMessage("svnslknvlsdfnv")

// function multiply(a, b) {
//   let PI = Math.PI;
//   return a * b * PI;
// }
// console.log(multiply(2,3));

// function multiplication(a, b, c) {
//     if (b === undefined) {
//        b = 1;
//     }
//     if (c === undefined) {
//        c = 1;
//     }
//     let result = a * b * c;
//     console.log(result);
//  }
//  multiplication(2);

// function multiply(){
//     console.log(arguments)
// }
// multiply(1,2,3,4,5,5,5,6,6,7,7,8,89,0);

// function multiplication() {
//     let result = 1;
//     for (let i = 0; i < arguments.length; i++) {
//               result *= arguments[i];
//     }
//     console.log(result);
// }
// multiplication(1,2,3,4,5,5,5,6,6,7,7,8,89,1);

// function multiplication() {
//     let result = 1;
//     for (let i in arguments) {
//               result *= arguments[i];
//     }
//     console.log(result);
// }
// multiplication(1,2,3,4,5,5,5,6,6,7,7,8,89,1);

// function sayHello() {
//     console.log("Hello!");
//  }
//  let hello = sayHello;
//  hello();    // "Hello!"
 
// let sayHi = function(){
//         console.log("Hi!");
// }
// sayHello(); // "Hello!"
// sayHi();    // "Hi!"

// Function as parameter... Function as parameter... Function as parameter... 

// function sum(x, y){
//     return x + y;
// }
// function subtract(x, y){
//     return x - y;
// }
// function operation(x, y, func){
//     let result = func(x, y);
//     console.log(result);
// }
// console.log("Sum");
// operation(10, 6, sum); // 16 
// console.log("Subtract");
// operation(10, 6, subtract); // 4
    
// // Recursion
// function calcFactorial(n) {
//     if (n == 1) {
//        return 1;
//     } else {
//        return n * calcFactorial(n - 1);
//     }
//  }
//  let res = calcFactorial(4); 
//  // calcFactorial(4) = 4 * calcFactorial(3)
//  // calcFactorial(3) = 3 * calcFactorial(2)
//  // calcFactorial(2) = 2 * calcFactorial(1)
//  // calcFactorial(1) = 1
//  console.log(res); // 24
 
// // Immediately Invoked Function Expression (IIFE)
// (function () {
//     console.log("I like JavaScript");
//  }()); // "I like JavaScript"
 
// (function (message) {
//     console.log(message);
//  }("Hello!")); // "Hello!"


// Closure... Closure... Closure... Closure... Closure... Closure... Closure...
// function sum(){
//     let a=1;
//     let b=1;
//     return a=a+b;
//     }
// console.log(sum()); // 2
// console.log(sum()); // 2
// console.log(sum()); // 2

// function sum(){
//     let a =1;
//     let b=1;
//     return function(){
//         return a=a+b;
//         };
//     }
// let c=sum();
// console.log(c());   // 2
// console.log(c());   // 3
// console.log(c());   // 4
    