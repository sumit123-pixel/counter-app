let count = document.querySelector("#count");
let countAdd = document.querySelector("#countAdd");
let countSub = document.querySelector("#countSub");
let resetbtn = document.querySelector("#resetbtn");

let counting=0;

const numbers=()=>{
    count.innerText = `Count:${counting}`;
}

const reset =()=>{
    counting=0;
    numbers();
}

countAdd.addEventListener("click",()=>{
    console.log("Add button was clicked")
     counting++;
     numbers();
});

countSub.addEventListener("click",()=>{
    if(counting===0){
        countSub.disabled=true;
    }
    else{
    console.log("sub button was clicked");
    counting--;
    numbers();
    }
});

resetbtn.addEventListener("click",()=>{
    console.log("count is reseting")
    reset();
});