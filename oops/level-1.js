
// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.
// ⸻
let user1 = {
    name:"bharat",
    email:"jaidya@gmail.com",
    login:function(){
        console.log("user logged in")
    }
}
let user2 = {
    name:"bharat",
    email:"jaidya@gmail.com",
    login:function(){
        console.log("user logged in")
    }
}
let user3 = {
    name:"bharat",
    email:"jaidya@gmail.com",
    login:function(){
        console.log("user logged in")
    }
}
let user4 = {
    name:"bharat",
    email:"jaidya@gmail.com",
    login:function(){
        console.log("user logged in")
    }
}
let user5= {
    name:"bharat",
    email:"jaidya@gmail.com",
    login:function(){
        console.log("user logged in")
    }
}

class User{
    constructor(name,email){
        this.name = this.name,
        this.email = this.email;
        function login(){
            console.log("uer logged in")
        }
    }
}
let u1 = new User("Bhart","jadiya@gmail.com")
let u2 = new User("Bhart","jadiya@gmail.com")
let u3= new User("Bhart","jadiya@gmail.com")
let u4= new User("Bhart","jadiya@gmail.com")
let u5= new User("Bhart","jadiya@gmail.com")
// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// ⸻
class Car {
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }
    driver(){
        console.log(this.brand)
    }
}
let c1 = new Car("farari",55);
let c2 = new Car("jaguar",58);
// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// ⸻
class Student{
    constructor(name,rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }
    introduced(){
        console.log(this.name,this.rollNumber)
    }
}
let s = new Student("bharat",33);
// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.
// ⸻
function U(name){
    this.name = name;
    this.login = function(){
        console.log(name)
    }
}
U.prototype.protoLogin= function(){
    console.log(this.name);
}
let u6 = new U("bharat");
let u7 = new U("chetan");
console.log(u6.login === u7.login) // false
console.log(u6.protoLogin === u7.protoLogin) //true
// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

function print(){
    console.log(this.name)
}

let obj = {
    name :"github"
}
let newFun =  print.bind(obj)
newFun()