function matrixTextEffect(element){
    const text = element.innerText;
    const characters = "abcdefghijklmnopqrstuvwxyzABCHDEFGHIJKLMNOPQRSTUVWXYZ";
    let itration = 0;
    function randomStr (){
        let str = text.split("").map((char,idx)=>{
            if(idx < itration){
                return char;
            }
            return (characters.split("")[Math.floor(Math.random()*53)])
        }).join("")
        element.innerHTML = str;
        itration += 0.25;
    }
    
    element.addEventListener("mouseenter",(e)=>{
        let x =setInterval(randomStr,30);
        setTimeout(() => {
            clearInterval(x);
        },((4*text.length))*30);
    })

}    

let p = document.querySelector("p");
let h = document.querySelector("h1")
matrixTextEffect(p);
matrixTextEffect(h);