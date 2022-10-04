// Task 3. 
// 3. Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь-яке число;
// 2) У другий елемент масиву запишіть будь-який рядок;
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const arrNew = [];
arrNew.push(8);
arrNew.push("first line");
arrNew.push(true);
arrNew.push(null);
document.writeln("Q-ty elements = ", arrNew.length);
console.log("Q-ty elements = ", arrNew.length);

arrNew[4]=prompt("Enter new value for fifth element.", "");
document.writeln("The fifth element = ", arrNew[4]);
console.log("The fifth element = ", arrNew[4]);

arrNew.shift(0);
document.writeln("New array contains ", arrNew.length, " following elemnts: ", arrNew);
console.log("New array contains ", arrNew.length, " following elemnts: ", arrNew);  