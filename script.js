//arrays below line
let wrongAnswers = ['Whats 2 + 2?','Whats 4+4?','Whats 8+8?'];
let choicesQuestion1 = ['4','Buffalo','9','Quick'];
//variables needed for button array
let createbuttona = document.createElement("Button")
let createbuttonb = document.createElement("Button")
let createbuttonc = document.createElement("Button")
let createbuttond = document.createElement("Button")
createbuttona.className= "btn btn-success"
createbuttonb.className= "btn btn-success"    
createbuttonc.className= "btn btn-success"
createbuttond.className= "btn btn-success" 
createbuttona.innerHTML = (wrongAnswers[0]);
createbuttonb.innerHTML = (wrongAnswers[1]);
createbuttonc.innerHTML = (wrongAnswers[2]);
createbuttond.innerHTML = (choicesQuestion1[3]);
//below is needed for shuffling what buttons are placed in what button elements
let elementButton = ['button1', 'button2', 'button3', 'button4'];
function randomelementbuttons(elementButton) {
    let currentIndex = elementButton.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = elementButton[currentIndex];
      elementButton[currentIndex] = elementButton[randomIndex];
      elementButton[randomIndex] = temporaryValue;
    }
  
    return elementButton;
  }
  randomelementbuttons(elementButton)
  //above is needed for shuffling what buttons are placed in what button elements
//variables needed for button array
let buttons = [createbuttona, createbuttonb, createbuttonc, createbuttond];
//arrays above line
//function shuffle buttons
function randombuttons(buttons) {
    let currentIndex = wrongAnswers.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = buttons[currentIndex];
      buttons[currentIndex] = buttons[randomIndex];
      buttons[randomIndex] = temporaryValue;
    }
  
    return buttons;
  }
  randombuttons(buttons);
//function shuffle array
function shuffle(wrongAnswers) {
    let currentIndex = wrongAnswers.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = wrongAnswers[currentIndex];
      wrongAnswers[currentIndex] = wrongAnswers[randomIndex];
      wrongAnswers[randomIndex] = temporaryValue;
    }
  
    return wrongAnswers;
  }
  shuffle(wrongAnswers);
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
    let body=document.getElementById("body");
    body.outerHTML=(wrongAnswers[0]);
    let answera=document.getElementById(elementButton[0])
    let answerb=document.getElementById(elementButton[1])
    let answerc=document.getElementById(elementButton[2])
    let answerd=document.getElementById(elementButton[3])
    let createbuttona = document.createElement("Button")
    let createbuttonb = document.createElement("Button")
    let createbuttonc = document.createElement("Button")
    let createbuttond = document.createElement("Button")
    createbuttona.className= "btn btn-success"
    createbuttonb.className= "btn btn-success"    
    createbuttonc.className= "btn btn-success"
    createbuttond.className= "btn btn-success" 
    answerb.appendChild(buttons[0]);
    createbuttona.innerHTML = (wrongAnswers[0]);
    createbuttonb.innerHTML = (wrongAnswers[0]);
    createbuttonc.innerHTML = (wrongAnswers[0]);
    createbuttond.innerHTML = (wrongAnswers[0]);
    answera.appendChild(buttons[1]);
    answerc.appendChild(buttons[2]);
    answerd.appendChild(buttons[3]);
   generateBtn.remove("Button")
    });


//generateBtn.addEventListener("click", doSomething () {
//confirms ("will your password contain lowercase letters?");
//});
