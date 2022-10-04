// Task 1. 
// 1. Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, 
// оперуючи при цьому змінними х і у.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let x = 1;
let y = 2;

let res1 = x + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log("res1 = ", res1); // "12"
console.log("type of res1 =", typeof res1); // "string"

let res2 = (x == x) + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log("res2 = ", res2); // "true2"
console.log("type of res2 =", typeof res2); // "string"

let res3 = (x != y); // Допишіть код, необхідно використовувати змінні x і y
console.log("res3 = ", res3); // true
console.log("type of res3 =", typeof res3); // "boolean"

let res4 = ("characters" + x) * y; // Допишіть код, необхідно використовувати змінні x і y
console.log("res4 = ", res4); // NaN
console.log("type of res4 =", typeof res4); // "number"