// Task 7. 
// 7. Напишіть функцію, яка повертає останній елемент масиву. 
// Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, 
// що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function showLastElements(arr, count) {
    if (count == null) {
        console.log(arr.pop())
        } 
        else {
            console.log(arr.slice(-count));
        }
    }
console.log(showLastElements([3, 4, 10, -5]) );
console.log(showLastElements([3, 4, 10, -5], 2));
console.log(showLastElements([3, 4, 10, -5], 8));