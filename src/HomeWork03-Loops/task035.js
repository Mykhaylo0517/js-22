// Task 5. 
// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових 
// аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете 
// скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function findMin() {
    let min = 9999999999999;
    for (let i = 0; i < arguments.length; i++) {
         if (min > arguments[i]) {
            min = arguments[i];
        } 
    }
    return min;
}
console.log("Case 0. Min value for array: " + findMin(12, 14, 4, -4, 0.2));
console.log("Case 1. Min value for array: " + findMin(12, 14, 4, -4, 0.2, -34, -36, 100, 0.24));
console.log("Case 2. Min value for array: " + findMin(12, 0.24));
console.log("Case 3. Min value for array: " + findMin(4));
console.log("Case 4. Min value for array: " + findMin(-4,  false, "fff"));
console.log("Case 5. Min value for array: " + findMin("BA", "b", "a", "AA", "c", -1, "Bf"));
console.log("Case 6. Min value for array: " + findMin(undefined, NaN, true, 0, "A"));
console.log("Case 7. Min value for array: " + findMin());