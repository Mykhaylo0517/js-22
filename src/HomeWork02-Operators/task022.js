// Task 2. 
// 2. Користувач вводить число (використовуйте prompt ()). 
// Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let nNumb = prompt("Enter any number:");
if ((nNumb > 0) && ((nNumb % 2) == 0) && ((nNumb % 7) == 0)) {
    console.log("This number is a positive and a multiple of 2 and 7.");
    } else {
        if ((nNumb % 7) == 0) {
            console.log("This number is a multiple of 7.");
            } else {
                if ((nNumb > 0) && ((nNumb % 2) == 0)) {
                    console.log("This number is a positive and a multiple of 2.");
                    } else {                        
                        console.log("You entered an invalid number."); 
                        }
                }
        }