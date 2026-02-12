// ## Scenario 2 — Bulk Email Sending Simulation with Parallel new Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `new Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `new Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `new Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.

let usersEmails = ["bharat@gmail.com", "arsh@outlook.com", "arun@femail.com"];

function sendEmail(emialId) {
    return new Promise((resolve,reject) => {
        let time = Math.floor(Math.random()*5);
        let r = Math.floor(Math.random()*10);
        setTimeout(() => {
            if(r > 4){
                resolve(`email successfully sent to ${emialId}`);
            }
            else{
                reject("email is not not sent");
            }
        },time*1000)
    })
}

async function sendEmails(usersEmails){
    let promises = usersEmails.map((email)=>{ 
        return sendEmail(email)
        .then((data)=>{
            return data;
        })
        .catch((err)=>{
            return err;
        })
    })
    let result = await Promise.all(promises)
    console.log(result)
}
  
sendEmails(usersEmails)  