// let a = 5;
// let b = 10;
// let result = a + b;
// console.log(result);

// console.log(8 % 4);
// console.log(7 % 3);
// console.log(8 % 3);

// let m = 5;
// let n = ++m; // prefix increment (first m increases by 1, then n=m)
// console.log(m,n);

// let k = 5;
// let l = k++; // postfix increment (first l=k, then k increases by 1)
// console.log(k,l);

// let k1 = 5;
// let l1 = k1--;     // postfix decrement (first l=k, then k decreases by 1)
// console.log(k1);  // 4
// console.log(l1);  // 5

// Math.pow(2,4);
// Math.sqrt(8,2);
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(8,2));

// let z = "Soft";
// let y = "serve";
// let res = z + y;
// console.log(res); // "Softserve"

// console.log(5 + "1");     // "51"
// console.log("5" + 1);     // "51"
// console.log("10" + true); // "10true"
// console.log("10" + null); // "10null"
// let z;
// console.log("1" + z);     

// console.log("5" - 2); // 3
// console.log(8 / "4"); // 2


// let z = 5;
// z += 2;    // z = z + 2;

// let z = 5;
// z -= 2;    // z = z - 2;

// let z = 5;
// z *= 2;    // z = z * 2;

// let z = 5;
// z /= 2;    // z = z / 2;

// let z = 5;
// z %= 2;    // z = z % 2;


// console.log(10 == 10); // true
// console.log(10 == 20); // false

// console.log(10 != 10); // false
// console.log(10 != 20); // true

// console.log(10 > 10); // false
// console.log(10 > 20); // false

// console.log(10 < 10); // false
// console.log(10 < 20); // true

// console.log(10 >= 10); // true
// console.log(10 >= 20); // false

// console.log(10 <= 10); // true
// console.log(10 <= 20); // true

// console.log("K" < "L"); // true
// console.log("SR" > "RS"); // true
// console.log("PRT" > "PRS"); // true, because "T" > "S"
// console.log("PRT" > "PR"); // true, because "T" more than nothing


// // for numbers - 0-false, 1-true
// // for strings - ""-false, "g"-true
// console.log(false == 0); // true
// console.log("1" == 1);   // true
// console.log(1 == "01");  // true
// console.log(true == 1);  // true

// // compare for type of data:
// console.log("1" === 1);   // false
// console.log(false === 0); // false
// console.log("1" !== 1);   // true

// console.log(null == null);             // true
// console.log(undefined == undefined);   // true
// console.log(null == undefined);        // true
// console.log(null === undefined);       // false

// console.log(null == 0);                // false
// console.log(null == "null");           // false
// console.log(undefined == 0);           // false
// console.log(undefined == "undefined"); // false

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// console.log(!true); // false
// console.log(!false); // true


// let x = prompt("Enter your number", "");
// let res = x >= 0 && x <= 100;
// console.log(res);

// let x = prompt("Enter your number", "");
// let res = x < 0 || x > 100;
// console.log(res);

// const a = 10;
// const b = 20;
// result = (a > b) ? 100 : 200;
// console.log(result); // 200	
// result = (a < b) ? "b more than a" : "b less than a";
// console.log(result); // b more than a


// Type Conversions. Type Conversions. Type Conversions. Type Conversions. Type Conversions. 

// let a = 20;
// let data = String(a);
// console.log(data); 			 // "20"
// console.log(typeof data); // "string"

// let a = 20;
// let data = a + "";
// console.log(data); 			 // "20"
// console.log(typeof data); // "string"

// let a = "20";
// let num = Number(a);
// console.log(num); 			// 20
// console.log(typeof num); // "number"

// let a = "20";
// let num = +a;
// console.log(num);     		// 20
// console.log(typeof num); // "number"

// console.log(parseInt("7")); // 7
// console.log(parseInt("7.5")); // 7
// console.log(parseInt("7nm")); // 7
// console.log(parseInt("nm")); // NaN

// console.log(parseFloat("7")); // 7
// console.log(parseFloat("7.125")); // 7.125
// console.log(parseFloat("7nm")); // 7
// console.log(parseFloat("nm")); // NaN

// console.log(isNaN(1)); // false
// console.log(isNaN("1")); // false
// console.log(isNaN("1m")); // true
// console.log(isNaN(true)); // false
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true

// let a = "1";
// let bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean" 

// let a = "1";
// let bln = !!a;
// console.log(bln); // true
// console.log(typeof bln); // "boolean"



// Arrays. index... Arrays. index... Arrays. index... Arrays. index... Arrays. index...
// const arr = [];
// const arr2 = new Array();

// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log( cities[0] );  // Rome
// console.log( cities[1] );  // Lviv
// console.log( cities[2] );  // Warsaw

// const array = [1, "hello", undefined, null, true];
// console.log( array );

// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[0]);  // Rome
// cities[0] = "Berlin";
// console.log(cities[0]);  // Berlin

// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[5]);  // undefined – there are only three elements in 
// console.log(cities.length);    // 3
// cities[7] = "London";
// console.log(cities[7]);  // London
// console.log(cities.length);    // 8


// Arrays methods... Arrays methods... Arrays methods... Arrays methods... Arrays methods... Arrays methods...
// push(... items) - adds items to the end of the array
// pop() - removes the element at the end of the array and returns it.
// shift() - removes the element at the beginning of the array and returns it.
// unshift(... items) - adds items to the beginning of the array.
// slice(start, end) – creates a new array, copying elements from start to end (not including end) into it.
// splice(pos, deleteCount, ...items) – starting at the pos index, removes deleteCount items and inserts items.
// concat(...items) – returns a new array: copies all members of the current array and adds items to it.
// forEach(func) – calls func for each element (enumeration)
// map() – creates a new array with the results of calling a function for every array element.

// let numbers = [1,2,3,4,5,6,7];
// numbers.push(8);
// console.log(numbers); // (8) [1, 2, 3, 4, 5, 6, 7, 8]
// numbers.pop();
// console.log(numbers); // (7) [1, 2, 3, 4, 5, 6, 7]
// numbers.unshift(0);
// console.log(numbers); // (8) [0, 1, 2, 3, 4, 5, 6, 7]
// numbers.shift(0);
// console.log(numbers); // (7) [1, 2, 3, 4, 5, 6, 7]

// let newNumbers = numbers.slice(1,5);
// console.log(newNumbers); // (4) [2, 3, 4, 5]

// let students = ["Ivan", "Petro"];
// let newStudents = ["Vasyl", "Andriy", "Misha"];
// let allStudents = students.concat(newStudents); 
// console.log(allStudents); // (5) ['Ivan', 'Petro', 'Vasyl', 'Andriy', 'Misha']

// let students = ["Ivan", "Petro"];
// let newStudents = ["Vasyl", "Andriy", "Misha"];
// let allStudents = [...students, ...newStudents];
// console.log(allStudents); // (5) ['Ivan', 'Petro', 'Vasyl', 'Andriy', 'Misha']


// Conditional Statements... Conditional Statements... Conditional Statements... Conditional Statements... 

// let a = 10;
// if (a>0){
//     console.log("a is more than 0");
// }else{
//     console.log("a is less than 0");
// }

// let a = -10;
// if (a>0){
//     console.log("a is more than 0");
// }else if(a=-10){
//     console.log("a = -10");
// }

// let a = 12;
// if (a>0 || a === 10){
//     console.log("a is more than 0");
// }else if(a === -10){
//     console.log("a = -10");
// }

// let a = 10;
// if (a>0 && a === 10){
//     console.log("a is more than 0");
// }else if(a === -10){
//     console.log("a = -10");
// }

// if (5) {
//     console.log("Always running"); // Always running
//  } else {
//     console.log("Never done");
//  }

// const a = 11;
// if (a > 0) {
//    console.log("Number " + a + " positive"); // Number 11 positive
// } else if (a < 0) {
//    console.log("Number " + a + " negative");
// } else {
//    console.log("Number " + a + " is exactly zero");
// }

const number = 3 * 3;
switch (number) {
  case 8:
    console.log( 'Too small' );
    break;
  case 9:
    console.log( 'Exactly!' );
    break;
  case 10:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
}
