// Task 4. 
// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до 
// степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс 
// введення чисел a, b з клавіатури.
// Sample Output:
// raiseToDegree(3, 4);  // 81

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function raiseToDegree(a,b) {
    let res = a ** b;
    return res;
}

let a = Number(prompt('a?', ''));
while ((!Number.isInteger(a)) || (a < 0)) {
    a = Number(prompt("try again (need to enter natural number)...", ""));
}
let b = Number(prompt('enter degree - b?', ''));
while ((!Number.isInteger(b)) || (b < 0)) {
    b = Number(prompt("try again (need to enter natural number for degree)...", ""));
}

console.log(a + " ** " + b + " = " + raiseToDegree(a,b));