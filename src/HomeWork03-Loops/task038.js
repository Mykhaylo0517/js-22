// Task 8. 
// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву 
// кожного слова рядка в верхній регістр.
// Input string: 'i love java script' 
// Output string: 'I Love Java Script'

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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