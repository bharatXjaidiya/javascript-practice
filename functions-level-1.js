// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello(){
    console.log("hello javascript");
}
// 2. Create a function `add(a, b)` that returns their sum and log the result.
function sum(a,b){
    console.log(a+b)
    return (a+b);
}
// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function greeting(name = "Guest"){
    console.log("hi" + name);
}
// 4. Use rest parameters to make a function that adds unlimited numbers.
function addUnlimited(...rest){
    let sum = null;
    rest.forEach(element => {
        sum += element;
    });
    return sum;
}
// 5. Create an IIFE that prints `"I run instantly!"`.
(function(){
    console.log("i run instantly")
})()
// 6. Make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let a = 5;
    function inner(){
        console.log(a);
    }
    inner();
}

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruites = ["apple","bannana","papaya","orange","peers"];
fruites.shift()
fruites.unshift("cherry")
// 8. Use a `for` loop to print all elements of an array.
for(let i=0; i<fruites.length;i++){
    console.log(fruites[i])
}
// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person ={
    name:"bharat",
    city:"bathinda",
    age:19
}
for(key in person){
    console.log(person[key]);
}
// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout(() => {
    console.log("times up")
}, 2000);