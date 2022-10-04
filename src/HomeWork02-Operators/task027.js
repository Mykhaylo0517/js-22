// Task 7. 
// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме 
// відповідне привітання. 
// Потрібно отримати реальний час доби із системи. 
// Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

let currentsDate = new Date();
let dayTime = currentsDate.getHours();
console.log("Current Date = ", currentsDate);
console.log("Current Time = ", dayTime);

let dayTime1 = dayTime; // need to emulate the current time
dayTime1 = 26; // or = 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
console.log("The time for checking = ", dayTime1);

// First method.
if ((dayTime1 >= 0 && dayTime1 <= 5) || (dayTime1 > 23 && dayTime1 <= 24)) {
    console.log("First method. Good night.");
} else if (dayTime1 > 5 && dayTime1 <= 11) {
        console.log("First method. Good morning.");
        }
        else if (dayTime1 > 11 && dayTime1 <= 17) {
            console.log("First method. Good day.");
            }
            else if (dayTime1 > 17 && dayTime1 <= 23) {
                console.log("First method. Good evening.");
                }
                else {
                    console.log("First method. Incorrect entered time!");
                    }

// Second method. 
let x = 0;
if (dayTime1 > 5 && dayTime1 <= 11) { 
    x = 1;
}   else if (dayTime1 > 11 && dayTime1 <= 17) {
    x = 2;
}   else if (dayTime1 > 17 && dayTime1 <= 23) {
    x = 3;
}   else if ((dayTime1 >= 0 && dayTime1 <= 5) || (dayTime1 > 23 && dayTime1 <= 24)) {
    x = 4;
}
switch (x) {
    case 1: 
        console.log("Second method. Good morning.");
        break;
    case 2: 
        console.log("Second method. Good day.");
        break;
    case 3: 
        console.log("Second method. Good evening.");
        break;
    case 4: 
        console.log("Second method. Good night.");
        break;
    default: 
    console.log("Second method. Incorrect entered time!");
}