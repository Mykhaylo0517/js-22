// Task 3. 
// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. 
// Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // [399,310,232,379,40]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function randArray(n) {
    let arr = [];
    let min = 1;
    let max = 500;
    for (let i = 0; i < n; i++) {
        arr [i] = (min + Math.random() * max).toFixed();
        // arr [i] = min + Math.floor(Math.random() * max);
        console.log(`for ${i} = ${arr[i]}.`);
    }
    console.log(arr);
}
randArray(5);