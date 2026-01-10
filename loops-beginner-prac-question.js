//1.print even numbers only
for(let i=0; i<20; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

//2. print 10 to 1

for(let i =10; i>0;i--){
    console.log(i)
}

//3. check the user is eligible for voet

let age = prompt("Enter your age");
if(age === null){
    console.error("you have clicked cancel")
}
else{
    age = age.trim();
    if(age === ""){
        console.error("Enter the valid input")
    }
    else if(isNaN(age)){
        console.error("Enter the number not string")
    }
    else{
        //input is in correct format now
        if(age >= 18) console.log("elegible");
        else console.log("no eligible");
    }
}