// //1.print even numbers only
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// //2. print 10 to 1
// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// //3. check the user is eligible for voet
// let age = prompt("Enter your age");
// if (age === null) {
//     console.error("you have clicked cancel");
// }
// else {
//     age = age.trim();
//     if (age === "") {
//         console.error("Enter the valid input");
//     }
//     else if (isNaN(age)) {
//         console.error("Enter the number not string");
//     }
//     else {
//         //input is in correct format now
//         if (age >= 18) console.log("elegible");
//         else console.log("no eligible");
//     }
// }

// //4. multiplication table of 5
// for (let i = 1; i < 11; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// //5.Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.
// for (let i = 9; i <= 15; i++) {
//     console.log()
// }

// //6. Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let hardcoded = "78946@#";
// let password = prompt("Enter password");
// if (hardcoded === password) {
//     console.log("Accessible");
// }
// else {
//     console.log("Not Accesible");
// }

// //7.Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”
// for (let attempt = 1; attempt <= 3; attempt++) {
//     let hardcoded = "78946@#";
//     let password = prompt("Enter password");
//     if (hardcoded === password) {
//         console.log("Accessible");
//     }
// }
// console.log("Access locked");

//.8 Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
// let input = prompt("Enter word")
// let count = 0;
// while (input !== "stop") {
//     if (input === "yes") count++;
//     input = prompt("Enter word")
// }
// console.log(input + " " + count);


//9.Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

for(let i=1; i< 51;i++){
    if((i%7) === 0){
        console.log(i);
    }
}