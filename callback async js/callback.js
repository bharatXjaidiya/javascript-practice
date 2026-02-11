// ## Exercise 1 — Very Easy (Warming up)
// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

function afterDelay(time,cb){
    setTimeout(()=>{
        cb("callback executed")
    },time);
}
afterDelay(2000,(result)=>{
    console.log(result)
})
// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

function getData(userName,cb){
    setTimeout(()=>{
        cb({id:1,username:userName});
    },1000)
}
function getUserPosts(userId,cb){
    setTimeout(()=>{
        cb(["post1","post2"])
    },1000)
}
getData("Bharat",(data)=>{
    console.log(data.username)
    getUserPosts(data.id,(allPosts)=>{
        console.log(allPosts)
    })
})
// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

function loginUser(username,cb){
    console.log("feching user details...")
    setTimeout(() => {
        cb({userId:22,userName:username})
    }, 5000);
}

function fetchPermissions(userId,cb){
    console.log("feching permissions...")
    setTimeout(()=>{
        cb(["crendtals are valid","user is authentic"])
    },6000)
}
function loadDashboard(permissions,cb){
    console.log("loading dashboard...")
    setTimeout(() => {
        cb();
    }, 7000);
}
loginUser("Bharat",(userData)=>{
    fetchPermissions(userData.userId,(permissions)=>{
        loadDashboard(permissions,()=>{
            console.log("Dashboard loaded");
        })
    })
})
// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.
// Displaying Day 60 Question Sheet.md.