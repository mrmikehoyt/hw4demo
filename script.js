"use strict";

//arrays below line
let questions = ['What does the concept of diversity in the workplace refer to?', 'The UK Equality Act was promulgated in', 'In which country was the Black Economic Empowerment (BEE) Programme launched in 2001:','The ‘Liberal Approach’ to Equal Opportunities advocates:']
let wrongAnswers = ['Physical differences among employees','Historical differences among groups','Managerial difference among employees', '1970', '2000', '2005', 'Japan', 'India', 'China', 'Positive discrimination', 'The quota system', 'Policies concerned with the specific needs of traditionally disadvantaged groups'];
let correctAnswers = ['Social differences among employees','2010','South Africa','The possibility for individuals to compete for social rewards without constraints'];
//arrays above line
//let numbers = ['0','1','2','3','4','5','6','7','8','9'];

//below used for declaring where tags are for buttons
let generateBtn = document.querySelector("#generate");
let GenerateBtn2 = document.querySelector("#generate2");
let GenerateBtn3 = document.querySelector("#generate3");
let GenerateBtn4 = document.querySelector("#generate4");
let GenerateBtn5 = document.querySelector("#generate5");
//above used for declaring where tags are for buttons
//below used for removing (hiding) answer buttons from main page
document.getElementById("generate2").style.visibility = "hidden";
document.getElementById("generate3").style.visibility = "hidden";
document.getElementById("generate4").style.visibility = "hidden";
document.getElementById("generate5").style.visibility = "hidden";
//above used for removing (hiding) answer buttons from main page

      generateBtn.addEventListener("click", function question1(){
      prepareRead();
      let quizbox=document.getElementById("body");
      quizbox.innerHTML = (questions[0]);
      document.getElementById("generate2").style.visibility = "visible";
      document.getElementById("generate3").style.visibility = "visible";
      document.getElementById("generate4").style.visibility = "visible";
      document.getElementById("generate5").style.visibility = "visible";
      document.getElementById("generate").style.visibility = "hidden";
      GenerateBtn2.innerHTML = (wrongAnswers[0]);    
      GenerateBtn3.innerHTML = (wrongAnswers[1]);    
      GenerateBtn4.innerHTML = (wrongAnswers[2]);    
      GenerateBtn5.innerHTML = (correctAnswers[0]);    
      })                  

GenerateBtn5.addEventListener("click", function question2(){
confirm ("You got it right");
GenerateBtn5.innerHTML = (wrongAnswers[2]);
GenerateBtn2.remove("Button")
GenerateBtn3.remove("Button")
GenerateBtn4.remove("Button")
timeLeft = timeLeft-100;
})
      //below is function that is for timer
      let timerEl = document.getElementById("countdown");
      function prepareRead() {
      //timeleft is global variable so it can be updated outside function when questions are answered incorrectly 
            window.timeLeft = 500;
    
            let timeInterval = setInterval(function() {
            timerEl.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
    
            if (timeLeft === 0) {
            timerEl.textContent = "";
            }
            }, 1000);
      }
      //above is function that is for timer
    
