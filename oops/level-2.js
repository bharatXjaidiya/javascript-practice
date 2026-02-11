
// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
let laptop = {
    brand : "HP",
    price : 55000,
    start : function(){
        console.log("laptop started");
    }
}
// 	2.	Add one more method to the same object that increases the price by 10 percent.
laptop.increasePrice = function(){
    let oldPrice = laptop.price;
    let newPrice = oldPrice + ((oldPrice*10)/100);
    laptop.price = newPrice;
}
// 	3.	Now imagine you need 10 laptops with same structure but different data. Write down (in words or code) what problems you will face if you keep using plain objects.
    // ----> code gets lengthy and redablity will be reduced        

// SECTION 2: Classes and Objects (Reinforcement)

// 	4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.
class Employee{
    constructor(name , salary){
        this.name = name;
        this.salary = salary;
    }
    showDetails(){
        console.log(this.name , this.salary)
    }
}
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
let e1 = new Employee("bharat",500000000);
let e2 = new Employee("arsh",2000);
let e3 = new Employee("abhishek",100000);

e2.name = "chetan";
e3.showDetails();
// 	6.	Explain in your own words: Why is class considered a better option than writing similar objects again and again?
    // increases the code reusablity and esacpe you from repeat your self 
// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount. Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
class BankAccount{
    constructor(accountHolderName,balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    desposit(amount){
        this.balance += amount;
    }
}
// 	10.	Create two bank accounts and deposit money into only one. Observe and explain why the second account is not affected.
let b1 = new BankAccount("Bharat",100);
let b2 = new BankAccount("arhs",200);
b1.desposit(50);
console.log(b1 , b2); // the b2 is not changed because they both are diffrenct instance of the same class or diff objects
// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	.12.	Call the method normally and observe the output.
let profile = {
    username : "bharat",
    printName: function(){
        console.log(this.username);
    },
}
profile.printName()
// 	13.	Store the method in a separate variable and call it. Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.
let fun = profile.printName();
// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// ⸻
function Vehicle(type , wheels){
    this.type = type;
    this.wheels = wheels;
    function describe(){
        console.log(this.type,this.wheels)
    }
}
Vehicle.prototype.sharedDescribe=function(){
    console.log(this.type,this.wheels)
}
let v1 = new Vehicle("fortuner",4);
let v2 = new Vehicle("fortuner",4);

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
// ⸻
function showBrand(){
    console.log(this.brand)
}
let obj1={
    brand:"nicke"
}
let obj2={
    brand:"hp"
}
showBrand.call(obj1)
showBrand.call(obj2)
