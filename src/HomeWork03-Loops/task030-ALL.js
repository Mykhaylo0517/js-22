// all tasks. 

let numTask = Number(prompt("Enter valid number of task ..", "1 or 2 or 3 or ..."));
while (!(numTask===1 || numTask===2 || numTask===3 || numTask===4 || numTask===5 || 
    numTask===6 || numTask===7 || numTask===8)) {
    numTask = Number(prompt("Please enter corrct number of task)...", "1"));
};

function tasksHomeWork03(numTask){
    switch (numTask) {
    case 1: 
        console.log("Task 1");
        // Task 1
            let arrMulti = [2,3,4,5];
            let resFor = 1;
            let resWhile = 1;
            for (let i in arrMulti) {
                resFor *= arrMulti[i];
            }

            let j = 0;
            do { 
                resWhile = resWhile * arrMulti[j];
                j++;
            } while (j < arrMulti.length);

            console.log("result by FOR = ", resFor); // 120
            console.log("result by WHILE = ", resWhile); // 120
        break;

    case 2: 
        console.log("Task 2");
        // Task 2
            for (let i = 0; i <= 15; i++) {
                if (i%2 == 0) {
                    console.log(`${i} is even.`);
                } else {
                    console.log(`${i} is odd.`);
                }
            }
        break;

    case 3: 
        console.log("Task 3");
        // Task 3
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
        break;

    case 4: 
        console.log("Task 4");
        // Task 4
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
        break;

    case 5: 
        console.log("Task 5");
        // Task 5
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
        break;

    case 6: 
        console.log("Task 6");
        // Task 6
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
        break;

    case 7: 
        console.log("Task 7");
        // Task 7
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
        break;

    case 8: 
        console.log("Task 8");
        // Task 8
            function upperCaseFirstLetter(str) {
                let oldArr = str.split(" ");
                let newArr = [];
                for (let i = 0; i < oldArr.length; i++) {
                    newArr.push(oldArr[i].charAt(0).toUpperCase()+oldArr[i].slice(1));
                }
                return newArr.join(" ");
            }
            console.log(upperCaseFirstLetter("i love java script"));
            console.log(upperCaseFirstLetter(" "));
            console.log(upperCaseFirstLetter("i love java s  "));
            console.log(upperCaseFirstLetter("   i love java script "));
            console.log(upperCaseFirstLetter("I love java script"));
        break;

    default: 
    console.log("Default case");
        break;
    }
};

tasksHomeWork03 (numTask);
