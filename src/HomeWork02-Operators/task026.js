// Task 6. 
// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази 
// для введення кожної сторони).
// Необхідно:
// a) визначити і вивести в консоль площу трикутника 
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// 
// Здійснювати перевірку чи введені користувачем значення коректні, 
// в іншому випадку вивести 'Incorrect data‘. 
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми 
// (наприклад:  8.42355465 =>  8.424).

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let a = Number(prompt("Please, enter the length of the first side of the triangle."));
let b = Number(prompt("Please, enter the length of the second side of the triangle."));
let c = Number(prompt("Please, enter the length of the third side of the triangle."));
let perimeterTriangle = a + b + c;

if (a>0 && b>0 && c>0) {
    let p = perimeterTriangle/2;
    let squareTriangle = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log("Square of the triangle = " + squareTriangle.toFixed(3));
}
else {
    alert("Incorrect data.");
}

// Is the triangle right-angled ?
if ((a*a + b*b === c*c) || (b*b+c*c === a*a) || (c*c+a*a === b*b)) {
    console.log("Triangle is right-angeled"); // Need to enter - 9, 12, 15
}
else {
    console.log("Triangle is NOT right-angeled");
}