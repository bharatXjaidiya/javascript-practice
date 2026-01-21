// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function hof(a){
    for(let i=0; i<2; i++){
        a();
    }
}
hof(function(){console.log("hello ji ")})

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
let b=5;
function pure(a){
    return a;
}
function impure(a){
    b = b +8;
    return a += Math.random();
}
console.log(pure(5));
console.log(impure(5));
console.log(b)
// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function destruct({name,age}){
    console.log(name,age)
}
let obj ={
    name:"bharat",
    age:19
}
destruct(obj);
// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
let obj2 = {
    name :"bharat",
    fun1:function(){
        console.log(this)
        let fun3 =()=>{
            console.log(this)
        }
        fun3()
    },
    fun2:()=>{
        console.log(this)
    }
}
obj2.fun1();
obj2.fun2();

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr =[1,2,3,4,5];
let newArr = arr.map((e)=>{
    return e*e
})
console.log(newArr)
// 6. Use `filter()` to get only even numbers from an array.
let evenArr = arr.filter((e)=>{
    return e%2===0;
})
console.log(evenArr)
// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let numbers = [1000, 2000, 3000];
let totalSalary = numbers.reduce((acc,val)=>{
    return acc += val;
},0)
console.log(totalSalary)
// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
let names = ["bharat","payal","jin"];
let someAns = names.some((e)=>{
    return e.length > 3;
})
let everyAns = names.every((e)=>{
    return e.length > 3;
})
console.log(someAns,everyAns)
// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
let object = {
    name:"Bharat",
    age:19
}

Object.freeze(object); //value of any key can't be manupulated and no new key can be added
Object.seal(object); //value can be manupulated but new key can't be added 
// 10. Create a nested object (`user → address → city`) and access the city name inside it.

let user ={
    name : "bharat jaidiya",
    id : 55,
    address : {
        stNO : "12/6",
        city:{
            name : "bathinda",
            pincode : 151001
        }
    }
}
console.log(user.address.city.name)

