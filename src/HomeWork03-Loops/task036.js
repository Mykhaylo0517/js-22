// Task 6. 
// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на 
// унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), 
// то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < arr.length; j++){
            if (arr[i] === arr[j]) {
                return false;
            }
        } 
    }
    return true;
}
let arr1 = [1, 2, 3, 5, 3];
let arr2 = [1, 2, 3, 5, 11];
console.log(arr1 + " array has only uniques elements -- " + findUnique(arr1));
console.log(arr2 + " array has only uniques elements -- " + findUnique(arr2));