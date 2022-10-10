// Task 1. 
// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть 
// добуток елементів цього масиву. Також реалізуйте завдання через while.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
