"use strict";
function myname(name, age) {
    console.log("Hello " + name + " you are " + age + " years old");
}
myname("John", 23);
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// function isLegal(age:number):boolean {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLegal(18));
function runAfter1s(fn) {
    setTimeout(fn, 4000);
}
runAfter1s(() => {
    console.log("After 1 second");
});
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let x = isLegal({ name: "John", age: 23 });
console.log(x);
