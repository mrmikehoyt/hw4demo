//arrays below line
let questions = ['Whats 2 + 2?','Whats 4+4?','Whats 8+8?'];
let choicesQuestion1 = ['4','Buffalo','9','Quick'];
//arrays above line
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
    let body=document.getElementById("body");
    body.outerHTML=(questions[0]);
    let answera=document.getElementById("button1")
    let answerb=document.getElementById("button2")
    let answerc=document.getElementById("button3")
    let answerd=document.getElementById("button4")
    let createbuttona = document.createElement("Button")
    createbuttona.className= "btn btn-success"
    
    createbuttona.innerHTML = (questions[1]);
    answera.appendChild(createbuttona);
   generateBtn.remove("Button")
    });


//generateBtn.addEventListener("click", doSomething () {
//confirms ("will your password contain lowercase letters?");
//});
